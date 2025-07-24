import React, { useEffect } from 'react'
import { apiAllAdvert } from '../../../services/advert';


const Alladverts = () => {
    const fetchAds = async () => {
        try{
            const res = await apiAllAdvert();
         } catch (error) {
        console.log(error);
         }
    };

    useEffect(() => {
        fetchAds();
    }, []);
}
export default Alladverts