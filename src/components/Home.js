import  {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadNews } from '../actions/newsAction';

// Components 
import News from './News';

//styles
import styled from 'styled-components';

const Home = () => {
    const dispatch = useDispatch();
 
    useEffect( ()=> {
        dispatch(loadNews());
    }, []);

    const {news} = useSelector((state) => state.news);

    const state = useSelector((state) => state);
    // console.log(state);
    console.log(news);
    return(
          <div>   
        <NewsList>
       <h1>Trending News</h1> 
            <NewStyle>
              {news.map(newz => (
                <News title = {newz.title} description = {newz.description} id = {newz.id} key = {newz.id} 
                image = {newz.urlToImage} likes = {state.news.likes}/>) )}
            </NewStyle>
            </NewsList>
        
                </div> 
    )
};

const NewsList = styled.div`
padding: 0rem 5rem;
h2 {
  padding : 5rem 0rem;
}
h1 {
  text-align : center;
}
`

const NewStyle = styled.div`
 /* min-height: 80vh; */

display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
align-items: center;
margin-left: 10%;
`;
export default Home;



