import React from 'react';
import MusicalHeaderCont from '../atoms/MusicalHeaderCont';
import { MusicalName } from '../atoms/MusicalName';
import InlineText from '../../Common/InlineText';
import DivideBar from '../../Common/DivideBar';

export default function MusicalHeader({ data }) {
	return (
		<MusicalHeaderCont>
			<MusicalName>{data.prfnm}</MusicalName>
			<InlineText text={`${data.prfpdfrom} ~ ${data.prfpdto}`} fontSize="13px" color="#666" />
			<DivideBar margin="10px" />
			<InlineText text={data.fcltynm} fontSize="13px" color="#666" />
		</MusicalHeaderCont>
	);
}
