import Navbar from "@/components/Navbar"
import FetchData from "./FetchData"

export default function detalhesPedido(){
    return(
        <div className="bg-teal-50">
            <Navbar></Navbar>
            <FetchData></FetchData>
        </div>
    )
}