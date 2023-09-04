async function signup(data, postFunc, buySelect){

    const username = data.id;
    const password = data.password;
    const pwconfirm = data.pwconfirm;
    const phoneNumber = (data.phoneFirst+ data.phoneSecond+data.phoneThird)
    const name = data.name;
    const company_registration_number = data.business;
		const store_name = data.storename;

    const buyerData = {
      username: username,
      password: password,
      password2: pwconfirm,
      phone_number: phoneNumber.toString(),
      name: name,
  };

    const sellerData = {
        username: username,
		    password: password,
		    password2: pwconfirm,
		    phone_number: phoneNumber.toString(),
		    name: name,
        company_registration_number: company_registration_number,
		    store_name: store_name,
    };

    try{
      let account = await postFunc(buySelect === true ? buyerData : sellerData);
      console.log(account);
      alert(name+'님 반갑습니다*^^* 회원가입이 완료되었습니다.');

    } catch(error) {
      console.log(error);
      alert(Object.values(error.response.data)[0]);
    }
  }

  export {signup};