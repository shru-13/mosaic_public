import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Part3Chart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Sports", "Arts", "Music", "Coding"],
    datasets: [
      {
        label: "Club Memberships",
        data: [0, 0, 0, 0], // Initial data
        backgroundColor: [
          "rgba(63, 173, 168, 0.5)",  // Light teal
          "rgba(63, 173, 168, 0.7)",  // Slightly darker teal
          "rgba(128, 128, 128, 0.5)", // Light gray
          "rgba(128, 128, 128, 0.7)"  // Slightly darker gray
        ],
        borderColor: "#021526",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportsResponse = await axios.get("http://localhost:8080/sports/count");
        const artsResponse = await axios.get("http://localhost:8080/arts/count");
        const musicResponse = await axios.get("http://localhost:8080/music/count");
        const codingResponse = await axios.get("http://localhost:8080/coding-club/count");

        const data = {
          labels: ["Sports", "Arts", "Music", "Coding"],
          datasets: [
            {
              label: "Club Memberships",
              data: [
                sportsResponse.data,
                artsResponse.data,
                musicResponse.data,
                codingResponse.data,
              ],
              backgroundColor: [
                "rgba(63, 173, 168, 0.5)",  // Light teal
                "rgba(63, 173, 168, 0.7)",  // Slightly darker teal
                "rgba(128, 128, 128, 0.5)", // Light gray
                "rgba(128, 128, 128, 0.7)"  // Slightly darker gray
              ],
              borderColor: "#021526",
              borderWidth: 2,
            },
          ],
        };

        setChartData(data);
      } catch (error) {
        console.error("Error fetching club members:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop:"200px", padding: "20px", backgroundColor: "#021526", borderRadius: "15px", width: '100%', height: '100%' }}>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000, // Animate chart data
            easing: 'easeOutBounce', // Animation easing function
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `Count: ${tooltipItem.raw}`;
                },
              },
            },
            legend: {
              labels: {
                color: "#E2E2B6",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Part3Chart;
