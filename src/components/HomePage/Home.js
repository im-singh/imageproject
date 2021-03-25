import React, { useEffect, useState } from 'react';
import { searchPhotos } from '../../reducer/api';
import Navbar from '../Navbar';
import CardList from './CardList';


export default function Home() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        searchPhotos("dog")
            .then(r => {
                // console.log("r: ", r);
                setData(r.data.results)
            })
            .catch(err => {
                console.log("home err: ", err);
            })
    }, [])

    return (
        <div className="home-page">
            <Navbar />
            <CardList list={Data} />
        </div>
    );
}
