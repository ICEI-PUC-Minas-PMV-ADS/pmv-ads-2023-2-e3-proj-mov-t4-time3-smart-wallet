import API from './webapi.services.js';
import {BASE_URL} from './urls.js';

export const getLancamentos = async () => {
  try{
    return await API.get(`${BASE_URL}/660/lancamentos`).then( 
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

export const postLancamento = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/lancamentos`, param).then( 
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

export const putLancamento = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/lancamentos/${param.id}`, param).then( 
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

export const deleteLancamento = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/lancamentos/${id}`).then( 
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