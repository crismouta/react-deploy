import About from "../components/About";
import { createHashRouter } from 'react-router-dom';
import Contact from "../components/Contact";

export const router = createHashRouter([
    {
        path: "/",
        element: <About />,
        
    },
    {
        path: "/contact",
        element: <Contact />,
        
    }
]);