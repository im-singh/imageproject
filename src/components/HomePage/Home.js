import React, { useEffect } from 'react';
import { searchPhotos } from '../../reducer/api';
import Navbar from '../Navbar';
import CardList from './CardList';


export default function Home() {
    useEffect(() => {
        searchPhotos("dog")
            .then(r => {
                console.log("r: ", r);
            })
            .catch(err => {
                console.log("home err: ", err);
            })
    }, [])

    return (
        <div className="home-page">
            <Navbar />
            <CardList />
        </div>
    );
}
