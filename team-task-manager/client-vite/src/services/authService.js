import http from './http';

const signup = (user) => {
  return http.post('/auth/signup', user);
};

const login = (credentials) => {
  return http.post('/auth/login', credentials);
};

const authService = {
  signup,
  login,
};

export default authService;
