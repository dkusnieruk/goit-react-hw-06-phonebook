import { deleteContact } from 'Redux/ContactsSlice';
import { useDispatch } from 'react-redux';
import css from '../ContactItem/contactItem.module.css';
function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.singleItem} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={css.removeButton}
          type="button"
          id={contact.id}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          X
        </button>
      </li>
    </>
  );
}

export default ContactItem;
