import API from './webapi.services.js';
import {BASE_URL} from './urls.js';

export const getMessages = async () => {
    try{
      return await API.get(`${BASE_URL}/660/chat`).then( 
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

export const postMessages = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/chat`, param).then( 
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