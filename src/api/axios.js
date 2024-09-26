import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
const VERSION = import.meta.env.VITE_BACKEND_VERSION

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}



export const csrfToken = getCookie('csrftoken');

export default axios.create({
  baseURL: `${BASE_URL}/${VERSION}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': csrfToken
  }
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
