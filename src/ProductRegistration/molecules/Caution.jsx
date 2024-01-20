import React from 'react';
import InlineText from '../../Common/InlineText';
import Text from '../../Cart/atoms/Text';
import CautionBox from '../../ProductRegistration/atoms/CautionBox';
import styled from 'styled-components';

const Section = styled.section`
	margin: 0 auto;
`;

export default function Caution() {
	return (
		<Section>
			<Text
				text="*상품 등록 주의사항"
				color={(props) => props.theme.red}
				fontSize={(props) => props.theme.sm}
				margin="0 0 10px 0"
			/>
			<CautionBox>
				<Text text="-사진은 한 번 등록 시 수정이 불가하므로 신중하게 선택해주세요." fontSize="14px" />
				<Text
					text="-공연명을 정확하게 입력하시기 바랍니다. 부정확한 공연명 입력 시 연관 상품 노출이 어렵습니다."
					fontSize="14px"
				/>
				<Text
					text="-상품 등록 시 정확한 판매가를 입력하시기 바랍니다. 시세보다 과도하게 높은 가격은 판매율이 낮아질 수 있습니다."
					fontSize="14px"
				/>
				<Text text="-모든 칸은 필수 입력 사항입니다. 모든 칸을 입력하지 않으면 등록되지 않습니다." fontSize="14px" />
			</CautionBox>
		</Section>
	);
}
