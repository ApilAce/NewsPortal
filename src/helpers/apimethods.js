import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const getCookie = (name) => {
  if (typeof window !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  }
  return null;
};

export const GET = async (url) => {
  try {
    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (url, data) => {
  try {
    const response = await api.post(url, data, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const PUT = async (url, data) => {
  try {
    const response = await api.put(url, data, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
