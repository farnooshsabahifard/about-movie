import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import instance from "../../helpers/getApi"
import summeryText from "../../helpers/summeryText"
import Style from "./style"
import Header from "../header"
import Footer from "../footer"
export default function CategorySingle(props) {
    const{title} =props
    const infoGenre=[
        {id: 1, name: "Crime"}
        ,
        {id: 2, name: "Drama"}
        ,
        {id: 3, name: "Action"}
        ,
        {id: 4, name: "Biography"}
        ,
        {id: 5, name: "History"}
        ,
        {id: 6, name: "Adventure"}
        ,
        {id: 7, name: "Fantasy"}
        ,
        {id: 8, name: "Western"}
        ,
        {id: 9, name: "Comedy"}
        ,
        {id: 10, name: "Sci-Fi"}
        ,
        {id: 11, name: "Mystery"}
        ,
        {id: 12, name: "Thriller"}
        ,
        {id: 13, name: "Family"}
        ,
        {id: 14, name: "War"}
        ,
        {id: 15, name: "Animation"}
        ,
        {id: 16, name: "Romance"}
        ,
        {id: 17, name: "Horror"}
        ,
        {id: 18, name: "Music"}
        ,
        {id: 19, name: "Film-Noir"}
        ,
        {id: 20, name: "Musical"}
        ,
        {id: 21, name: "Sport"}
        ]
    const[category , setCategory] = useState([])
    // const[categoryTitle , setCategoryTitle] = useState([])
    const{id} = useParams()
    // console.log(id)

    async function callApi() {
        const response = await instance.get(`genres/${id}/movies`)
        setCategory(response.data.data)
        // setCategoryTitle(response.data.data.genres)
    }

    // async function callGenres() {
    //     const responseGenres = await instance.get("genres")
    //     setCategoryTitle(responseGenres.data)
    //     console.log(categoryTitle)
    // }
    
    
    
        
    
    function renderSingleMovie() {
        return category.map(function(item) {
            const {title , poster ,id ,imdb_rating , genres , images ,country ,year} =item
            
    function renderImage() {
        if(images){
        return images.map((list , i)=>{
                return(
                    <img key={i} src={list}/>
                    )
                })}else{
                    <Fragment/>
                }
            }
   
            return( 
            <li className="li-tag" key={id}>
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
    // useEffect(()=>{
    //     callGenres()
    // } , [])
    
    useEffect(()=>{
        document.title = "لیست ژانر خاص" ;
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
                    <ul className="movie-list"> 
                        {renderSingleMovie()}
                    </ul>
                </div>
            </Style>
            <Footer/>
      </Fragment>
    )
}