import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {

//     const [sdata,setSdata]=useState([])
//     const a=[];

// for(let i=0;i<transactions.length;i++){
//     a.push({
//         if(i=0){
//             name:transactions[i].month
//     },data:transactions[i].amount})
// }
// setSdata(a);
  return (
    <React.Fragment>

        <Chart
        type='line'
        width={400}
        height={400}

        series={[
            {
            name:"January",
            data:[5485,8645,856,1368,9945]
            },
            {
            name:"February",
            data:[4165,8995,8556,3669,8645]
            },
            {
            name:"March",
            data:[5255,8565,5566,8963,6414]
            },
    ]}
        options={{
            title:{text:"Expenses from January"}
        }}
        />
    </React.Fragment>
  )
}

export default LineChart