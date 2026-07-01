import { useState, useEffect } from "react";

export default function ContactForm({ onAddContact, editingContact }) {
  const emptyForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: "",
    closeness: "",
    note: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact);
    } else {
      setFormData(emptyForm);
    }
  }, [editingContact]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const contact = {
      ...formData,
      id: formData.id || Date.now(),
    };

    onAddContact(contact);

    setFormData(emptyForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? "Edit Contact" : "Add New Contact"}</h2>

      <input
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        name="closeness"
        placeholder="Closeness"
        value={formData.closeness}
        onChange={handleChange}
      />

      <textarea
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
      />

      <br />

      <button type="submit">
        {editingContact ? "Update Contact" : "Save Contact"}
      </button>
    </form>
  );
}