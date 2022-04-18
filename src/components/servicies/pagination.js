import * as API from './api';

export const paginator = (url) => {
    API.getImage(url)
      .then(response => {
        if (response !== undefined) {
          if (response.data.totalHits > 0) {

          }
        } else {
          throw new Error('Sorry, there are no images matching your search query. Please try again.');
        }
      })
      .catch(error => alert(error.message));
  };