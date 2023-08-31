import axios from 'axios'

const baseUrl = "https://openmarket.weniv.co.kr/";

    const usePost = (url) =>{
        const postFunc = async(postData) =>{

            const res = await axios({
                method : 'post',
                url : baseUrl+url,
                data : postData
            });
            
            if (res.data) {
                return res.data;
            }};
            
            return postFunc;
        }
    
    const useGet = (url) => {

        const getFunc = async() =>{
            const res = await axios.get(baseUrl+url);

            if (res.data){return res.data}
        }

        return getFunc;
    }

export { usePost, useGet };
