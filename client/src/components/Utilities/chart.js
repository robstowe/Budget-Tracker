import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function UtilBars({ utilities}) {
  console.log('utilities', utilities);

  const sortedUtilities = utilities.sort((a, b) => b.amount - a.amount);
  console.log('sortedUtilities', sortedUtilities);

  const sortedUtilitiesNames = sortedUtilities.map((utility) => utility.utility);
  console.log('sortedUtilitiesNames', sortedUtilitiesNames);

  const sortedUtilities2 = sortedUtilities.slice(0, 3);
  console.log('sortedUtilities2', sortedUtilities2);

  const sortedUtilitiesNames2 = sortedUtilities2.slice(0, 3).map((utility) => utility.utility);
  console.log('sortedUtilitiesNames2', sortedUtilitiesNames2);

  const sortedUtilitiesByAmount = sortedUtilities2.map((utility) => utility.amount);
  console.log('sortedUtilitiesByAmount', sortedUtilitiesByAmount);

  const dataPoints = sortedUtilitiesByAmount.map((amount) => [amount]);
  console.log('dataPoints', dataPoints);

  const dataPoints2 = sortedUtilitiesNames2.map((name) => [name]);
  console.log('dataPoints2', dataPoints2);
  
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataPoints2 }]}
      series={[{ data: dataPoints }]}
      width={500}
      height={300}
    />
  );
}