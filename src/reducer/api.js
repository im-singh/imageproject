import axios from 'axios';

export const searchPhotos = (string) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.unsplash.com/search/photos?page=1&client_id=4RcG_5MyWoVgAbK7BPVNadf5LtkpA6dj9GUIo1z9uhA&query=" + string)
            .then(r => {
                // console.log("r: ", r);
                resolve(r);
            })
            .catch(err => {
                reject(err);
            })
    })
}