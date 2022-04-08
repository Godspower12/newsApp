import {useState} from 'react';
import Cnn from "../images/cnn.jpg";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faUnLiked } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faLiked } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';
// import { loadNews } from '../actions/newsAction';
const News = ({title, image, id}) => {
  const [isLiked, updateLike] = useState(true);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
    

     
   
  return (
    
            <NewsStyle>
          <NavLink to= {`/${id}`}>
                <h3>{title}</h3>
                </NavLink> 
               <LikeStyle>
                <img src={image ? image : Cnn} alt="img" />
               <ul>
               <li>

                <FontAwesomeIcon color='red'
                icon={isLiked ? faUnLiked : faLiked}
                onClick={() => 
                    {
                        if(isLiked) {
                            setLikes(likes + 1);
                            updateLike(!isLiked);
                        }else {
                            setLikes(likes - 1);
                            updateLike(!isLiked)
                        }
                    }
                    }
                    
                    />
                    </li>
                    <li>{likes}</li>
                </ul>
                </LikeStyle>
                   
                   

            </NewsStyle>
               

        )
    }
    

    const NewsStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
         max-width: 90%;
         padding: 5%;
         border-radius: 10%;
         cursor: pointer;
         :hover {
            transform: scale(1.1);
           box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
            }
    
         h3 {
            
             display: flex;
             justify-content: center; 
               align-items: center;
            
         }   

         /* h3  {
             position: absolute;
             margin-top: 33%; */ */
            
         }
         a{ 
             color: black;
             text-decoration: none;
         }   
        
        p{
        
            text-align: left;
            margin-left: 30px;
        }

        img {
            max-width: 50%
        }
  
            /* mini-ipad screen */
        @media(max-width: 600px) {
        margin-left: -10%;
        }
        @media(max-width: 844px) {
        min-width: 100%;
       
       
        img {
            width: 50%;

        }
        
        }

        /* mobile screen */
        @media(max-width: 390px) {
            /* background: red; */
            margin-left: -40%;
            width: 50%;
           h3 {
              font-size: 10px;
              margin-right: 15%;
           } 
           
        }

        @media(max-width: 414px) {
        margin-left: -30%;
    
        }
    `;




const LikeStyle = styled.div`
display: flex;
justify-content: center; 
align-items: center;
ul{
    margin-top: 90%;
    margin-left: -20%;
    display: flex;   
    list-style: none;
    text-align: center;
}
li {
                margin-left: 10px;

            }

            img {
            width: 80%;
            height: 50%;
            /* max-width: 50%; */
           
            margin-left: 10%;
            border: 1px solid white;
            border-radius: 10%;
            box-shadow: rgba(0,0,0, 0.3);
       
       
        }
  
        @media(max-width: 390px) {
           
            width: 90%;
            margin-right: 15%;
        }
`;

export default News;



































