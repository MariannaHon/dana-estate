
import React from 'react';
import Flat from '../Flat/Flat';
import { useSelector } from "react-redux";

const FlatList = () => {
    // const flats = useSelector(selectFilteredFlats);
    const flats = [1,2,3,4];

    return (
        <div>
            <ul>
                <li>
                    <Flat/>
                </li>
            </ul>
            {/* <ul>
                {flats.map(flat => (
                    <li key={flat.id}>
                        <Flat flat={flat} />
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default FlatList
