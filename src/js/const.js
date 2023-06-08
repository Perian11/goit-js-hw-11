import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '37084644-5004bc972f29348ffab6a1990';

export async function fetchEvents(q, page) {
  try {
    const { data } = await axios({
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
