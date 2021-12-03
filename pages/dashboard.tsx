import SearchComponent from "../components/SearchComponent";
import useConnectDashboard from "../hooks/useConnectDashboard";
import DashboardDashboard from "../components/DisplayDashboard";
import useLogin from "../hooks/useLogin";
import Meta from "../components/Meta";

export default function Dashboard() {
  useLogin();
  const [SearchQuery, setSearchQuery, items, setItems] = useConnectDashboard(
    "a",
    "",
    "accessToken"
  );

  return (
    <>
      <Meta
        title="Arist's Information"
        keywords="Artists,Information"
        description="Lists the Arists's Information"
      />
      <SearchComponent
        searchQuery={SearchQuery}
        onChange={(e: any) => {
          setSearchQuery(e.target.value);
        }}
      />
      <DashboardDashboard items={items} SearchQuery={SearchQuery} />
    </>
  );
}
