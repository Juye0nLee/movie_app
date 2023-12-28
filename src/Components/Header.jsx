import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import LoginControl from './LoginControl';

function Header() {
    return (
        <header>
        <S.HeaderStyle>
            <Link to="/" > <S.ListStyle><img
                style={{ width: "130px", height: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="로고"/></S.ListStyle></Link>
            <Link to="/movie" style={{textDecoration : 'none'}}><S.ListStyle>영화</S.ListStyle></Link>
            <Link to="/TV" style={{textDecoration : 'none'}}><S.ListStyle>TV프로그램</S.ListStyle></Link>
            <Link to="/celebirity" style={{textDecoration : 'none'}}><S.ListStyle>인물</S.ListStyle></Link>
            <Link to="/login" style={{textDecoration : 'none'}} ><S.ListStyle><LoginControl/></S.ListStyle></Link>
</S.HeaderStyle>
        </header>
    )
} 

export default Header;
