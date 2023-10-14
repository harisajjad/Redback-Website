import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(async (request) => {
  if (request) {
    let value = JSON.stringify(window.sessionStorage.getItem("access_token"));
    let token = JSON.parse(value);
    request.headers.authorization = `Bearer ${token}`;
    // request.headers["Content-Type"] = "application/json";
    return request;
  }
});
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    switch (status) {
      case 400:
        alert("Error");
      case 401:
        alert("unauthorised");
      case 404:
        alert("Not Found");
        break;
      case 500:
        alert("Server Error");
        break;
    }

    return Promise.reject(error);
  }
);
const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => axios.get(url, body).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url, {}).then(responseBody),
};

const UserAPI = {
  list: () => requests.get("/user"),
  detail: (name) => requests.get(`/user/${name}`),
  login: (body) => requests.post(`/login`, body),
  create: (body) => requests.post("/signup", body),
  //update: (userDetail) => requests.put(`signup/${id}`, userDetail),
  logout: (refreshToken) => requests.del(`/logout`, refreshToken),
};

const agent = {
  UserAPI,
};

export default agent;
