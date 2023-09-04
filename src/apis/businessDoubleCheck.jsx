const businessDoubleCheck = async(number, postFunc, setConfirmtext)=>{
    const postData = {
      company_registration_number : number
    }

    try{
      const response = await postFunc(postData);
      console.log(response);

      if (response) {
        return setConfirmtext('사용 가능한 사업자등록번호입니다.');
      }

    } catch(error){
        if (error.response.data.FAIL_Message === 'company_registration_number 필드를 추가해주세요 :)'){
            return setConfirmtext("사업자등록번호를 입력해주세요.");
        } else{
            return setConfirmtext('이미 등록된 사업자등록번호입니다.')
        }

    }
  }

  export {businessDoubleCheck};