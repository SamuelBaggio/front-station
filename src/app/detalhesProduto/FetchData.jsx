"use client"

import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FetchData(){
    const x = useSearchParams().get('keyword')

    function adicionarCarrinho() {
        const lista = localStorage.getItem("carrinho");
        console.log(lista)

        const listaJson = lista !== null ? JSON.parse(lista):[];
        listaJson.push(x);
        console.log(listaJson)

        const listStringfied = JSON.stringify(listaJson);
        localStorage.setItem("carrinho", listStringfied);
      }

    const [data, setData] = useState([])
    const [cat, setCat] = useState([])
    useEffect(() =>{
        axios.get(`http://localhost:8080/station/produto/${x}`)
        .then(res => {setData(res.data); setCat(res.data.categorias)})
        .catch(err => console.log(err))
    }, []);

    return(
        <div className="mt-10">
            <div className="flex mx-32">
                <img className="rounded-xl w-5/12 object-contain align-middle " src={data.linkImagem}/>
                <div className="w-7/12 ml-10 mt-10"> 
                    <div className="flex justify-between mb-8">
                        <h3 className="font-semibold text-xl"> {data.nome} </h3>
                        <h3 className="font-semibold text-xl"> R${data.preco},00 </h3>
                    </div>
                    <p><b>Descrição: </b>{data.descricao}</p>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt quidem, molestias fugiat sit corporis assumenda labore, sequi impedit adipisci aperiam repellat cupiditate molestiae voluptatum consequatur odio. Officia atque beatae magni ipsum, quisquam repellendus nihil, eaque reiciendis dignissimos reprehenderit omnis odit deleniti numquam nulla accusamus possimus a, qui natus iure.</p>
                    <div className="border border-emerald-800 p-5 rounded-lg mt-6">
                        {cat.map((categoria) => (
                            <div>
                                <h4 className="font-bold"> Categoria: {categoria.nome}</h4>
                                <p> {categoria.descricao}</p>
                            </div>
                        ))}
                    </div>
                    <div className="justify-end flex mt-6">
                        {/* <Link className="py-2 px-6 border border-teal-800 bg-teal-600 text-teal-50 font-bold rounded-lg" href="/carrinho"> <i className="bi bi-cart"></i> Adicionar ao Carrinho</Link> */}
                        <button className="py-2 px-6 border border-teal-800 bg-teal-600 text-teal-50 font-bold rounded-lg" onClick={adicionarCarrinho}> <i className="bi bi-cart"></i> Adicionar ao Carrinho</button>
                        {/* <button onClick={sayHello()} className="py-2 px-6 border border-teal-800 bg-teal-600 text-teal-50 font-bold rounded-lg">Adicionar ao Carrinho</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}