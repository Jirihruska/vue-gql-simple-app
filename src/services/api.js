import axios from "axios";

export const api = async (graphqlQuery) => {
  let res;
  try {
    await axios({
      url: process.env.VUE_APP_BACKEND_URL,
      mode: "cors",
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
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
