"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FetchData(){
    const [data, setData] = useState([])
    // const [produtos, setProdutos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/station/pedido')
        .then(res => {setData(res.data['_embedded']['pedidoList'])})
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <div className="items-center justify-center mx-6 ">
                {data.map((prod) =>{
                    return <div className="bg-emerald-50 border border-teal-500  mx-10 my-6 rounded-xl p-4" key={prod.id}>
                            <div className="justify-between flex">
                                <b>{prod['formaEntrega']}</b>
                                <p>{prod['dataPedido']}</p>
                            </div>
                            <hr className="px-3 my-3 bg-slate-950" />
                            <div>
                                <ol>
                                    <li>
                                        <p>{prod['produtos'][0]['nome']}, R${prod['produtos'][0]['preco']},00</p>
                                    </li>
                                    <li>
                                        <p>{prod['produtos'][1]['nome']}, R${prod['produtos'][1]['preco']},00</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                })}
            </div>
        </div>
    )
}