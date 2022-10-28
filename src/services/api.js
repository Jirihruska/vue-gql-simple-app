import axios from "axios";

export const api = async (graphqlQuery) => {
  let res;
  try {
    await axios({
      url: process.env.VUE_APP_BACKEND_URL,
      method: "post",
      data: graphqlQuery,
    }).then((data) => {
      if (data.status === 200) {
        return (res = data.data.data);
      }
    });
  } catch (e) {
    return (res = e);
  }

  return res;
};
