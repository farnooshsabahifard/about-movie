import { Fragment, useEffect, useState } from 'react'
import instance from '../../helpers/getApi'  
import { Link } from 'react-router-dom' 
import Style from './style'
import Header from '../header'
import Footer from '../footer'
export default function Category(props) {
 

    const {title} =props
    const[category , setCategory] = useState([])

    async function callApi() {
        const response = await instance.get("genres")
        setCategory(response.data)
    }
    function renderCategory() {
        return category.map ((item )=>{
            // console.log(item)
            const{id , name} = item
        return (
            <li className='li-tag' key={id}>
                <Link to={`/category/${id}`}><div className='genre-name'>{name}</div></Link>
                
            </li>
        )             
        })      
    }
    useEffect(()=>{
    document.title = "ژانرها"
    } , []) 
   useEffect(()=>{
    callApi()
   },[])
   
    return (
        <Fragment>
            <Header/>
                <Style>
                    <div className='full-container'>
                        <h2 className='title'>{title}</h2>
                    </div> 
                    <div className='container'>
                        <ul className='ul-tag'>{renderCategory()}</ul>
                    </div>
                </Style>
            <Footer/>
        </Fragment>
    )
}