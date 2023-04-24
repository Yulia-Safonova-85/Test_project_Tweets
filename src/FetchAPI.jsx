import axios from 'axios';

axios.defaults.baseURL = 'https://6446d06aee791e1e2909b973.mockapi.io';

export default async function fetchApiUsers(){
    try{ 
        const resp = await axios.get('/users');
        return resp.data;
    }
    catch(error){
        console.error(error);
    }
};