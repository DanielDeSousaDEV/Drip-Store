import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductListingPage } from "../pages/ProductListingPage";
import { ProductViewPage } from "../pages/ProductViewPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/produtos" element={<ProductListingPage/>} />
                <Route path="/produtos/:id" element={<ProductViewPage />} />
            </Routes>
        </BrowserRouter>
    )
}