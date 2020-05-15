import axios from "axios";

const api = {
  getMovies(param) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      axios
        .get(`https://imdb.hriks.com/movie/?limit=50&offset=` + param.offset)
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(new Error("error"));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};

export default api;
