/* eslint-disable react/prop-types */
import CatagotresCard from "./CatagotresCard";

const Catagotres = ({ catagotres, searchItem }) => {
    const filteredData = catagotres.filter((data) => {
        return data.category.toLowerCase().includes(searchItem.toLowerCase());
    });
    return (
        
            <div className="my-10 max-w-screen-xl mx-auto px-4 md-px-8 lg:px-12">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 rounded-lg items-center">
                    {filteredData.length > 0 ? (
                        filteredData.map((catagory) => <CatagotresCard key={catagory.id} catagory={catagory}></CatagotresCard>))
                        
                        : (<div className="flex items-center justify-center mx-aut"> <h2 className="text-4xl text-center">Data Not Found</h2></div>
                        )}
                </div>
            </div>
       
    );
};

export default Catagotres;