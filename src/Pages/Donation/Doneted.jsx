/* eslint-disable react/prop-types */

const Doneted = ({ donated }) => {
    const { details_img, title, price, text_button_bg, card_bg, category, category_bg } = donated;
    return (
      <div style={{ backgroundColor: card_bg }} className="flex gap-5 items-center rounded-md">
        <div className="w-1/3">
          <img className="h-auto object-cover" src={details_img} alt="" style={{ height: '200px' }} />
        </div>
        <div className="space-y-2">
          <span style={{ color: text_button_bg, backgroundColor: category_bg }} className="px-2 py-1 rounded-md">{category}</span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p style={{ color: text_button_bg }} className="font-bold">{price}</p>
          <button style={{ backgroundColor: text_button_bg }} className="px-2 py-1 rounded-md text-white font-semibold">View Details</button>
        </div>
      </div>
    );
  };
  
  export default Doneted;
  