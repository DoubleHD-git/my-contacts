export default function ContactCard({ contact, onDelete, onEdit }) {
  return (
    <article className="contact-card">
      <h2>{contact.firstName} {contact.lastName}</h2>

      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
      <p>👥 {contact.category}</p>
      <p>❤️ {contact.closeness}</p>
      <p>📝 {contact.note}</p>

      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(contact)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </article>
  );
}