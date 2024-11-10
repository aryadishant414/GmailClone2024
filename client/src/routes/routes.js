
// Lazy only loads those components which are needed
import { lazy} from "react";

// import Main from "../pages/Main";
// import Emails from "../components/Emails";
// import ViewEmail from "../components/ViewEmail";
const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));


const routes = {
    main: {  // parent
        path: '/',
        element: Main
    },
    emails: {  // first child
        path: '/emails',
        element: Emails
    },
    view: {  // second child
        path: '/view',
        element: ViewEmail
    },
    invalid: {
        path: '/*',
        element: Emails
    }
    
};

export {routes};