import { Link } from "react-router-dom"
import Style from "./style"
import instance from "../../helpers/getApi"
import { useState } from "react"
import Search from "../../components/search"
 export default function Header() {
   

    return (
        <Style>
            <div className="header">
                <div className="container flex">
                <div className="right">
                    <Link to="/">
                        <img className="logo" src="/assets/logo/logo.webp"/>
                    </Link>
                </div>
                <div className="center">
                    <Search/>
                </div>
                <div className="left">
                    <Link to="/"><div className="first-page">صفحه نخست</div></Link>
                    <Link to="/category"><div className="category">دسته بندی</div></Link>

                </div>
                </div>
            </div>
        </Style>
    )
}