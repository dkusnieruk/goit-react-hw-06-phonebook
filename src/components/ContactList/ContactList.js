import { selectContacts } from 'Redux/ContactsSlice';
import { selectFilters } from 'Redux/FilterSlice';
import { useSelector } from 'react-redux';
import css from '../ContactList/contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilters);
  const filterValue = filter.filters;
  console.log(filter);
  return (
    <>
      <ul className={css.listMain}>
        {contacts
          .filter(contact => {
            const searchType = filterValue.toLowerCase();
            const contactType = contact.name.toLowerCase();

            return contactType.includes(searchType);
          })
          .map((contact, index) => {
            return <ContactItem contact={contact} index={index} key={index} />;
          })}
      </ul>
    </>
  );
}

export default ContactList;
