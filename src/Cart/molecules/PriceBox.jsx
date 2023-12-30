import React, { useEffect } from 'react';
import TotalGrayBox from '../atoms/TotalGrayBox';
import TotalPriceBox from '../atoms/TotalPriceBox';
import Text from '../atoms/Text';
import InlineText from '../../Common/InlineText';
import GoodsPriceCount from '../../Common/GoodsPriceCount';
import IconImg from '../../Common/IconImg';
import Minus from '../../assets/minus-icon_2.svg';
import Plus from '../../assets/plus-icon_2.svg';
import { useSelector } from 'react-redux';

export default function PriceBox(props) {
	const totalItemPrice = useSelector((state) => {
		return state.totalCartPriceSlice.value;
	});

	const totalFee = useSelector((state) => {
		return state.deliveryFeeSlice.value;
	});

	const notSelectedPrice = useSelector((state) => {
		return state.selectedItemSlice.item;
	});

	const notSelectedFee = useSelector((state) => {
		return state.selectedItemSlice.fee;
	});

	const totalPrice = useSelector((state) => {
		return totalItemPrice - notSelectedPrice + (totalFee - notSelectedFee);
	});

	return (
		<TotalGrayBox>
			<TotalPriceBox>
				<Text text="총 상품금액" fontSize={(props) => props.theme.sm} />
				<span>
					<InlineText
						text={(totalItemPrice - notSelectedPrice).toLocaleString()}
						fontSize={(props) => props.theme.xLg}
						fontWeight={(props) => props.theme.bold}
					/>
					<GoodsPriceCount />
				</span>
			</TotalPriceBox>

			<IconImg src={Minus} size="34px" />

			<TotalPriceBox>
				<Text text="상품할인" fontSize={(props) => props.theme.sm} />
				<span>
					<InlineText text="0" fontSize={(props) => props.theme.xLg} fontWeight={(props) => props.theme.bold} />
					<GoodsPriceCount />
				</span>
			</TotalPriceBox>

			<IconImg src={Plus} size="34px" />

			<TotalPriceBox>
				<Text text="배송비" fontSize={(props) => props.theme.sm} />
				<span>
					<InlineText
						text={(totalFee - notSelectedFee).toLocaleString()}
						fontSize={(props) => props.theme.xLg}
						fontWeight={(props) => props.theme.bold}
					/>
					<GoodsPriceCount />
				</span>
			</TotalPriceBox>

			<TotalPriceBox>
				<Text text="결제예정금액" fontSize={(props) => props.theme.sm} fontWeight="700" />

				<span>
					<InlineText
						text={totalPrice.toLocaleString()}
						color="#EB5757"
						fontSize={(props) => props.theme.big}
						fontWeight={(props) => props.theme.bold}
					/>
					<GoodsPriceCount color="#EB5757" fontSize={(props) => props.theme.md} />
				</span>
			</TotalPriceBox>
		</TotalGrayBox>
	);
}
