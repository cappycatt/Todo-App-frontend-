import axios from "axios";

export const createUser = async (email, password, name) => {
  try {
    console.log(email, password, name);
    const response = await axios.post(`${import.meta.env.API_BASEURL}/auth/signup/`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${import.meta.env.API_BASEURL}/auth/signup/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while deleting user:", error);
    throw error;
  }
};

export const loginValidation = async (email, password) => {
  try {
    console.log(email, password);
    const response = await axios.post(`${import.meta.env.API_BASEURL}/auth/login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error while sending login data:", error);
    throw error;
  }
};
