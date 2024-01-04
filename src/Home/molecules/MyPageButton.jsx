import React, { useState } from 'react';
import MyPageIcon from '../atoms/MyPageIcon';
import IconText from '../atoms/IconText';
import MyPageModal from './MyPageModal';

export default function MyPageButton() {
	const [IconSrc, setIconSrc] = useState(false);

	return (
		<>
			<button>
				<MyPageIcon IconSrc={IconSrc} setIconSrc={setIconSrc} />
				<IconText text="마이페이지" />
			</button>
			{IconSrc === true ? <MyPageModal /> : null}
		</>
	);
}
