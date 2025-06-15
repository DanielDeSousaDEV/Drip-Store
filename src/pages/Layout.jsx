import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Layout({children}) {
    return (
        <div>
            <Header />
            
            {children}

            <Footer />
        </div>
    )
}