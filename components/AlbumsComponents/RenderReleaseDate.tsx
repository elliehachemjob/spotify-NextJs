import Typography from "@mui/material/Typography";

export default function RenderReleaseDate({ date }: any) {
  return (
    <Typography sx={{ position: "relative", top: 35 }} color="text.secondary">
      {date}
    </Typography>
  );
}
