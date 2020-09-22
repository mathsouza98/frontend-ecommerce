import axios from 'axios';

export const insertAddress = async values => {
  try {
    const response = await axios.post('http://localhost:8080/api/account/address', values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

