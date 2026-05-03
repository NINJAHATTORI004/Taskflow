// Backend configuration
module.exports = {
  jwt: {
    expiresIn: 3600, // 1 hour in seconds
  },
  bcrypt: {
    saltRounds: 10,
  },
  validation: {
    passwordMinLength: 6,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  errorMessages: {
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_EXISTS: 'User already exists',
    USER_NOT_FOUND: 'User not found',
    UNAUTHORIZED: 'Unauthorized access',
    ADMIN_ONLY: 'Admin resource. Access denied.',
    PROJECT_NOT_FOUND: 'Project not found',
    TASK_NOT_FOUND: 'Task not found',
    USER_ALREADY_IN_PROJECT: 'User already in project',
    INVALID_TOKEN: 'Token is not valid',
    NO_TOKEN: 'No token, authorization denied',
  },
};
