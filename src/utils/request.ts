import axios, {AxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';

const BASE_URL = 'http://192.168.3.65:7001';

const request = async (requestConfig: AxiosRequestConfig) => {
  try {
    const result = await axios({
      ...requestConfig,
      baseURL: BASE_URL,
      method: requestConfig.method || 'GET',
    });
    return result.data;
  } catch (error) {
    Alert.alert('请求失败', JSON.stringify(error));
  }
};

export default request;
