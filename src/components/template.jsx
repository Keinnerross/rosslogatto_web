import "../../styles/components/template.css"

const Template = ({ children }) => {
    return (
        <div className="templateContainer">
            <div className="navContainer">
                <div className="navSection">
                    <span>RossLogatto</span>
                    <div className="navMenu">
                        <span>Item</span>
                        <span>Item</span>
                        <span>Item</span>
                        <span>Item</span>
                    </div>
                </div>
            </div>
            <div className="contentContainer">
            <div className="contentSection">

                {children}
            </div>
            </div>
            <div className="footerContainer">
                <span>Keinnerross® 2024 </span>
            </div>
        </div>
    )
}

export default Template;