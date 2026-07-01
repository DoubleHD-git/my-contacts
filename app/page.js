"use client";

import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import initialContacts from "../data/contacts";

export default function Home() {
  const [contacts, setContacts] = useState(initialContacts);
  const [showForm, setShowForm] = useState(false);

  const [editingContact, setEditingContact] = useState(null);
  function addContact(newContact) {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  }
  
  function deleteContact(id) {
  setContacts(
    contacts.filter((contact) => contact.id !== id)
  );
}
function editContact(contact) {
    setEditingContact(contact);
    setShowForm(true);
}

  return (
    <main>
      <Header />

      <SearchBar />

      <br />

      <button onClick={() => setShowForm(true)}>Add Contact</button>
{showForm && <ContactForm onAddContact={addContact} editingContact={editingContact}/>}

      <hr />

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} onEdit={editContact}/>
        ))
      )}
    </main>
  );
}