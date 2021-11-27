///// To access protected resources 

//Checks LS for user item
export default function authHeader() {
    //If logged in user with accessToken (JWT) => return HTTP Authorization header.
    let user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer' + user.accessToken };
    } else {
      return {};// => Empty object
    }
  }