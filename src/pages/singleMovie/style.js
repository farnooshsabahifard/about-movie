import styled from "styled-components";
export const Style= styled.div`

    .movie-item{
        position: relative;
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 900px;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      
        &::before{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            content: "";
            background: rgba(0, 0, 0, 0.8);
            background-position: top center;
            z-index: 1;
        }
    }
        
       
        .container {
            width: 1280px;
            margin: 0 auto;
            z-index: 6;
        &.flex-form{
            display:flex;
            gap:25px;

            .right{

                .poster{
                    width: 345px;
                    height: auto;
                    border-radius: 10px;
                    border: 4px solid yellow;
                    margin-top: 80px;
                }
            }
            .left{
                margin-top: 150px;
                color: white;
                line-height: 2.5;

                .title{
                    font-size: 3rem;
                    color: white;
                    margin: 0;
                    padding: 0;
                }
                .year{
                    

                }
                .type{

                }
                .genres{

                }
                .plot{

                }
                .small-images{
                    display: flex;
                    gap: 15px;
                    margin-top: 35px;
                    img{
                        width: 150px;
                        height: auto;
                        border-radius: 10px;
                        border: 4px solid yellow;
                        object-fit: cover;
                    }
                }
                }
            }
        }

}
  


`