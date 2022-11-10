import {createSlice} from "@reduxjs/toolkit";


// ########################################################################     INITIAL STATE
const initialState = {
    name:"",
    email:"",
    photo:"",
};

// ########################################################################     LOGIN STATE
 const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLoginDetails:(state, action) =>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
            
        },
// ########################################################################     LOGOUT STATE
        setSignOutstate:(state) =>{
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
 });

 export const {setUserLoginDetails,setSignOutstate}=userSlice.actions;
 export const selectUserName = state =>state.user.name
 export const selectUserEmail = state => state.user.name
 export const selectUserPhoto = state => state.user.photo

 export default userSlice.reducer;