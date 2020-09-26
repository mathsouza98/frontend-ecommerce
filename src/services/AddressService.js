import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/account/address");
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const insertAddress = async values => {
  try {
    const response = await axios.post('http://localhost:8080/api/account/address', values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const editUserAddress = async (values, id) => {
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

export const deleteAddress = async (id) => {
  try {
    const response = await axios.delete("http://localhost:8080/api/account/address/" + id);
    console.log(response);
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
