
import './App.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Verticalchart from './Verticalchart';




function App() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['tours schdeule', 'tour'],
    datasets: [
      {
        label: 'count',
        data: [244, 655],
        backgroundColor: [
          'rgba(227, 38, 228, 0.8)',
          'rgba(6, 34, 249, 0.8)',
        ]
      }
    ]
  }



  return (
    <>

      <div className='w-screen h-screen  flex justify-center items-center  '   >


        <div className='w-2xl h-120 flex justify-center p-10   '  >
          <Doughnut data={data} />
          <Verticalchart/>
          
          
        </div>
      </div>




    </>

  )
}

export default App
