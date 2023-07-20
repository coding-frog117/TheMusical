import React from 'react'
import GoodsImg from '../atoms/GoodsImg'
import GoodsSeller from '../atoms/GoodsSeller'
import GoodsName from '../atoms/GoodsName'
import GoodsPrice from '../atoms/GoodsPrice'
import GoodsPriceCount from '../atoms/GoodsPriceCount'

export default function Goods() {
  return (
    <>
    {[1,2,3,4,5,6,7].map(()=>(
              <li>
                <GoodsImg size= "380px" margin = "0 0 16px"/>
                <GoodsSeller text="개발자 송개굴" />
                <GoodsName text="개구리 키보드" />
                <GoodsPrice text="23,000"/>
                <GoodsPriceCount />
              </li>
    ))
    }
    </>
  )
}
