import axios from "axios";

export const api = async (graphqlQuery) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Accept",
    "Access-Control-Allow-Origin": "*",
    Origin: `${process.env.VUE_APP_BACKEND_URL}`,
  };
  let res;
  try {
    await axios({
      url: process.env.VUE_APP_BACKEND_URL,
      method: "post",
      headers: headers,
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
