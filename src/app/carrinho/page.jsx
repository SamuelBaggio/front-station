import Navbar from "@/components/Navbar"
import Link from "next/link";
import FetchData from "./FetchData";

export default function carrinho(){
    return(
        <div className="bg-teal-50">
            <Navbar></Navbar>
            <FetchData></FetchData>
            {/* <div className="bg-teal-800 p-20 rounded-xl font-semibold tracking-wide">
                <p className="text-4xl text-red-200">  Essa página está em construção!!! </p>
                <p className="text-center text-white mt-4 underline"> <Link href="/paginaPrincipal"> Voltar para a página principal. </Link> </p>
            </div> */}
        </div>
    )
}