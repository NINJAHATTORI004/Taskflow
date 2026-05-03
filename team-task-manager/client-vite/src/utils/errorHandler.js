export const getErrorMessage = (error) => {
  if (error.response?.data?.msg) {
    return error.response.data.msg;
  }
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An error occurred. Please try again.';
};
