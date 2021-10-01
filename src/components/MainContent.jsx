import React from "react";
import SideNavbar from "./SideNavbar";
import Navbar from "./Navbar";

const MainContent = (props) => {
    console.log(props.activeNavItem);
    return(
        <React.Fragment>
            <SideNavbar activeNavItem={props.activeNavItem} />
            <div className="main-content">
                <div className="page-content mt-2">
                    <Navbar />
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainContent;