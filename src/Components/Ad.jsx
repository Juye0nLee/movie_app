import React,{ useState } from 'react'
import image from '../Img/adverImg.svg'
import styled from "styled-components";

function Ad() {
    const [adver, setAdver] = useState(false);

    const handleOpenToggleClick = () => {
        setAdver(false);
    }

    const handleCloseToggleClick = () => {
        setAdver(true);
    }
    
    const AdStyle = styled.div`
        display : flex;
        flex-direction : column;
    `;
    return (
            <div>{
                adver ?
                <button onClick={handleOpenToggleClick}>광고보기</button>
                :
                <div>
                    <AdStyle>
                        <img style={{ width: "800px" }} src={image}/>
                        <button style={{ width: "50px" }}onClick={handleCloseToggleClick}>닫기</button>
                    </AdStyle>
                </div>
            }</div>
    )
}
export default Ad;