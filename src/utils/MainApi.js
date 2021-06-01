class Auth {
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
  
    addMovieToFavourite( country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRu, nameEN ){
      return fetch(`${this.baseUrl}/movies`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRu, nameEN}),
      }).then((response) => {
        return this._getResponseData(response);
      });
    } 

    register(email, password) {
      return fetch(`${this.baseUrl}/signup`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ email, password }),
      }).then((response) => {
        return this._getResponseData(response);
      });
    }
  
    authorize(email, password) {
      return fetch(`${this.baseUrl}/signin`, {
        method: "POST",
        credentials: 'include',
        headers: this.headers,
        body: JSON.stringify({ email, password }),
        
      }).then((response) => {
       // return response.json();
        return this._getResponseData(response);
      })
    }
  
    // getContent(jwt) {
    //   return fetch(`${this.baseUrl}/users/me`, {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: `Bearer ${jwt}`,
    //     },
    //   }).then((response) => {
    //     return this._getResponseData(response);
    //   });
    // }
  }
  
  export const apiAuth = new Auth({
     baseUrl: "http://api.findmovie.nomoredomains.icu",
   //  baseUrl: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
  