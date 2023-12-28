import React from 'react';
import {TVDummy} from "../TVDummy";
function TV() {
    return (
    <div>
    {TVDummy.results.map((item)=>(
        <div>
        title={item.name}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        overview={item.overview}
        <hr></hr>
        </div>
    ))
    }
    </div>
    )
}

export default TV;
