import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <main>
      <Header />

      <SearchBar />

      <br />
      <br />

      <button>Add Contact</button>

      <hr />

      <p>No contacts yet.</p>
    </main>
  );
}