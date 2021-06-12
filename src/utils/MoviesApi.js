class Api {
    constructor(config) {
      /** тело конструктора*/
      this.baseUrl = config.baseUrl;
      this.headers = config.headers;
    }
  
    _getResponseData(value) {
      if (value.ok) {
        return value.json();
      } else {
        return Promise.reject(`Ошибка: ${value.status}`);
      }
    }
  
    getAllMovies() {
      return fetch(`${this.baseUrl}`, {
        headers: this.headers,
      }).then((res) => {
        return this._getResponseData(res);
      });
    }

  }
  
  const BeatfilmMoviesApi = new Api({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default BeatfilmMoviesApi;
  
  
  
  
  