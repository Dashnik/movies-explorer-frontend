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
  
    addingMovies(newMovie, jwt) {
          return fetch(`${this.baseUrl}/movies`, {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
             Authorization: `Bearer ${jwt}`,
          },
          body:JSON.stringify(newMovie)
        })
          .then((res) => {
            return this._getResponseData(res);
          })
          .then((data) => {
            return data;
          });
      } 

      deleteMovies(newMovie, jwt){
        return fetch(`${this.baseUrl}/movies/${newMovie._id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': "application/json",
             Authorization: `Bearer ${jwt}`,
          },
        })
          .then((res) => {
            return this._getResponseData(res);
          })
          .then((data) => {
            return data;
          });
      }
    

  

    register(name, email, password) {
      return fetch(`${this.baseUrl}/signup`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({name, email, password }),
      }).then((response) => {
        return this._getResponseData(response);
      });
    }
  
    authorize(email, password) {
      return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      return this._getResponseData(response);
    });
  }
  
    getContent(jwt) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }).then((response) => {
        return this._getResponseData(response);
      });
    }
  }
  
  export const apiAuth = new Auth({
     baseUrl: "http://api.findmovie.nomoredomains.icu",
   //  baseUrl: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
    // addingMovies(newMovie, isLiked, jwt) {
    //   if (isLiked) {
    //       return fetch(`${this.baseUrl}/movies`, {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': "application/json",
    //          Authorization: `Bearer ${jwt}`,
    //       },
    //       body:JSON.stringify(newMovie)
    //     })
    //       .then((res) => {
    //         return this._getResponseData(res);
    //       })
    //       .then((data) => {
    //         return data;
    //       });
    //   } else {
    //     return fetch(`${this.baseUrl}/movies/${newMovie.id}`, {
    //       method: "DELETE",
    //       headers: {
    //         'Content-Type': "application/json",
    //          Authorization: `Bearer ${jwt}`,
    //       },
    //     })
    //       .then((res) => {
    //         return this._getResponseData(res);
    //       })
    //       .then((data) => {
    //         return data;
    //       });
    //   }
    // }