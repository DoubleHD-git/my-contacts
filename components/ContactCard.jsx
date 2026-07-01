export default function ContactCard({contact, onDelete}) {
    return (
        <article>
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>

            <p>Phone: {contact.phone}</p>

            <p>Email: {contact.email}</p>

            <p>Category: {contact.category}</p>

            <p>Closeness: {contact.closeness}</p>

            <p>Note: {contact.note}</p>

            <button>Edit</button>

            <button onClick={() => onDelete(contact.id)}>Delete</button>

            <hr />
        </article>
    );
}