import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

export async function registerUser(signupData) {
  const { data } = await instance.post('/users/signup', signupData);
  setToken.set(data.token);
  return data;
}

export async function loginUser(signupData) {
  const { data } = await instance.post('/users/login', signupData);
  setToken.set(data.token);
  return data;
}

export async function fetchCurrentUser(token) {
  try {
    setCurrentToken(token);
    const data = await instance.get('/users/current');
    return data.data;
  } catch (error) {
    setCurrentToken();
    throw error;
  }
}

export async function logoutUser() {
  const data = await instance.post('/users/logout');
  setToken.unset();
  return data.data;
}


export async function fetchContactsFromApi() {
  const data = await instance.get('/contacts');
  return data.data;
}

export async function addContactToApi(newContact) {
  const data = await instance.post('/contacts', newContact);
  return data.data;
}

export async function deleteContactFromApi(id) {
  await instance.delete(`/contacts/${id}`);
  return id;
}