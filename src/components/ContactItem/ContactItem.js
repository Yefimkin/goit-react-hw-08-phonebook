import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/asyncThunk';
import style from './ContactItem.module.css';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  const onDeleteClick = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting...';
      e.target.setAttribute('disabled', 'true');
    }
    dispatch(deleteContact(id))
  }

  return (
    <li className={style.contact}>
      <p>{name}: {number}</p>
      <button id={id} onClick={(e) => onDeleteClick(e, id)} className={style.deleteButton}>Delete</button>
      {/* <button id={id} onClick={(e) => onDeleteClick(e, id)} className={style.noselect}><span className={style.text}>Delete</span><span className={style.icon}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button> */}
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired,),
}