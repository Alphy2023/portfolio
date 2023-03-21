// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import authService from "./authService";

// const getUserfromStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const initialState = {
//   user: getUserfromStorage,
//   orders:[],
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: "",
// };
// // admin login
// export const adminLogin = createAsyncThunk('auth/admin-login', async(user, thunkAPI)=>{
//     try {
//         return await authService.adminLogin(user)
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
// });
// // user login
// export const userLogin = createAsyncThunk('auth/login', async(user, thunkAPI)=>{
//     try {
//         return await authService.userLogin(user)
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
// });
// // LOGOUT
// export const Logout = createAsyncThunk('auth/logout', async(thunkAPI)=>{
//     try {
//         return await authService.Logout()
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
// });
// // get all orders
// export const getOrders = createAsyncThunk(
//   "auth/get-orders",
//   async (thunkAPI) => {
//     try {
//       return await authService.getOrders();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const authSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{},
//     extraReducers: (builder) =>{
//         builder
//           .addCase(adminLogin.pending, (state) => {
//             state.isLoading = true;
//             state.message = "";
//           })
//           .addCase(adminLogin.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isError = false;
//             state.isSuccess = true;
//             state.message = "";
//             state.user = action.payload;
//           })
//           .addCase(adminLogin.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.isSuccess = false;
//             state.user = null;
//             state.message = action.payload?.response?.data?.message;
//             // state.message = action.payload?.message;
//           })
//           .addCase(userLogin.pending, (state) => {
//             state.isLoading = true;
//             state.message = "";
//           })
//           .addCase(userLogin.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isError = false;
//             state.isSuccess = true;
//             state.message = "";
//             state.user = action.payload;
//           })
//           .addCase(userLogin.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.isSuccess = false;
//             state.user = null;
//             state.message = action.payload.response.data.message;
//           })
//           .addCase(Logout.pending, (state) => {
//             state.isLoading = true;
//             state.message = "";
//           })
//           .addCase(Logout.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isError = false;
//             state.isSuccess = true;
//             state.message = "";
//             // state.user = [];
//           })
//           .addCase(Logout.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.isSuccess = false;
//             // state.user = null;
//             state.message = action.payload.response.data.message;
//           })
//           .addCase(getOrders.pending, (state) => {
//             state.isLoading = true;
//             state.message = "";
//           })
//           .addCase(getOrders.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isError = false;
//             state.isSuccess = true;
//             state.message = "";
//             state.orders = action.payload;
//           })
//           .addCase(getOrders.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.isSuccess = false;
//             state.orders = null;
//             state.message = action.payload.response.data.message;
//           });
//     }
// });

// export default authSlice.reducer;