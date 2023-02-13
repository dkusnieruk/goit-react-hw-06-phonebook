import { deleteContact } from "features/Contacts/ContactsSlice";
import { useDispatch } from "react-redux";
function ContactItem({contact}) {
    const dispatch = useDispatch()
    return (
<>
<li 
// className={css.singleItem} 
key={contact.id}>
      {contact.name}: {contact.number}
      <button
        // className={css.removeButton}
        type="button"
        id={contact.id}
        onClick = {() => dispatch(deleteContact(contact.id))}
        // onClick={() => handleRemove(contact.id)}
      >
        X
      </button>
    </li>
</>

      );
}

export default ContactItem;