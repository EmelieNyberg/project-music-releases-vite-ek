import data from "./data.json";
import { Header } from "./components/Header";
import { AlbumCard } from "./components/AlbumCard";

console.log(data.albums.items);

export const App = () => {
  return (
    <>
      <Header />
      <main className="album-card-container">
        {data.albums.items.map((albumcard) => (
          <AlbumCard key={albumcard.id} albumcard={albumcard} />

        ))}
      </main>
    </>
  );
};
