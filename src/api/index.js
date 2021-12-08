import axios from 'axios';
const config = {
  baseUrl: 'https://www.juso.go.kr/addrlink/addrLinkApi.do?',
};

function searchApi(data) {
  console.log(data);
  const basic = {
    confmKey: 'devU01TX0FVVEgyMDIxMTIwODA5NTk1OTExMjAwMzE=',
    resultType: 'json',
  };
  return axios.get(`${config.baseUrl}`, {
    params: Object.assign(basic, data),
  });
}

export { searchApi };
