import CardMedia from "@mui/material/CardMedia";

export default function RenderAlbumsImages({ images }: any) {
  return (
    <>
      {images
        .filter((img: any) => img.height === 300)
        .map((img: any) => {
          return (
            <CardMedia
              component="img"
              height="200"
              image={img.url}
              alt="album cover"
            />
          );
        })}
    </>
  );
}
