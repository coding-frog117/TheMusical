import axios from 'axios'

const baseUrl = "https://openmarket.weniv.co.kr/";

    const usePost = (url) =>{
    
        const postFunc = async(postData,token) =>{
            let response = null;
            
            const headers = {
                'Authorization' : `JWT ${token}`,
                'Content-Type' : 'multipart/form-data'
            }

            if (token == undefined){
                response = await axios({
                    method : 'post',
                    url : baseUrl+url,
                    data : postData,
                })

            } else {
                response = await axios({
                    headers : headers,
                    method : 'post',
                    url : baseUrl+url,
                    data : postData,
                })

            }

            if (response) {
                return response;
            }};
            
            return postFunc;
        }
    

    const useGet = (url) => {
        const getFunc = async(token) =>{
            let res = null;
            if (token === undefined){
                res = await axios.get(baseUrl+url);
            
            } else {
            
                res = await axios({
                    url : baseUrl+url,
                    method : 'get',
                    headers : {
                        'Authorization' : `JWT ${token}`,
                    }
                })
            }
            if (res){
                return res
            }
        }

        return getFunc;
    }

    const useDelete = (url) => {
        const deleteFunc = async(token) =>{
            const headers = {
                'Authorization' : `JWT ${token}`,
            }

            const res = await axios({
                
                headers : headers,
                method : 'delete',
                url : baseUrl+url,
        });

            if (res){
                return res
            }
        }

        return deleteFunc;
    }

export { usePost, useGet, useDelete };
