import axios from "axios";

export const api = async (graphqlQuery) => {
  const headers = {
    "content-type": "application/json",
  };
  const endpoint = process.env.VUE_APP_BACKEND_URL;
  let res;
  try {
    await axios({
      url: endpoint,
      method: "get",
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
