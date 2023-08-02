import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function SubBars({ subscriptions }) {
  console.log('subscriptions', subscriptions);
  
  const sortedSubs = subscriptions.sort((a, b) => b.amount - a.amount);
  console.log('sortedSubs', sortedSubs);

  const sortedSubsNames = sortedSubs.map((sub) => sub.subscription);
  console.log('sortedSubsNames', sortedSubsNames);

  const sortedSubs2 = sortedSubs.slice(0, 3);
  console.log('sortedSubs2', sortedSubs2);

  const sortedSubsNames2 = sortedSubs2.slice(0, 3).map((sub) => sub.subscription);
  console.log('sortedSubsNames2', sortedSubsNames2);

  const sortedSubsByAmount = sortedSubs2.map((sub) => sub.amount);
  console.log('sortedSubsByAmount', sortedSubsByAmount);

  const dataPoints = sortedSubsByAmount.map((amount) => [amount]);
  console.log('dataPoints', dataPoints);

  const dataPoints2 = sortedSubsNames2.map((name) => [name]);
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