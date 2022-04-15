import axios from 'axios';

/* axios.defaults.baseURL='https://pixabay.com/api/'; */
const BASE_URL='https://pixabay.com/api/';
const PERSONAL_KEY='25236091-8685fe5809d54541c15ad7685';


export const getImages = async data => { 
    const url=`${BASE_URL}?q=${data}&page=1&key=$${PERSONAL_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response= await axios.get(url);
    //const resultAmount=response.data.totalHits;
    if (response.data.totalHits > 0) {
        return response;
      }
}