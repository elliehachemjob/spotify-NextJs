import Typography from "@mui/material/Typography";

export default function RenderArtistsPopularity({ popularity }: any) {
  return (
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {popularity} followers
    </Typography>
  );
}
