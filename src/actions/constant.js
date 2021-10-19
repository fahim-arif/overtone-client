// export const API_URL = 'http://3.239.208.80:5000';
// export const IMAGE_URL = 'http://3.239.208.80:5000/static/';
// export const SUCCESS_URL = 'http://3.239.208.80:5000/paymentsuccess';
// export const FAILURE_URL = 'http://3.239.208.80:5000/paymentfailed';

export const API_URL = 'https://warm-lake-60018.herokuapp.com';
export const IMAGE_URL = 'https://warm-lake-60018.herokuapp.com/static/';
export const SUCCESS_URL = 'https://warm-lake-60018.herokuapp.com/paymentsuccess';
export const FAILURE_URL = 'https://warm-lake-60018.herokuapp.com/paymentfailed';

// export const API_URL = 'http://127.0.0.1:5000';
// export const IMAGE_URL = 'http://127.0.0.1:5000/static/';
// export const SUCCESS_URL = 'http://127.0.0.1:3001/paymentsuccess';
// export const FAILURE_URL = 'http://127.0.0.1:3001/paymentfailed';
export const PAYMENT_URL = 'https://apps.bookeey.com/pgapi/api/payment/requestLink';
export const PAYMENT_STATUS_URL = 'https://apps.bookeey.com/pgapi/api/payment/paymentstatus';

export const groupBy = (objectArray, property)=>{
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
           acc[key] = [];
        }
        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
     }, {});
}

export const multigroupBy = ({ Group: array, By: props }) => {
  const  getGroupedItems = (item) => {
      var returnArray = [];
       let i;
       for (i = 0; i < props.length; i++) {
           returnArray.push(item[props[i]]);
       }
       return returnArray;
   };

   let groups = {};
   let i;

   for (i = 0; i < array.length; i++) {
       const arrayRecord = array[i];
       const group = JSON.stringify(getGroupedItems(arrayRecord));
       groups[group] = groups[group] || [];
       groups[group].push(arrayRecord);
   }
   return Object.keys(groups).map((group) => {
       return groups[group];
   });
};

