import Typography from "@mui/material/Typography";

export default function RenderArtistIncluded({ artists }: any) {
  return (
    <Typography sx={{ position: "relative", top: 25 }} color="text.secondary">
      {artists.map((artistsIncluded: any) => {
        return <span> {artistsIncluded.name} /</span>;
      })}
    </Typography>
  );
}
