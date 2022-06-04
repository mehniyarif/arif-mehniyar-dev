const axios = require("axios");

function createOptions(word="test"){
  return {
    method: 'POST',
    url: 'https://xf-english-dictionary1.p.rapidapi.com/v1/dictionary',
    params: {
      selection: word,
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': process.env.VUE_APP_XF_ENGLISH_API_HOST,
      'X-RapidAPI-Key': process.env.VUE_APP_RAPID_API_KEY
    }
  }

}
export default {
  fetchWordSentences(ignore, options) {
    return new Promise((resolve, reject) => {
      axios.request(createOptions(options.word)).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  },

};
