import axios from 'axios';

const API_KEY = '99292ab29ccb0a4fd6b021a9b6614c1a67a13b9d';
const ROOT_URL = 'https://api.waqi.info/feed';

export const FETCH_DUST = 'FETCH_DUST';

export function fetchDust(city) {
    const url = `${ROOT_URL}/${city}/?token=${API_KEY}`;
    const request = axios.get(url);
    console.log(url)

    return {
        type: FETCH_DUST,
        payload: request  //패러미터로 전달 받은 값(request)을 액션의 payload 값으로 설정해 줌
      };
}
