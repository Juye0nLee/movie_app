import React from 'react';
import * as S from './Movie.style';

function Explanation({title,overview}){
    return(
            <S.ExplanationStyle>
            <S.Discription>
                <h4>{title}</h4>
                <p>{overview}</p>
            </S.Discription>
            </S.ExplanationStyle>
        
    )
}

export default Explanation;