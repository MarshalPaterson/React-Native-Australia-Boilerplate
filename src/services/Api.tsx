import { Linking } from "react-native";

const FETCH_URL = "http://localhost/rnab/api.json?rand=" + Math.random();

const Api = {
  call: async function fetchData() {
    const res = await fetch(FETCH_URL);
    setError({ message: "", show: false });

    res
      .json()
      .then((res) => setStore(res))
      .catch((err) =>
        setError({ message: "ERROR: " + err.message, show: true })
      )
      .finally(() => setLoader({ show: false }));
  },
};

export default Api;
