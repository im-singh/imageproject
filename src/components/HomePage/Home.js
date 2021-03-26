import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPhotos } from '../../reducer/photoReducer';
import Navbar from '../Navbar';
import CardList from './CardList';


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhotos({ type: "random" }))
    }, [])

    return (
        <div className="home-page">
            <Navbar />
            <CardList />
        </div>
    );
}
