import axios from 'axios'
import { useState } from 'react';

const baseUrl = "https://openmarket.weniv.co.kr/";

    const usePost = (url) =>{
        const [response, setResponse] = useState('');

        const postFunc = async(postData) =>{

            const res = await axios({
                method : 'post',
                url : baseUrl+url,
                data : postData
            });
            
            if (res.data) {
                setResponse(res.data);
                return response;
            }};
            
            return postFunc;
        }
    
    const useGet = (url) => {
        const [response, setResponse] = useState('');

        const getFunc = async() =>{
            const res = await axios.get(baseUrl+url);

            if (res.data){
                setResponse(res.data);
                return response
            }
        }

        return getFunc;
    }

export { usePost, useGet };
