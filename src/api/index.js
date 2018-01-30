import axios from 'axios';
/**
 * This is an example request. Create your own using best practises for
 * handling asynchronous data fetching
 **/

export const getData = cb => {
  axios
    .get('http://localhost:9988/api/vehicle')
    .then(response => {
      if (response.status === 200) {
        // console.log(response);
        cb(response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const getVehicle = (url, cb) => {
  axios
    .get(`http://localhost:9988${url}`)
    .then(response => {
      if (response.status === 200) {
        // console.log('getVehicle', response.data);
        cb(response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
