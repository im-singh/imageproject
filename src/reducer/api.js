import axios from 'axios';

export const searchPhotos = (string) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.unsplash.com/search/photos?page=1&client_id=4RcG_5MyWoVgAbK7BPVNadf5LtkpA6dj9GUIo1z9uhA&query=" + string)
            .then(r => {
                console.log("search: ", r.data.results);
                resolve(r.data.results);
            })
            .catch(err => {
                reject(err);
            })
    })
}
export const randomPhotos = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.unsplash.com/photos/random?count=10&client_id=4RcG_5MyWoVgAbK7BPVNadf5LtkpA6dj9GUIo1z9uhA")
            .then(r => {
                // console.log("random: ", r.data);
                resolve(r.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}