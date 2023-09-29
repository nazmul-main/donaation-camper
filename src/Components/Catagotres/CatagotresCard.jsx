/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CatagotresCard = ({ catagory }) => {
    const { id, picture, category, title, category_bg, card_bg, text_button_bg } = catagory;
    return (
         <div className=''>
            <Link to={`/catagory/${id}`}>
            <div style={{ backgroundColor: card_bg }} className="rounded-md">
                <div>
                    <img className="w-full object-cover" src={picture} alt="" />
                </div>
                <div className="py-3 px-4 space-y-2">
                <span style={{color: text_button_bg, backgroundColor: category_bg}} className="px-2 py-1 rounded-md">{category}</span>
                    <h3 style={{color:text_button_bg}} className="font-semibold">{title}</h3>
                </div>
            </div>
        </Link>
        </div>


    );
};

export default CatagotresCard;