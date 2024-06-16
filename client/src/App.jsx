import Navbar from "./sections/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomRoutes from "./utils/CustomRoutes.js";
import {Suspense} from "react";
import Footer from "./sections/Footer.jsx";
import {RecoilRoot} from "recoil";
import SuspenseLoading from "./sections/SuspenseLoading.jsx";

function App() {

    return <main>
        <BrowserRouter>
            <RecoilRoot >
                <Navbar/>
                <Routes>
                    {
                        CustomRoutes.map((CustomRoute, index) => {
                            return <Route key={index} path={CustomRoute.path}
                                          element={<Suspense fallback={<SuspenseLoading />}><CustomRoute.element/></Suspense>}/>
                        })
                    }
                </Routes>
                <Footer />
            </RecoilRoot>
        </BrowserRouter>
    </main>

}

export default App
