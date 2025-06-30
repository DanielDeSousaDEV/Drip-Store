import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export function NotFound() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    return (
        <div className="h-screen flex justify-center items-center bg-light-gray/20">
            <div className="p-9 rounded-md shadow-2xl bg-white text-center">
                <h1 className="font-bold text-6xl mb-1">404</h1>
                <p className="mb-8">Página não encontrada</p>
                <Button onClick={handleClick}>Voltar para Home</Button>
            </div>
        </div>
    )
}