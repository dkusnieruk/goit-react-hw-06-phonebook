import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'features/Contacts/Contacts';
import ContactList from './ContactList/ContactList2';
import { Filters } from 'features/Filter/Filter';

function App() {
  const getStorage = localStorage.getItem('contact');
  let [contacts, setContacts] = useState(JSON.parse(getStorage));
 
  useEffect(() => {
    localStorage.setItem(`contact`, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const checkArray = contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = newContact.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length > 0) {
      alert(`Masz już kontakt o imieniu : ${newContact.name}`);
    } else setContacts([...contacts, newContact]);
  };
  return (
    <>
      <Contacts/>
      <Filters/>
      <ContactList/>
      
      <br/>
    
    </>
  );
}

export default App;
