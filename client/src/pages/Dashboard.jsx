import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets';
import { Sparkles } from 'lucide-react';

const Dashboard = () => {

  const [creations, setCreations] = useState([]);

  const getDashboardData = async()=>{
    setCreations(dummyCreationData);
  }

  useEffect(()=>{
    getDashboardData();
  },[])


  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/* Total Creation Card */}
          <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
            <div>
              <p>Total Creation</p>
              <h2>{creations.length}</h2>
            </div>
            <div>
              <Sparkles className='w-5 text-white'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard