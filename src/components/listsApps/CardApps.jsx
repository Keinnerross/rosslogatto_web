import "../../../styles/components/listsApps/cardApps.css"

const CardApps = () => {
    return (
        <div className="cardContainer">
            <div className="cardSection">
                <div className="cardImage"></div>
                <div className="gameDescriptionContainer">
                    <div className="gameIconContainer"></div>
                    <div className="gameDescriptionSection">
                        <span className="titleApp">App Title</span>
                        <span className="categoryApp">Category</span>
                        <span className="ratingAApp">4.5★</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardApps;