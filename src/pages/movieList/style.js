import styled from 'styled-components';
const Style = styled.div`
.full-container{
    width: 100%;
    padding:0  30px ;
    h2{
        font-size: 1.5rem;
    }
}

.container{
    max-width: 1280x;
    margin: 0 auto;  
     

    .movie-list{
      
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
        .li-tag{
            width: 20%;
            
            .top{
                /* height: 80%; */
                position: relative;
                

            .poster{
                width: 100%;
                height: auto; 
                display: block;

            }
           
            .hover-box{
                position: absolute;
                top: 0;
                right: 0;
                background-color: rgba(0,0,0,0.7);
                width: 100%;
                height: 100%;
                color: white;
                opacity: 0;
                transition: all 0.5s;
                cursor: pointer;
                &:hover{
                    opacity: 1;
                }
                
                .hover-text{
                position: absolute;
                bottom: 0;
                right:10px; 
                font-size: 1rem;
                .rate-imdb{
                    
                }
                .genres{
                    
                }
                .country{
                    
                }
                
        }
        }
      
        }
    }
    .bottom{
        /* height: 20%; */
            .title{
                color: #000;
                text-align: center;
                    &:hover{
                    color: #eb8307;
                    transition: all 1s;
                }

            }
            .small-images{
                display: flex;
                
                img{
                width: 33.33%;
                height: auto;
                padding-left: 5px;
                /* object-fit: contain; */

                }
            }
        }
    }
        }

    



`
export default Style