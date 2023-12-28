import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoMainStyle = styled.div`
    color : red;
`;
export const NotFoundStyle = styled.div`
    margin-left : 50px;
    font-size : large;

`;
function NotFound() {
    return (
    <NotFoundStyle>
        <h1>해당 페이지를 찾지 못 했습니다.</h1>
        <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <Link to='/' style={{textDecoration : 'none'}}><GoMainStyle>메인 페이지로 이동</GoMainStyle></Link>
    </NotFoundStyle>

    )
}

export default NotFound;
