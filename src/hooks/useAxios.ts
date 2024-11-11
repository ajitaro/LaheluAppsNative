/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useRef, useState} from 'react';
import Axios from 'axios';

export const apiInstance = Axios.create({
  baseURL: 'https://api.pexels.com/videos/search?query=nature&page=1',
  headers: {
    Authorization: 'rS6aVIfEQQUeq6gtDB4qCcrxgeuQpUnmU0Il9g7KcO1MY7yEoOPnEzWx',
    'X-Ratelimit-Limit': 20000,
    'X-Ratelimit-Remaining': 19684,
    'X-Ratelimit-Reset': 1590529646,
  },
  timeout: 60000,
});

export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const controller = useRef(new AbortController()).current;

  const callAPI = async (
    axiosConfig?: any,
    callBack?: (state: any) => void,
  ) => {
    let resTemp: any, errTemp: any;
    apiInstance
      .request({...axiosConfig, signal: controller.signal})
      .then(res => {
        if (!axiosConfig?.signal?.aborted) {
          resTemp = res.data;
          setResponse(res.data);
        } else {
          setError('Request has been canceled');
        }
      })
      .catch(err => {
        console.log(
          'error fetching API !!!',
          err?.response?.data?.message || err.message,
        );
        setError(__DEV__ ? JSON.stringify(err) : 'Something went wrong');
      })
      .finally(() => {
        setloading(false);

        if (callBack) {
          callBack({response: resTemp, error: errTemp, loading});
        }
      });
  };

  const fetchData = useCallback(
    (axiosConfig?: any, resetState = true, callBack?: (state: any) => void) => {
      if (resetState) {
        setloading(true);
        setResponse(null);
        setError('');
      }

      callAPI(axiosConfig, callBack);
    },
    [],
  );

  return {response, error, loading, fetchData, controller};
};
