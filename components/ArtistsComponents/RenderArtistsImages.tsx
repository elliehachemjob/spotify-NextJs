export default function RenderArtistsImages({ images }: any) {
  return (
    <>
      {images
        .filter((img: any) => img.height === 160)
        .map((img: any) => {
          return <img src={img.url} />;
        })}
    </>
  );
}
