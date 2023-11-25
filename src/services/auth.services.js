import API from './webapi.services.js';
import {BASE_URL} from './urls.js';

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const login = async (param) => {
  try{
    return await API.post(`${BASE_URL}/login`, param).then( 
      response => {
        return response.data;
      },
      error =>{

        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const editarSenha = async (param) => {
  try{
    return await API.put(`${BASE_URL}/users/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{

        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}