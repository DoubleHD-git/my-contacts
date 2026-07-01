export default function ContactCard({ contact }) {
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

            <button>Delete</button>

            <hr />
        </article>
    );
}