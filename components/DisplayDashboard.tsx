import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import RenderArtistsFollowers from "./ArtistsComponents/RenderArtistsFollowers";
import RenderArtistNames from "./ArtistsComponents/RenderArtistNames";
import RenderArtistsPopularity from "./ArtistsComponents/RenderArtistsPopularity";
import RenderArtistsImages from "./ArtistsComponents/RenderArtistsImages";
import RenderArtistsRating from "./ArtistsComponents/RenderArtistsRating";

export default function DashboardDashboard({ items, SearchQuery }: any) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items
        ? items.artists?.items
            ?.filter((item: any) =>
              item.name.toLowerCase().startsWith(SearchQuery.toLowerCase())
            )
            .map((filteredItem: any) => {
              return (
                <Link href="/artistAlbums/">
                  <Card
                    onClick={() => {
                      localStorage.setItem("id", filteredItem.id);
                    }}
                    style={{ margin: "10px" }}
                    sx={{ maxWidth: 300 }}
                  >
                    <CardContent>
                      <RenderArtistsImages images={filteredItem.images} />
                      <RenderArtistNames names={filteredItem.name} />
                      <RenderArtistsFollowers
                        followers={filteredItem.followers.total}
                      />
                      <RenderArtistsPopularity
                        popularity={filteredItem.popularity}
                      />
                      <RenderArtistsRating
                        popularity={filteredItem.popularity}
                      />
                    </CardContent>
                  </Card>
                </Link>
              );
            })
        : null}
    </div>
  );
}
