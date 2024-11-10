
import { useOutletContext } from "react-router-dom";

// This component will show the specific content inside a single email when we click on a particular email from the list of emails
const ViewEmail = () => {

  const {openDrawer} = useOutletContext();

  return (
    <div style={ openDrawer ? { marginLeft: 250, width: '100%' } : {width: '100%'}}>Hello from ViewEmail</div>
  )
}

export default ViewEmail;