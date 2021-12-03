import CardMedia from "@mui/material/CardMedia";
// @ts-ignore
import { removeDuplicates } from "helprjs";

export default function RenderAlbumsImages({ images }: any) {
  const arrayFiltered = removeDuplicates(images, "width");

  // images.filter(
  //   (v: any, i: any, a: any) => a.findIndex((t: any) => t.name === v.name) === i
  // );

  return (
    <>
      {images
        .filter((img: any) => img.height === 300)
        // .filter((img: any) => img.name !== img.name)
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
