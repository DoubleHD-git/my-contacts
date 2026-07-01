import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <main>
      <Header />

      <SearchBar />

      <br />
      <br />

      <button>Add Contact</button>

      <hr />

      <ContactCard />
    </main>
  );
}