export const productDelete = async(DeleteFunc,token)=>{
    
    const res = await DeleteFunc(token);

    try{
      if (res){
        console.log(res); 
      }
    }
      catch(error){
        console.log(error);
        alert(error);
    
  }}
