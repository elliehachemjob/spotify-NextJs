import useConnectArtistAlbums from "../hooks/useConnectArtistAlbums";
import DisplayArtistAlbums from "../components/DisplayArtistAlbums";
import Meta from "../components/Meta";

export default function ArtistAlbums() {
  const [items, setItems] = useConnectArtistAlbums("", "accessToken", "id");

  return (
    <>
      <Meta
        title="Arists's Albums"
        keywords="Artists,albums"
        description="Lists the Arists's Albums"
      />
      <DisplayArtistAlbums items={items} />
    </>
  );
}
