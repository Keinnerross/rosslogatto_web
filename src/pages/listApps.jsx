import "../../styles/pages/listsApps.css"

import Banner from "../components/listsApps/banner";
import CardApps from "../components/listsApps/CardApps";
const ListApps = () => {
    return (
        <div className="listAppsContainer">
            <Banner />
            <h3>New Games</h3>
            <div className="listAppSection">
                <CardApps></CardApps>
            </div>
        </div>
    )
}

export default ListApps;