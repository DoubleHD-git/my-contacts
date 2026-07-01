import { useState } from "react";

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    category: "",
    closeness: "",
    note: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
      id: Date.now(),
      ...formData,
    };

    onAddContact(newContact);

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      category: "",
      closeness: "",
      note: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>

      <input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />

      <input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />

      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />

      <input name="closeness" placeholder="Closeness" value={formData.closeness} onChange={handleChange} />

      <textarea name="note" placeholder="Note" value={formData.note} onChange={handleChange}></textarea>

      <br />

      <button type="submit">Save Contact</button>
    </form>
  );
}