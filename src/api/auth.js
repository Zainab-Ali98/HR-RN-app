import instance from "./index.js";
import { setToken } from "./storage.js";

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);

  console.log("LOGIN TOKEN", res.data.token);
  setToken(res.data.token);
  return res.data;
};

export { login };
