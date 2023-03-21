// import axios from "axios";
// import { base_url } from "../../utils/base_url";
// import { config} from "../../utils/config";
// // admin login
// // const cookie = document.cookie
// const adminLogin = async(userData) => {
//   const res = await axios.post(`${base_url}user/admin-login`, userData);
//   if (res?.data) {
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }
//   return res.data;
// }
// // user login
// const userLogin = async(userData) => {
//     const res = await axios.post(`${base_url}user/login`,userData);
//      if (res?.data) {
//        localStorage.setItem("user", JSON.stringify(res.data));
//      }
//      return res.data;
// }
// // LOGOUT
// const Logout = async() => {
//     const res = await axios.get(`${base_url}user/logout`);
//     // cookie.setCookie("refreshToken");

//     //  if (res?.data) {
//     //    localStorage.removeItem("user");
//     //  }
   
//      return res.data;
// }
// // order
// const getOrders = async () => {
//   const res = await axios.get(`${base_url}user/get-orders`, config);
//   return res.data;
// };


// const authService = {
//   adminLogin,
//   userLogin,
//   getOrders,
//   Logout,
// };

// export default authService;