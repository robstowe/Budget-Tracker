import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function LeisureBars({leisures}) {
  console.log('leisure', leisures);

  const sortedLeisures = leisures.sort((a, b) => b.amount - a.amount);
  console.log('sortedLeisures', sortedLeisures);

  const sortedLeisuresNames = sortedLeisures.map((leisure) => leisure.leisure);
  console.log('sortedLeisuresNames', sortedLeisuresNames);

  const sortedLeisures2 = sortedLeisures.slice(0, 3);
  console.log('sortedLeisures2', sortedLeisures2);

  const sortedLeisuresNames2 = sortedLeisures2.slice(0, 3).map((leisure) => leisure.leisure);
  console.log('sortedLeisuresNames2', sortedLeisuresNames2);

  const sortedLeisuresByAmount = sortedLeisures2.map((leisure) => leisure.amount);
  console.log('sortedLeisuresByAmount', sortedLeisuresByAmount);

  const dataPoints = sortedLeisuresByAmount.map((amount) => [amount]);
  console.log('dataPoints', dataPoints);

  const dataPoints2 = sortedLeisuresNames2.map((name) => [name]);
  console.log('dataPoints2', dataPoints2);

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataPoints2}]}
      series={[{ data: dataPoints}]}
      width={500}
      height={300}
    />
  );
}