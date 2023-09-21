import {React, useState} from 'react'
import GrayTitleText from '../atoms/GrayTitleText'
import SelectGreenButton from '../atoms/SelectGreenButton'
import SelectWhiteButton from '../atoms/SelectWhiteButton'
import { useFormContext } from 'react-hook-form'

export default function DeliveryOptions() {
  const {register, setValue, formState : {errors}} = useFormContext();
  const [delivery , setDelivery] = useState('DELIVERY');

  return (
    <div>
        <GrayTitleText text = "배송방법"/>
        <SelectGreenButton 
        {
          ...register('shipping_method',{
            required : '배송 옵션을 선택해주세요',
          })
        }

        {...setValue('shipping_method',delivery)}
        
        text = "택배, 소포, 등기" height ="54px" margin = "0 10px 0 0" setDelivery = {setDelivery}/>
        <SelectWhiteButton text = "직접배송(화물배달)" height = "54px" setDelivery = {setDelivery}/>
    </div>
  )
}
