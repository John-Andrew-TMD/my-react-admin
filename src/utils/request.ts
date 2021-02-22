import Axios from 'axios';
import { message } from 'antd';
import { getToken, getUrlParams } from './index';
import jsCookies from 'js-cookie';
const Service = Axios.create({
  baseURL: 'devApi',
  responseType: 'json',
  timeout: 30000, // 请求超时时间
});
Service.interceptors.request.use(
  (config) => {
    if (config.url != '/auth/login') {
      config.headers.token = getToken(); //纯H5方式
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// 响应拦截
Service.interceptors.response.use((response:any):any =>{
    let res = response.data;
    if (res.success) {
      return Promise.resolve(res);
    } else {
      if (res.code === 201 || res.code === 202) {
        jsCookies.remove('token');
        jsCookies.remove('userinfo');
        if (window.location.href.indexOf('/questionnaire') > -1) {
          let route = getUrlParams();
          if (!jsCookies.get('token')) {
          } else {
            // router.push({
            //   path: "/questionnaire/mng",
            //   query: {
            //     inviteUserId: route.inviteUserId,
            //     examId: route.examId
            //   }
            // });
          }
        } else {
          //   router.push("/auth");
        }
      } else {
        return Promise.resolve(res);
      }
    }
  },
  // 错误回调
  (error) => {
    if (error.response) {
      // http状态码错误
      switch (error.response.status) {
        case 401:
          console.log(401);
          break;
        case 403:
          console.log(403);
          break;
        case 404:
          console.log(404);
          break;
        case 500:
          console.log(500);
          break;
      }
    }
    message.error({ message: '服务开了个小差，请稍后再试' });
    return Promise.reject(error.response);
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    Service.get(url, { params: params })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
function post(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    Service.post(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
function patch(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    Service.patch(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    Service.put(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
function del(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    Service.delete(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

/**
 * 上传文件的方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function upload(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    Service.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(function () {
        console.log('finally');
      });
  });
}

export { Service, get, post, patch, put, del, upload };
