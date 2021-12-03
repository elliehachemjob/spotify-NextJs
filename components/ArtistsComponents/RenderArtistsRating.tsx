import Rating from "@mui/material/Rating";

export default function RenderArtistsRating({ popularity }: any) {
  return (
    <Rating
      style={{ position: "relative", top: 25, right: 4.5 }}
      name="simple-controlled"
      value={popularity > 40 ? 5 : 3}
    />
  );
}
