import jsCookies from 'js-cookie'
export const getToken = () => {
  // console.log(process.env);
  // if (process.env.NODE_ENV == 'development') {
  //   return 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NyIsImlzcyI6ImNuLmNvbS53ZWJ0YXgud2Vic2l0ZSIsImlhdCI6MTU5NDE5ODQ2MiwiZXhwIjoxNjI1NzM0NDYyfQ.wJkBV4I_kYe_pjr1Yxbcji1dG4amfuAJooso7wfz_58'
  // } else {
  //   return localStorage.getItem('token');
  // }
  // return localStorage.getItem('token');
  return jsCookies.get('token')
};
export const getUrlParams = () => {
  let url = window.location.href;
  if (url.indexOf('?') !== -1) {
    let str = url.substr(url.indexOf('?') + 1);
    let strs = str.split('&');
    let result:any = {};
    for (let i = 0; i < strs.length; i++) {
      let key = strs[i].split('=')[0];
      let value = decodeURI(strs[i].split('=')[1]);
      if (i % 2 !== 0) {
        //对图片链接之类的参数值的解码
        value = decodeURIComponent(strs[i].split('=')[1]);
      } else {
        //对中文以及其他奇怪符号的参数值的解码
        value = decodeURI(strs[i].split('=')[1]);
      }
      result[key] = value;
    }
    return result;
  }
};