import axios from 'axios';
const config = {
  searchUrl: 'https://www.juso.go.kr/addrlink/addrLinkApi.do?',
  baseURL: '/b2c/api/cbod0104r001',
};

function searchApi(data) {
  //console.log(data);
  const basic = {
    confmKey: 'devU01TX0FVVEgyMDIxMTIwODA5NTk1OTExMjAwMzE=',
    resultType: 'json',
  };
  return axios.get(`${config.searchUrl}`, {
    params: Object.assign(basic, data),
  });
}

function testApi(data) {
  /* return axios.get(`${config.baseURL}`, {
    params: Object.assign(data),
  });*/
  return axios.get(
    `${config.baseURL}`,
    { params: Object.assign(data) },
    {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0U25vIjo3MywiY3VzdE5tIjoi6rmA7ZWY64KYIiwiZXhBY2Nlc3NDcmVhdGVEYXRlIjoxNjQwMDc1MzgxNjc2LCJpc0FjY2Vzc1Rva2VuIjoiWSIsInRva2VuVHlwZSI6ImIyYyIsImV4cCI6MTY0MjY2NzM4MX0.aAPx3ijqeES1md7psSWvFL57BDsWyUmB7kna0s7-c-E',
      },
    }
  );
}

export { searchApi, testApi };
