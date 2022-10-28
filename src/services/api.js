import axios from "axios";

export const api = async (graphqlQuery) => {
  let res;
  try {
    await axios({
      baseURL: process.env.VUE_APP_BACKEND_URL,
      mode: "cors",
      method: "post",
      headers: {
        "Access-Control-Allow-Headers":
          "origin, x-requested-with, content-type",
        "Access-Control-Allow-Origin": `${process.env.VUE_APP_BACKEND_URL}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Credentials": true,
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
