import ContentBox from "./ContentBox";
import SearchBar from "./SearchBar";
import Sidebar from "./SideBar";

function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <SearchBar />
            <ContentBox />
        </div>
    );
}

export default Dashboard;
