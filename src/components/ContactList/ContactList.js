import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/asyncThunk'
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import style from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const {items, error, isLoading} = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        if (!filter) {
            return items;
        }
        
        return items.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactsToRender = getFilteredContacts()

    return <ul className={style.list}>
        {isLoading && <div><Loader /></div>}
        {error && <div>Something went wrong, please, try again</div>}
        {contactsToRender.map(item =>
            <ContactItem key={item.id} data={item} />)
        }
    </ul>
}

export default ContactList;
