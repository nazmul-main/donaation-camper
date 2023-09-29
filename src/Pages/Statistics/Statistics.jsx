import { useEffect, useState } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const Statistics = () => {
  const [totalDonatedData, SettotalDonatedData] = useState([]);

  useEffect(() => {
    const totalDonatedData = JSON.parse(localStorage.getItem("donation")) || [];
    SettotalDonatedData(totalDonatedData);
  }, []);

  const totalCatagory = 12;
  const data1 = totalCatagory - totalDonatedData.length;
  const data2 = totalDonatedData.length;

  const data = [
    { label: "Is left", value: data1, color: "#FF444A" },
    { label: "Doneted", value: data2, color: "#00C49F" },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = (params.value / TOTAL) * 100;
    return `${percent.toFixed(0)}%`;
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <div>
          <PieChart
            series={[
              {
                outerRadius: 80,
                data,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontSize: 18,
              },
            }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
