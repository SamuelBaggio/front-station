import Navbar from "@/components/Navbar"
import FetchData from "./FetchData"

export default function pedidos(){
    return(
        <div className="bg-teal-50">
            <Navbar></Navbar>
            <h2 className="mx-16 mt-10 font-bold leading-tight text-2xl"> Histórico de Pedidos </h2>
            <FetchData></FetchData>
        </div>
    )
}