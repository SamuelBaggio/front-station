import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NotFound(){
    return(
        <div className="grid place-items-center h-screen bg-teal-950">
            <div className="bg-teal-800 p-20 rounded-xl font-semibold tracking-wide">
                <p className="text-4xl text-red-200"> <i className="bi bi-exclamation-circle mr-3"></i> Essa página não existe!!! </p>
                <p className="text-center text-white mt-4"> Volte para a página principal <Link href="/paginaPrincipal" className="underline"> aqui</Link>.</p>
            </div>
        </div>
    )
}