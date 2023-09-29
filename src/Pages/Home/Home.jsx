import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Catagotres from "../../Components/Catagotres/Catagotres";
import Header from "../../Components/Header/Header";
import { useState } from "react";


const Home = () => {
    const catagotres = useLoaderData();

    const [searchItem, setSearchItem] = useState('');

    const handleSearch = (inputevalue) => {
        setSearchItem(inputevalue)
    }
    
    return (
        <div className='  mt-3'>
            <Header></Header>
            <Banner handleSearch={handleSearch}></Banner>
            <Catagotres catagotres={catagotres} searchItem={searchItem}></Catagotres>
        </div>
    );
};

export default Home;