import API from './webapi.services.js';
import {BASE_URL} from './urls.js';

export const lancar = async (param) => {
  try{
    return await API.post(`${BASE_URL}/extrato`, param).then( 
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