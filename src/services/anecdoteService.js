import axios from "axios";

const baseUrl = `http://localhost:3001/anecdotes`;

const getAll = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export default { getAll };
