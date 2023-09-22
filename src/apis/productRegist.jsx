  export const productRegist = async(formData, postFunc, token)=>{
    
    const res = await postFunc(formData,token);

    try{
      if (res){
        console.log(res); 
      }
    }
      catch(error){
        console.log(error);
        alert(error);
    
  }}
