import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import RenderArtistNames from "./ArtistsComponents/RenderArtistNames";
import RenderReleaseDate from "./AlbumsComponents/RenderReleaseDate";
import RenderTracksNumbers from "./AlbumsComponents/RenderTracksNumbers";
import RenderAlbumsImages from "./AlbumsComponents/RenderAlbumsImages";
import RenderArtistIncluded from "./AlbumsComponents/RenderArtistIncluded";

export default function DisplayArtistAlbums({ items }: any) {
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
      {items
        ? items.items.map((item: any) => {
            return (
              <div>
                <Card style={{ margin: "10px" }} sx={{ maxWidth: 300 }}>
                  <CardContent>
                    <RenderAlbumsImages images={item.images} />
                    <RenderArtistNames names={item.name} />
                    <RenderReleaseDate date={item.release_date} />
                    <RenderTracksNumbers tracks={item.total_tracks} />
                    <RenderArtistIncluded artists={item.artists} />
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        window.open(item.external_urls.spotify);
                      }}
                    >
                      Preview On Spotify
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
}
