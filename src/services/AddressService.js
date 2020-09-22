import axios from 'axios';

export const insertAddress = async values => {
  try {
    const response = await axios.post('http://localhost:8080/api/account/address', values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const editUserAddress = async ( values, id ) => {
  console.log(values)
  console.log(id)
  try {
    const response = await axios.put("http://localhost:8080/api/account/address/" + id, values);
    fetchData();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}