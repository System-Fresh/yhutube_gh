import axios from 'axios';

export const BASE_URL = 'https://youtube-v38.p.rapidapi.com';
// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
    maxResults: 50,
  },
  //   params: {
  //   q: 'despacito',
  //   hl: 'en',
  //   gl: 'US'
  // },
  // params: {
  //  part: 'snippet',
  //   videoId: 'M7FIvfx5J10'
  // },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '09e6a9df90mshae7bdee496dc111p1fb2d8jsnd6a82864dfa3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key':' KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };