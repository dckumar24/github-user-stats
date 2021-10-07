import React from 'react';
import {Pie} from 'react-chartjs-2';
import './styles/LangData.css';

const LangData=({langData})=>{

    const langLabel=langData.map((data)=>{

        return data.label;
    });
    const langValue=langData.map((data)=>{

        return data.value;
    });

    const langColor=langData.map((data)=>{

        return data.color;
    });


const  data={
    labels:[...langLabel],
    datasets:[
        {
            label:'No of languages',
            data:[...langValue],
            backgroundColor:[...langColor],
            borderColor:'light-red',
            borderWidth:1
        },
        
    ],
};
const options={
    legend: {
      display: false,
    }
};
// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };


    // useEffect(()=>{
    //     langLabel();
    // },[langData]);

    return (
        <div className="lang-container">
            {langData.length===0 && <h3>No Language data to show.</h3>}
           {/* {console.log(data)} */}
            {langData.length!==0 &&<Pie data={data} options={options}></Pie>}
           
           
           
           
           
           
           
           
            {/* {langLabel.map((label,index)=>{
                return <h1 key={index}>{label}</h1>
            })}
            <h1>asdfasdf</h1>
            {langValue.map((value,index)=>{
                return <h1 key={index}>{value}</h1>
            })}
            <h1>asdfasdfasdfasdf</h1>
            {langColor.map((color,index)=>{
                return <h1 key={index}>{color}</h1>
            })} */}
        </div>
    );

}

export default LangData;

