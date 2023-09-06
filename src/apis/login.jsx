export default async function login(data, postFunc, buySelect, setWarningText){
    let postId = data.id;
    let postPassword = data.password;

    const buyerData = {
		"username": postId,
		"password": postPassword,
		"login_type": 'BUYER',
    }

    const sellerData = {
		"username": postId,
		"password": postPassword,
		"login_type": 'SELLER', 
    }

    try{
        let account = await postFunc(buySelect === true ? buyerData : sellerData);
        console.log(account);
        alert(postId+'님 반갑습니다*^^*');
        
    } catch(error) {
        console.log(error);
        if (error.response.data.FAIL_Message === '로그인 정보가 없습니다.'){
            setWarningText('아이디 또는 비밀번호를 확인해주세요.')
        } else{
            setWarningText(Object.values(error.response.data)[0]);
        }

    }
}