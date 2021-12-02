import useConnectArtistAlbums from "../hooks/useConnectArtistAlbums";
import DisplayArtistAlbums from "../components/DisplayArtistAlbums";

export default function ArtistAlbums() {
  const [items, setItems] = useConnectArtistAlbums("", "accessToken", "id");

  return <DisplayArtistAlbums items={items} />;
}
