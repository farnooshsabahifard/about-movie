import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../helpers/getApi'
import summeryText from '../../helpers/summeryText'
import { Style } from './style'
import Header from '../header'
import Footer from '../footer'
export default function SingleMovie() {
    const{id} = useParams()
    // console.log(id)
    const[movie , setMovie] = useState({})
    const[movieTitle , setMovieTitle] = useState("")

    async function callApi() {
        const response = await instance.get(`movies/${id}`)
        setMovieTitle(response.data.title)
        setMovie(response.data)   
    }

    const{poster , title ,images ,type , year , genres , plot} = movie
    

    function renderSmallImages() {
        if(images) {
           return images.map((item , i)=>{
            
              return <img key={i} src={item} /> 
            })
        } else{
            <Fragment/>
        } 
    }
    function renderGenres() {
        if(genres) {
            return genres.join(" / ")
        }else{
            <Fragment/>
        }
    }
    useEffect(function() {
        document.title = movieTitle;
    } , [movieTitle])

    useEffect(function(){
        callApi()
    } , [id])
    return(
        <Fragment>
        <Header/>
        <Style>
            <div className='movie-item'>
                <div className='background' style={{ backgroundImage: `url(${poster})` }}></div>
                    <div className='container flex-form'>
                        <div className='right'>
                            
                        <img className='poster' src={poster} alt={title}/>
                        </div>
                        <div className='left'>
                        <h1 className='title'>{title}</h1>
                        <div className='year'>سال ساخت:{year} </div>
                        <div className='type'>دسته بندی: {type}</div>
                        <div className='genres'>ژانر: {renderGenres(genres)}</div>
                        <div className='plot'>خلاصه فیلم: {summeryText(plot , 100)}</div>
                        <div className='small-images'>{renderSmallImages()}</div>
                        </div>
                    </div>               
                </div>
        </Style>
        <Footer/>
        </Fragment>
    )
}