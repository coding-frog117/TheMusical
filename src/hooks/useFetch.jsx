import axios from 'axios'

const baseUrl = "https://openmarket.weniv.co.kr/";

    const usePost = (url) =>{
    
        const postFunc = async(postData,token) =>{

            const headers = {
                'Authorization' : `JWT ${token}`,
                'Content-Type' : 'multipart/form-data'
            }

            const res = await axios({
                
                headers : headers,
                method : 'post',
                url : baseUrl+url,
                data : postData,
        });
            
            if (res) {
                return res;
            }};
            
            return postFunc;
        }
    

    const useGet = (url) => {
        const getFunc = async() =>{
            const res = await axios.get(baseUrl+url);

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
