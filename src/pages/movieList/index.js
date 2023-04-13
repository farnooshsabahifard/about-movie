import {  Fragment, useEffect, useState } from "react"
import instance from "../../helpers/getApi"
import Style from "./style"
import summeryText from "../../helpers/summeryText"
import { Link } from "react-router-dom"
import Header from "../header"
import Footer from "../footer"
 export default function MovieList(props) {
    const {title } =props
    const [movie , setMovie] = useState([])
    async function callApi() {
        const response = await instance.get("movies")
        setMovie(response.data.data)
        
    }
    function renderMovie() {
        return movie.map(function(item ) {
            const {title , poster ,id ,imdb_rating , genres , images ,country ,year} =item
    function renderImage() {
        return images.map((list , i)=>{
            // console.log(list)
                return(
                    <img key={i} src={list}/>
                    )
                })
            }
            return(<li className="li-tag " key={id}>
                <Link to={`/movies/${id}`}>
                <div className="top">
                <img className="poster" src={poster} alt={title}/>
                <div className="hover-box">
                        <div className="hover-text">
                            <p className="rate-imdb">imdb : {imdb_rating}</p>
                            <p className="genres">genre : {genres.join(" / ")}</p>
                            <p className="country">country : {summeryText(country)}</p>
                            <p className="year">year : {year}</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="title">{summeryText(title)}</p>
                    <p className="small-images">{renderImage()}</p> 
                </div>
                </Link>             
                </li>
                ) 
        })
    }
   useEffect(()=>{
    document.title = "لیست کامل فیلم ها";
   } , [])
    
    useEffect(()=>{
        callApi()
    } , [])

    return(

        <Fragment>
            <Header/>
                <Style>
                    <div className="full-container">
                    <h2>{title}</h2> 
                    </div>
                    <div className="container">     
                    <ul className="movie-list">{renderMovie()}</ul>
                    </div>
                </Style>
        <Footer/>
        </Fragment>
        
    )
}