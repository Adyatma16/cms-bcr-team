import axios from "axios";

export const Services = () => {
  return {
    get: (url, params, config) => {
      return axios.get(url, { ...params }, { ...config });
    },
    post: (url, params, config) => {
      return axios.post(url, { ...params }, { ...config });
    },
    put: (url, params, config) => {
      return axios.put(url, { ...params }, { ...config });
    },
    delete: (url, params, config) => {
      return axios.delete(url, { ...params }, { ...config });
    },
  };
};
