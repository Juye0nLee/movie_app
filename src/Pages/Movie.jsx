import Movies from "../Components/Movie/Movies";
import React,{useState} from 'react';
import { MovieDummy } from '../MovieDummy';
import styled from "styled-components";
import {useNavigate, Link} from 'react-router-dom';

export const Container = styled.div`
    display : flex;
    justify-content : center;
    flex-wrap : wrap; 
    
`;

function Movie(props) {
        const navigate = useNavigate();
        const onClickDetail = () => {
            navigate(`/movie/${props.title}`,{state: props})
        }

    return (
        <Container>
            {MovieDummy.results.map((item)=>(
                <div onClick={onClickDetail}>
                <Movies 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                /> 
                </div>
            
            ))
            }
        </Container>
    );
}

export default Movie;
