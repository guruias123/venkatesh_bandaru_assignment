import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Status = (props) => {
    // console.log("staus>>>>>",props)
  return (
    <div>
        {
            props.data === "Lead" ?
            <div className="flex flex-row gap-2 items-center bg-[#EFF6FF] rounded-2xl py-2 px-4">
                <FiberManualRecordIcon sx={{fontSize: 15}} className="text-[#3B82F6]" />
                <p className="text-[#3B82F6] text-[12px] font-medium">{props.data}</p>
            </div>
             : props.data === "Active" ?
             <div className="flex flex-row gap-2 items-center bg-[#F0FDF9] rounded-2xl py-2 px-4">
                <FiberManualRecordIcon sx={{fontSize: 15}} className="text-[#15803D]" />
                 <p className="text-[#15803D] text-[12px] font-medium">{props.data}</p>
                 
             </div>
             : 
             <div className="flex flex-row gap-2 items-center bg-[#F1F5F9] rounded-2xl py-2 px-4">
                <FiberManualRecordIcon sx={{fontSize: 15}} className="text-[#334155]" />
                 <p className="text-[#334155] text-[12px] font-medium">{props.data}</p>
                 
             </div>
        }
    </div>
  )
}

export default Status