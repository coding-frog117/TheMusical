export const productDetail = async(getFunc,product_id)=>{
    
    const res = await getFunc(product_id);

    try{
      if (res){
        console.log(res); 
      }
    }
      catch(error){
        console.log(error);
        alert(error);
    
  }}
