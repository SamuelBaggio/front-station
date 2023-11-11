"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FetchData(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/station/produto')
        .then(res => setData(res.data['_embedded']['produtoList']))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2 className="mx-16 mt-10 font-bold leading-tight text-2xl"> Produtos em Destaque </h2>
            <div className="items-center flex justify-center mx-6 ">
                {data.map((prod) =>{
                    return <Link href={{pathname: '/detalhesProduto', query: {keyword: prod.id}}}>
                        <div className="bg-emerald-50 border border-teal-500  mx-10 my-6 rounded p-4 text-center" key={prod.id}>
                            <img className="mb-4" src={prod.linkImagem} width={300}/>
                            <b>{prod.nome}</b>
                            <p> R${prod.preco},00</p>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}