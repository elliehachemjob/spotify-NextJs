import SearchComponent from "../components/SearchComponent";
import useConnectDashboard from "../hooks/useConnectDashboard";
import DashboardDashboard from "../components/DisplayDashboard";
import useLogin from "../hooks/useLogin";

export default function Dashboard() {
  useLogin();
  const [SearchQuery, setSearchQuery, items, setItems] = useConnectDashboard(
    "a",
    "",
    "accessToken"
  );

  return (
    <div>
      <SearchComponent
        searchQuery={SearchQuery}
        onChange={(e: any) => {
          setSearchQuery(e.target.value);
        }}
      />
      <DashboardDashboard items={items} SearchQuery={SearchQuery} />
    </div>
  );
}
