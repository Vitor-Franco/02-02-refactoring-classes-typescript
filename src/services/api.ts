import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Vitor-Franco/02-02-refactoring-classes-typescript',
});

export default api;
