import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from './Contactlist';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <h1>Contact List</h1>
      <Contactlist contacts={contacts} getContactID={removeContactHandler}
      />
      {/* {contacts.map((contact) => <div className='ui celled list'><ContactCard contact={contact} /></div>)} */}
    </div>
  );
}

export default App;
