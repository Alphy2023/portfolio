const getToken = localStorage?.getItem("user")
  ? JSON.parse(localStorage?.getItem("user"))
  : null;

const token = getToken?.token;
// const getCookie=(name)=> {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
// const getRefreshToken = getCookie('refreshToken');

// console.log(getRefreshToken);
export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};
// export const cookieConfig = {
//   cookies: {
//     refreshToken: `${getRefreshToken}`,
//   },
// };
