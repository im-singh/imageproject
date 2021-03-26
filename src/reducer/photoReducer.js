import { createSlice } from '@reduxjs/toolkit'

export const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        list: [],
        isError: false,
        msg: '',
        isLoading: false,
    },
    reducers: {
        fetchPhotos: (state) => {
            return { ...state, isLoading: true }
        },
        fetchSuccess: (state, action) => {
            return { ...state, list: action.payload, isLoading: false }
        },
        fetchFail: (state, action) => {
            return { ...state, isError: true, isLoading: false }
        },
        toggleLoading: (state, action) => {
            return { ...state, isLoading: action.payload }
        },
        editDescription: (state, action) => {
            let idx = state.list.findIndex(ele => ele.id === action.payload.id);
            state.list[idx].description = action.payload.description;
        },
        deletePhoto: (state, action) => {
            state.list = state.list.filter(ele => ele.id !== action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { fetchFail, fetchSuccess, toggleLoading, fetchPhotos, editDescription, deletePhoto } = photosSlice.actions

export default photosSlice.reducer