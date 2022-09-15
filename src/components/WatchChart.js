import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

import { UserData } from "../assets/data/users";

const WatchChart = ({chartData}) => {
      
  return (
    <Doughnut data={chartData} />
  )
}

export default WatchChart