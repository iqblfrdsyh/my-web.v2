import axios from "axios";

export const getData = async (endpoint) => {
  const response = await axios.get(`/api/v1/${endpoint}`);
  return response.data.datas;
};
