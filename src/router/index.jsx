import About from "../components/About";
import { createBrowserRouter } from 'react-router-dom';
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <About />,
        
    },
    {
        path: "/contact",
        element: <Contact />,
        
    }
]);