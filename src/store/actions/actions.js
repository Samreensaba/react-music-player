export const addToFav = (song)=>({
    type: 'ADD_TO_FAVOURITE',
    payload: song
})

export const removeFromFav = (song)=>({
    type: 'REMOVE_FROM_FAVOURITE',
    payload: song
})