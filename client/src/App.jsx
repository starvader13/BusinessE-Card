import Navbar from "./sections/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomRoutes from "./utils/CustomRoutes.js";
import {Suspense} from "react";
import Footer from "./sections/Footer.jsx";

function App() {

    return <main>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {
                    CustomRoutes.map((CustomRoute, index) => {
                        return <Route key={index} path={CustomRoute.path}
                                      element={<Suspense fallback={"loading..."}><CustomRoute.element/></Suspense>}/>
                    })
                }
            </Routes>
            <Footer />
        </BrowserRouter>
    </main>

}

export default App
