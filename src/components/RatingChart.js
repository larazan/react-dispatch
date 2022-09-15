import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

import { UserData } from "../assets/data/users";

const RatingChart = ({chartData}) => {
    
  return (
    <Bar data={chartData} />
  )
}

export default RatingChart