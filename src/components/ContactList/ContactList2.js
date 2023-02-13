import { selectContacts } from "features/Contacts/ContactsSlice";
import { selectFilters } from "features/Filter/FilterSlice";
import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem/ContactItem2";
function ContactList() {
    const contacts = useSelector(selectContacts)
    
    const filter = useSelector(selectFilters)
    console.log(filter.filters);
    return (<>
    <ul 
    // className={css.listMain}
    >
      {contacts
        // .filter(contact => {
        //   const searchType = filter.toLowerCase();
        //   const contactType = contact.name.toLowerCase();

        //   return contactType.includes(searchType);
        // })
        .map((contact, index) => {
          return (
            <ContactItem
              contact={contact}
              index={index}
                key={index}
            />
          );
        })}
    </ul>
    </>  );
}

export default ContactList;