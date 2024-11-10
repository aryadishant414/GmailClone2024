
import { useOutletContext } from "react-router-dom";

// This will list all the emails
const Emails = () => {

    const {openDrawer} = useOutletContext();
    
    return (
        <div style={ openDrawer ? { marginLeft: 250, width: '100%' } : {width: '100%'}}>
            Hello From Emails
        </div>
    )
};

export default Emails;