import axios from "axios";

const baseUrl = "https://openmarket.weniv.co.kr/"


export const productSearch = async(value, setSearchList) =>{

      const res = await axios.get(baseUrl+`/products/?search=${value}`);
        
        if (res){
          console.log(res.data.results);
          setSearchList(...[res.data.results]);
          return res.data.results;
        }
      }
  