import { React , useRef , useEffect } from 'react'
import ModalFrame from '../../Common/Modal/ModalFrame'
import ModalLayout from '../../Common/Modal/ModalLayout'
import ModalGreenButton from '../../Common/Modal/ModalGreenButton'
import ModalWhiteButton from '../../Common/Modal/ModalWhiteButton'
import ModalText from '../../Common/Modal/ModalText'
import DeleteImg from '../../Common/DeleteImg'
import ModalBackdrop from '../../Common/Modal/ModalBackdrop'
import { useDelete } from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { productDelete } from '../../apis/productDelete'
import { useNavigate } from 'react-router-dom'

export default function ProductDeleteModal(props) {
  const navigator = useNavigate();
  const deleteFunc = useDelete(`products/${props.id}`);
  const token = useSelector((state)=>{return state.persistedReducer.user.value});
  const modalDeleteRef = useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if (modalDeleteRef.current && !modalDeleteRef.current.contains(e.target)) {
        props.setModal(false);
      }
    }
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })

  return (
    <ModalBackdrop >
      <ModalFrame ref={modalDeleteRef}>
        <DeleteImg onClick={()=>{props.setModal(false)}}/>
        <ModalText text = "상품을 삭제하시겠습니까?" mgTop = "42px" />
        <ModalLayout>
          <ModalWhiteButton onClick={()=>{props.setModal(false)}}>취소</ModalWhiteButton>
          <ModalGreenButton onClick = {()=>{
            productDelete(deleteFunc,token,props.setModal,navigator)}}>확인</ModalGreenButton>
        </ModalLayout>
      </ModalFrame>
    </ModalBackdrop>
  )
}
