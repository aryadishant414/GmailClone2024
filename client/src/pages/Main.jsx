import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import Emails from '../components/Emails';



// this file contains all the components of our GMAIL CLONE
const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);
    
    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    } 

    return(
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <SideBar openDrawer={openDrawer} />
            <Emails openDrawer={openDrawer} />
        </div>
    )
};

export default Main;