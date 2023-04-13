import { Fragment } from "react"
import instance from "../../helpers/getApi"
import { useState } from 'react'
import { Link } from "react-router-dom"
import Style from "./style"

export default function Search() {
   const[search , setSearch] =useState([])
   const[inputData , setInputData] = useState("")
    async function onSerach(event) {
        setInputData(event.target.value)
        const response =await instance.get("movies" , {
            params:{
                q:event.target.value
            }
            
        })
        setSearch(response.data.data)
    }

    function renderSearch() {
        return search.map((item)=>{
           const{id , poster , title} = item
            return(
                    <li key={id}>
                    <Link to={`/movies/${id}`}>
                        <img  className="poster" src={poster} alt={title}/>
                        <p className="title">{title}</p>
                    </Link>    
                    </li>
            )
        })
    }

    return (
        <Style>
            <input onChange={onSerach} className="search-box" type="text" placeholder="جستجو نام فیلم و سریال"/>
            <div className="search-result">
                {search.length !=0 && inputData != "" ? (<ul>{renderSearch()}</ul>) : <Fragment/> }

            </div>
        </Style>
        
    )
}