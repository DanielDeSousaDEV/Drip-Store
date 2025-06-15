import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Logo } from "../components/Logo";
import { HomePage } from "../pages/HomePage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/logo" element={<Logo/>} />
            </Routes>
        </BrowserRouter>
    )
}