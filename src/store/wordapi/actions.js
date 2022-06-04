const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/',
  params: {random: 'true'},
  headers: {
    'X-RapidAPI-Host': process.env.VUE_APP_RAPID_API_HOST,
    'X-RapidAPI-Key': process.env.VUE_APP_WORD_API_HOST
  }
};
export default {

  fetchRandomWord() {
    return new Promise((resolve, reject) => {
      axios.request(options).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  },

};
