import Typography from "@mui/material/Typography";

export default function RenderTracksNumbers({ tracksNumber }: any) {
  return (
    <Typography sx={{ position: "relative", top: 30 }} color="text.secondary">
      {tracksNumber} tracks
    </Typography>
  );
}
