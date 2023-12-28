import axios from 'axios';
import {useState} from 'react';
import { Route } from 'react-router-dom';

const url = 'http://localhost:8000/user/login';

export const checkLogin = async (id,password) => { 
    try {
        const response = await axios.post(url,   
        {
            id : id,
            pw : password
        },
        {
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )
        localStorage.setItem('token',response.data.result.AccessToken);
        localStorage.setItem('id',response.data.result.userId);
        localStorage.setItem('isSuccess',response.data.isSuccess);
        //localStorage.clear();
        window.location.href = '/';
        alert("환영합니다!");
        //console.log(response);
        return response;
    } catch (error)
    {
        console.error('Error:', error);
    }
};
