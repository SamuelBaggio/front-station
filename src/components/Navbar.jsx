import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar(){
    return(
        <nav className="flex justify-between bg-teal-950 p-8">
            <ul className="flex gap-12 text-lg items-center"> 
                <li>
                    <Link href="/paginaPrincipal">
                        <h1 className="text-2xl tracking-wider text-teal-50 font-bold" >  <i className="bi bi-tag-fill"></i> Station. </h1>
                    </Link>
                </li>
            </ul>
            <div className="items-center flex text-xl text-teal-50 gap-8 pr-6">
                <Link href="/carrinho">
                    <i className="bi bi-cart"></i>
                </Link>
                <Link href="/pedidos">
                    <i className="bi bi-card-checklist"></i>
                </Link>
                <Link href="/">
                    <i className="bi bi-box-arrow-right"></i>
                </Link>
            </div>
        </nav>
    )
}