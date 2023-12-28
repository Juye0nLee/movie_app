import styled from "styled-components";

export const Main = styled.div`

`;

export const MovieWrap = styled.div`
    width : 200px;
    height : 370px;
    background : #9193d6dc;
    margin : 10px;
    border-radius : 5px;
`;
export const MovieImg = styled.img`
    max-width:100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px ;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color : white;
    font-size: small;
`;

export const H4Styled = styled.h4`
    margin: 0;
    margin-right: 30px;
`;

export const ExplanationStyle = styled.div`
    border-radius: 5px;
    width: 200px;
    height: 360px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 11px;
    padding-top: 10px;
`;
export const Explain = styled.div`
    position: relative;
    bottom: 341.5px;
    z-index: 1; 
`;
export const Discription = styled.div`
    margin : 10px;
`;
