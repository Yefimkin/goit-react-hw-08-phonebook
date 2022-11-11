import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuthentication } from 'redux/authentication/authenticationSlice';
import { registerUser } from 'redux/authentication/authenticationOperation';
import { Loader } from '../Loader/Loader';
import style from '../ContactForm/ContactForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setName(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuthentication);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ name: name, email: email, password: password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={nameId}>
        Name
      </label>
      <input
        id={nameId}
        type="text"
        name="userName"
        value={name}
        onChange={handleChange}
        required
        placeholder="Choose your Name"
        className={style.input}
      />
      <label className={style.label} htmlFor={emailId}>
        Email
      </label>
      <input
        id={emailId}
        type="email"
        name="userEmail"
        value={email}
        onChange={handleChange}
        required
        placeholder="Choose your Email"
        className={style.input}
      />
      <label className={style.label} htmlFor={passwordId}>
        Password
      </label>
      <input
        id={passwordId}
        type="password"
        name="userPassword"
        value={password}
        onChange={handleChange}
        required
        placeholder="Choose your Password"
        className={style.input}
      />
      {!isLoading ? (
        <button type="submit" className={style.button}>
          Sign Up
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
};
export default RegisterForm;
