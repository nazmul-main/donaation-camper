import { useEffect, useState } from "react";
import Doneted from "./Doneted";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState('');
  const [seeAll, setSeeAll] = useState(4); // Initialize seeAll with 4

  useEffect(() => {
    const donationData = JSON.parse(localStorage.getItem("donation"));

    if (donationData) {
      setDonation(donationData);
    } else {
      setNoFound('No data found');
    }
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md-px-8 lg:px-12 my-3 md:my-10">
      {noFound ? (
        <p className="flex h-[70vh] justify-center items-center text-xl font-semibold">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="grid col-span-1 md:grid-cols-2 gap-4">
            {donation?.slice(0, seeAll).map((donated) => (
              <Doneted key={donated.id} donated={donated} />
            ))}
          </div>
          {seeAll === 4 && donation.length > 4 && (
            <div>
              <button
                onClick={() => setSeeAll(donation.length)}
                className="px-5 py-2 bg-green-600 text-white block mx-auto my-8 rounded-md font-semibold"
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
