const idDoubleCheck = async(id, postFunc, setConfirmtext) =>{
    const postData = {  
      username : id};
    try{
        const response = await postFunc(postData);
        console.log(response);

        if (response){
          return setConfirmtext("멋진 아이디네요:)");
        } 
        }
    catch(error){
        if (error.response.data.FAIL_Message === 'username 필드를 추가해주세요 :)'){
          return setConfirmtext("아이디를 입력해주세요.");
        } else {
          return setConfirmtext("중복된 아이디입니다.");
        }
  }}

  export {idDoubleCheck};