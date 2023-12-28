import React, { useEffect, useState } from 'react';
import Explanation from './Explanation';
import * as S from './Movie.style';
import {useNavigate} from 'react-router-dom';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movies(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const navigate = useNavigate();

    const onClickDetail = () => {
        navigate(`/movie/${props.title}`,{ state: props })
    };
    

  return (
        <S.Main>
        <S.MovieWrap onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClickDetail}>
            <S.MovieImg src={IMG_BASE_URL + props.poster_path}></S.MovieImg>
              <S.MovieInfo>
                <S.H4Styled>{props.title}</S.H4Styled>
              <span>{props.vote_average}</span>
            </S.MovieInfo>
            <S.Explain>
              {isHovered && <Explanation title={props.title} overview={props.overview}/>}
            </S.Explain>
        </S.MovieWrap>
      </S.Main>
  );
}

export default Movies;