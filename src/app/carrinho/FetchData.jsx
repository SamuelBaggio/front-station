"use client"

import { useEffect, useState } from "react";
import axios from "axios"

const Produto = ({ id }) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/station/produto/${id}`)
        .then(res => {setData(res.data)})
        .catch(err => console.log(err))
    }, [])

    return (
      <div className="bg-emerald-50 border border-teal-500 my-6 rounded-xl p-4 ">
        <div className="flex justify-between">
            <h3 className="font-semibold text-md"> {data.nome} </h3>
            <h3 className="font-semibold text-md"> R${data.preco},00 </h3>
        </div>
      </div>
    );
};

export default function FetchData(x){      
    const lista = localStorage.getItem("carrinho");
    console.log(lista)

    const listaJson = lista !== null ? JSON.parse(lista):[];
    return(
        <div className="items-center justify-center mx-44">
        <h1 className="mt-10 font-bold leading-tight text-2xl"><i className="bi bi-cart-fill"></i> Itens no Carrinho</h1>
          {listaJson.map((id, index) => (

              <Produto key={index} id={id} />
          ))}

      </div>
    )
}