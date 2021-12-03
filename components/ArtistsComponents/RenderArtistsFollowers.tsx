import Typography from "@mui/material/Typography";

export default function RenderArtistsFollowers({ followers }: any) {
  return (
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {followers} followers
    </Typography>
  );
}
