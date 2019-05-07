import { FETCH_DUST } from '../actions';

export default function(state = {
  loading: false, error: '', data: []
}, action) {
  console.log(action.payload);
  switch (action.type) {
  case `${FETCH_DUST}_PENDING`:
    //요청이 시작되었음을 알리는 액션
    return {
      loading: true,
      error: '',
      data: [...state.data]
    };

  case `${FETCH_DUST}_FULFILLED`:
  //요청이 성공적으로 완료되었다고 알리는 액션
    return {
      loading: false,
      error: '',
      data: [action.payload.data, ...state.data]
    };

  case `${FETCH_DUST}_REJECTED`:
  //요청이 실패했음을 알리는 액션
    return {
      loading: false,
      error: action.payload,
      data: [...state.data]
    };
  default:
    return state;
  }
}

