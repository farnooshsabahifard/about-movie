import styled from "styled-components";
export const Style = styled.div`
.header{
    background: #000;
    .container{
        width: 1280px;
        margin: 0 auto;
    &.flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
     
    
    
        .right{
            .log{

            }
        }
        .center{
         }
        }
        .left{
            color: white;
            display: flex;
            gap: 15px;
            .first-page{
                color: white;
                &:hover{
                    color: #eb8307;
                    transition: all 1s;
                    cursor: pointer;
                }
            }
            .category{
                color: white;
                &:hover{
                    color: #eb8307;
                    transition: all 1s;
                    cursor: pointer;
                }

            }

        }
    }}
}
`
export default Style