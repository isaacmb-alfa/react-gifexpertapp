import React/*, { useState, useEffect }*/ from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {


    const {data:images, loading} = useFetchGifs(category);

    // console.log(loading);



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__slow animate__repeat-2 animate__headShake">Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
