import { xmlToJson } from '../xmlToJson/xmlToJson';

export const useGetJsonData = async (getUrl) => {
	const response = await fetch(getUrl);

	const xmlString = await response.text();
	const XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');

	// import해온 xmlToJson함수 안에 변형한 XmlNode를 넣어준다. 그러면 json객체를 return해준다.
	const item = xmlToJson(XmlNode);
	return item;
};
