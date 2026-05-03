export const TASK_STATUS = {
  TODO: 'Todo',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
};

export const USER_ROLES = {
  ADMIN: 'Admin',
  MEMBER: 'Member',
};

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  UNAUTHORIZED: 'Unauthorized access',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Server error occurred',
  NETWORK_ERROR: 'Network error. Please check your connection',
  SESSION_EXPIRED: 'Your session has expired. Please login again',
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully',
  SIGNUP_SUCCESS: 'Account created successfully',
  TASK_UPDATED: 'Task updated successfully',
  PROJECT_CREATED: 'Project created successfully',
};

export const API_TIMEOUT = 30000; // 30 seconds
