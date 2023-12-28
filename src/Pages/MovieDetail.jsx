import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import styled from 'styled-components';
//import {IMG_BASE_URL} from '../Components/Movie/Movies';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieDetailContainer = styled.div`
    margin-top : 10px;
    display : flex;
`;
function MovieDetail() {
    const {title} = useParams();
    const {state} = useLocation();
    console.log(title);
    console.log(state);

    return (
        <MovieDetailContainer>
            <img style={{width:"200px", height:"300px", marginLeft:"200px" }} src={IMG_BASE_URL + state.poster_path}></img>
            <span>{title}</span>
        </MovieDetailContainer>
    )
}

export default MovieDetail;

