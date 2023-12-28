import React,{usetState} from 'react'
import * as S from './LoginForm.style';
import { checkLogin } from './LoginApi';
import { Route } from 'react-router-dom';
function Loginform() {

    //초기값 세팅
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    //메세지 저장
    const [idMessage, setIdMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");

    const [idCheck, setIdCheck] = React.useState(false);
    const [passwordCheck, setPasswordCheck] = React.useState(false);
    const [buttonColor, setButtonColor] = React.useState("gray");

    const handleOnChangeId = (e) => {
        const regId = /^[a-zA-Z]+$/  ; //표준 정규식
        setId(e.target.value);

        if(!regId.test(e.target.value))
        {
            setIdMessage("올바른 형식의 아이디를 입력해주세요.");
            setIdCheck(false);
        }
        else 
        {
            setIdMessage("");
            setIdCheck(true);
        }
    }

    const handleOnChangePassword =(e) => {
        //const regpassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const regpassword = /^[0-9]+$/ ;
        setPassword(e.target.value);

        if(!regpassword.test(e.target.value))
        {
            setPasswordMessage("올바른 비밀번호를 입력해주세요.")
            setPasswordCheck(false)
        }
        else
        {
            setPasswordMessage("");
            setPasswordCheck(true);      
        }
    }

    React.useEffect(() => {
        if (idCheck && passwordCheck) {
        setButtonColor('#0C356A');
        } else {
        setButtonColor('gray');
        }
    }, [idCheck,passwordCheck]);

    function handleClickButton() {
        checkLogin(id, password);
    }
    

return (
    <S.Container>
        <S.H2Style>아이디와 비밀번호를 입력해주세요.</S.H2Style>
        <form>
            <S.FormStyle>
                <S.FormTitleStyle>아이디</S.FormTitleStyle>
                <S.InputStyle type='text' placeholder="아이디를 입력하세요" value={id} onChange={handleOnChangeId}></S.InputStyle>
            </S.FormStyle>
            <S.MessageStyle>{idMessage}</S.MessageStyle>
            <S.FormStyle>
                <S.FormTitleStyle>비밀번호</S.FormTitleStyle>
                <S.InputStyle type='password' placeholder="영문,숫자,특수문자 포함 8자 이상" value={password} onChange={handleOnChangePassword}></S.InputStyle>
                <S.MessageStyle>{passwordMessage}</S.MessageStyle>
            </S.FormStyle>
            <S.ButtonStyle style={{backgroundColor: buttonColor}} type='button' onClick={handleClickButton}>확인</S.ButtonStyle>
        </form>
    </S.Container>
)
}
export default Loginform;

