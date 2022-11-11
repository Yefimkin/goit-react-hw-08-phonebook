import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuthentication } from 'redux/authentication/authenticationSlice';
import { login } from 'redux/authentication/authenticationOperation';
import { Loader } from '../Loader/Loader';
import style from '../ContactForm/ContactForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
        setEmail('');
        setPassword('');
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuthentication);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email: email, password: password }));

    setEmail('');
    setPassword('');
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit}>
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
        placeholder="your_email"
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
        placeholder="Enter your Password"
        className={style.input}
      />
      {!isLoading ? (
        <button type="submit" className={style.button}>
          Log In
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
};

export default LoginForm;
