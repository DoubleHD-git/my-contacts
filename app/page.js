"use client";

import { useState, useEffect } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

import contactsData from "../data/contacts";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(contactsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(contact) {
    if (editingContact) {
      setContacts(
        contacts.map((c) => (c.id === contact.id ? contact : c))
      );
      setEditingContact(null);
    } else {
      setContacts([...contacts, contact]);
    }

    setShowForm(false);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  function editContact(contact) {
    setEditingContact(contact);
    setShowForm(true);
  }

  function openNewContactForm() {
    setEditingContact(null);
    setShowForm(true);
  }

  return (
    <main>
      <Header />

      <SearchBar />

      <br />

      <button onClick={openNewContactForm}>
        Add Contact
      </button>

      {showForm && (
        <ContactForm
          onAddContact={addContact}
          editingContact={editingContact}
        />
      )}

      <hr />

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={deleteContact}
            onEdit={editContact}
          />
        ))
      )}
    </main>
  );
}