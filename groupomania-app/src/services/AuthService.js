import axios from "axios";

const apiUrl = "http://localhost:8080/api/auth/";

//POST login/Save jwt to LS
class AuthService {
    login(user) {
        return axios
            .post(apiUrl + "login", {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    signin(user) {
        return axios
            .post(apiUrl + "signin", {
                username: user.username,
                email: user.email,
                password: user.password
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
};
    
export default new AuthService();