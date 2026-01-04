
import { Link } from "react-router-dom";
import Ernakulam from "../visit/Ernakulam";
import Kasaragod from "../visit/Kasaragod";
import Thiruvananthapuram from "../visit/Thiruvananthapuram";


const Doctor = () => {
  return (

    <>
      <div className='2xl-container mx-auto '>
        <div className='  w-[95%]  backdrop:md:w-[90%] mx-auto mt-8'>
          <h1 className=' text-2xl font-[Roboto]'> Place of Visiting Doctor </h1>

          <div className='mt-6'>
            <div className=' flex justify-around p-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 mb-3 '>
             <Link to = "/Ernakulam" >
              <h1 className='w-fit  bg-white shadow-xl rounded-lg p-1 '>Ernakulam</h1>
              </Link>

               <Link to = "/Kasaragod " >
              <h1 className=' w-fit bg-white shadow-xl rounded-lg p-1'>Kasaragod</h1></Link>
              
              
              
               <Link to = "/Thiruvananthapuram " >
              <h1 className=' w-fit bg-white shadow-xl rounded-lg p-1'>Thiruvananthapuram</h1></Link>


              <h1 className='  w-fit   bg-white shadow-xl rounded-lg p-1'>Soon Coming next City </h1>


            </div>

          </div>
        </div>
      </div>


    </>
  )
}
export default Doctor;