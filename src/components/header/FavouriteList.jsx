import React, { useContext } from 'react';
import { FavouriteContext, LocationContext } from '../../context';

export default function FavouriteList() {
    // Accessing the favourites array from the FavouriteContext
    const { favourites } = useContext(FavouriteContext);
  
    // Accessing the location from the LocationContext
    const { setSelectedLocation} = useContext(LocationContext);

    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4">
                {favourites.length > 0 ? (
                    favourites.map((fav, index) => (
                        <li 
                            key={index} 
                            className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                        >
                            <a onClick={()=>setSelectedLocation({...fav})}>{fav.location}</a>
                        </li>
                    ))
                ) : (
                    <li className="py-2 px-4 text-gray-500">No favourites added</li>
                )}
            </ul>
        </div>
    );
}
