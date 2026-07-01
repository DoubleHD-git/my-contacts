import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ContactCard from "../components/ContactCard";
import contacts from "../data/contacts";

export default function Home() {
    return (
        <main>

            <Header />

            <SearchBar />

            <br />

            <button>Add Contact</button>

            <hr />

            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}

        </main>
    );
}