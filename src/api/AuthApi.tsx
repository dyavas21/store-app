import axios from "axios";
import Conf from "../constant/Conf";

// export const LoginApi = async (username: string, password: string) => {
//   const response = await axios({
//     method: "POST",
//     // url: `${Conf.serverip}/auth/login`,
//     url: "https://fakestoreapi.com/auth/login",
//     data: {
//       username: username,
//       password: password,
//     },
//   }).catch(err => {
//     return err.response;
//   });
//   return response;
// };

export const LoginApi = async (username: string, password: string) => {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
