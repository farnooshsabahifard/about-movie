import styled from "styled-components";
export const Style = styled.div`
position: relative;
.search-box{
     background: #050505;
     color: #fff;
     min-width: 330px;
     height: 42px;
     border-radius: 35px;
     padding: 0 10px 0 50px;
     outline: none;
      border: 1px solid #eb8307;
      font-family: Vazirmatn;
            
}
.search-result{
    width: 330px;

    ul{
        position: absolute;
        border: 1px solid #eb8307;
        padding: 10px;
        border-radius: 10px;
        background: #000;
        width: 100%;
        max-height: 300px;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 99;
        display: flex;
        flex-direction: column;
        gap: 10px;
      
       
        li{
           
            .poster{
                max-width: 45px;
                
            }
            .title{
                color: white;
            font-size: 0.85rem;
            }
        }
    }
}
`
export default Style