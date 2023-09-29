/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import swal from 'sweetalert';

const CatagoriesDetails = ({ catagory }) => {
    const { id, details_img, title, price, text_button_bg, description } = catagory;

    const handleDonation = () => {
        const addDonationItem = [];

        const donationItem = JSON.parse(localStorage.getItem('donation'));

        if (!donationItem) {
            addDonationItem.push(catagory)
            localStorage.setItem('donation', JSON.stringify(addDonationItem))
            swal("Thanks!", "Donated Successfully!", "success");
        }
        else {

            const isExits = donationItem.find(catagory => catagory.id === id)
            if (!isExits) {
                addDonationItem.push(...donationItem, catagory)
                localStorage.setItem('donation', JSON.stringify(addDonationItem))
                swal("Thanks!", "Donated Successfully!", "success");
            }
            else {
                swal("Error!", "Already Doneted!", "error");
            }



        }
    }


    return (
        <div className='max-w-screen-xl mx-auto px-4 md-px-8 lg:px-12 my-3 md:my-10 '>
            <div className='relative'>
                <div>
                    <img className='w-full lg:h-[70vh] object-cover ' src={details_img} alt="" />
                </div>
                <div className=''>
                    <p style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className='w-full absolute bottom-0 p-6'>
                        <button onClick={handleDonation} style={{ background: text_button_bg }} className='text-white p-3 font-semibold rounded-md'>Donate: {price}</button>
                    </p>
                </div>
            </div>

            <div className='py-10'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold my-4'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CatagoriesDetails;