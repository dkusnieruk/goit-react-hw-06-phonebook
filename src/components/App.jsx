import { Contacts } from 'features/Contacts/Contacts';
import ContactList from './ContactList/ContactList2';
import { Filters } from 'features/Filter/Filter';

function App() {
  return (
    <>
      <Contacts />
      <Filters />
      <ContactList />

      <br />
    </>
  );
}

export default App;
