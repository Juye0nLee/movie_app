import React, {useState} from 'react';
import styled from "styled-components";

export const ButtonStyle = styled.button`
    border : 1px solid white;
    padding : 5px 15px 5px 15px;
    border-radius : 20px;
    color :  #0C356A;
    background-color : white;
    margin-right : 10px
`;
function LoginControl() {
    
    const isSuccess = JSON.parse(localStorage.getItem("isSuccess"));
    const userName = localStorage.getItem("id");
    const [check,setCheck] = useState(false);
    const  successLogin = () => {
        if(isSuccess===true) //true면
        {
            console.log("isSuccess: "+isSuccess);
            setCheck(true); //check true로 설정 
            console.log("check: "+check);
        }
    }

    const handleLogoutClick = () =>{
        localStorage.clear();
        setCheck(false);
    }
    return (
        <div>
            {check
            ? 
            <span>
                {/* true -> 로그아웃 버튼*/ }
                <ButtonStyle onClick={handleLogoutClick}>로그아웃하기</ButtonStyle>
                <span>{userName}님 환영합니다!</span>
            </span>
            : 
            <span>
                {/* false -> 로그인 버튼 */}
                <ButtonStyle onClick={successLogin}>로그인</ButtonStyle>
                <span>로그인 해주세요!</span>
            </span>
            }
        </div>
    )
}
export default LoginControl;

