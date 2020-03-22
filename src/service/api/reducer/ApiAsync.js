import { useReducer, useEffect } from 'react';
import { ApiState } from '../enum/ApiState';


function reducer(state, action) {
  switch (action.state) {
    case ApiState.Success:
      return {
        isDone: true,
        isLoading: false,
        isSuccess: true,
        data: action.data,
        msg: action.msg
      };
    case ApiState.Error:
      return {
        isDone: true,
        isLoading: false,
        isSuccess: false,
        data: null,
        msg: action.msg
      };
    default:
      return {
        isDone: true,
        isLoading: false,
        isSuccess: false,
        data: null,
        msg: null
      };
  }
}

export default function ApiAsync(callback, deps = []) {

  const [state, dispatch] = useReducer(reducer, {
    isDone: false,
    isLoading: true,
    data: null
  });


  const fetchData = async () => {
    try {

      const response = await callback();

      dispatch({ 
        state: ApiState.Success, 
        data: response.data,
        isDone: true,
        isLoading: false
      });

    } catch (e) {

      dispatch({ 
        state: ApiState.Error, 
        data: null,
        isDone: true,
        isLoading: false,
        error: e 
      });

    }
  };

  const { isDone } = state;

  useEffect(() => {
    if(isDone){
      return;
    }

    fetchData();

  // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}