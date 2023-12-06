import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        // here we got user data 
        getUser : (state, action) => {
            state.users = action.payload.map(user => {
                return {id: user._id, url: user.url, email: user.email, price: user.price}
            })
        },
        // here we will add new user products
        addUser : (state, action) => {
            state.users.push(action.payload)
        },
        // here will be updating 
        updateUser: (state, action) => {
            const index = state.users.findIndex(x => x.id === action.payload.id)
            state.users[index] = {
                id: action.payload.id,
                url: action.payload.url,
                email: action.payload.email,
                price: action.payload.price,
            }
        },
        // deleting will be here
        deleteUser: (state, action) => {
            const id = action.payload.id;
            state.users = state.users.filter(u => u.id !== id)
        }
    }
}) 

export const {getUser, addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;