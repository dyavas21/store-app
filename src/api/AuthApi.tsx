import axios from "axios";
import Conf from "../constant/Conf";

export const LoginApi = async (username: string, password: string) => {
  const response = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${Conf.serverip}/auth/login`,
    data: {
      username: username,
      password: password,
    },
  }).catch(err => {
    return err.response;
  });
  return response;
};
