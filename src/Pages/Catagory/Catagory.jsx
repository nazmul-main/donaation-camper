import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CatagoriesDetails from './CatagoriesDetails';

const Catagory = () => {
    const [catagory, setCatagory] = useState({});

    const { id } = useParams();

    const categories = useLoaderData();

    useEffect(() => {


        const findCatagory = categories?.find((catagory) => catagory.id === id);



        if (findCatagory) {
            setCatagory(findCatagory);
        }

    }, [id, categories]);


    return (
        <div>
            <CatagoriesDetails catagory={catagory}></CatagoriesDetails>
        </div>
    );
};

export default Catagory;
