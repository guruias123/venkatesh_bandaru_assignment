import React, {useState, useEffect, useRef} from 'react';
import { CFormCheck, CTab, CTable } from '@coreui/react';

const ReArrangeModal = (props) => {

  const [list, setList] = useState(props.data);
  useEffect(() => {
    console.log("rearrange modal props", props);
  }, [])

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('draggedItemIndex', index);
    e.target.classList.add('opacity-50');
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('opacity-50');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const draggedItemIndex = e.dataTransfer.getData('draggedItemIndex');
    const updatedList = [...list];
    const [draggedItem] = updatedList.splice(draggedItemIndex, 1);
    updatedList.splice(index, 0, draggedItem);
    setList(updatedList);
    // props.setData(updatedList);
  };

  const resetToDefault = () => {
    props.setData(props.defaultData);
    props.setOpen(!props.open)
  }

  const handleApply = () => {
    props.setData(list);
    props.setOpen(!props.open);
  }
  
  return (
        <div className='absolute top-full right-0 bottom-0 z-10 bg-white p-4 rouded shadow-md flex flex-col gap-4 h-[60vh] border-[#E2E8F0]'>
          <p className='text-[16px] font-medium'>Edit Columns</p>
          <p className='text-[#334155] font-normal'>Select the columns to rearrange</p>
          {/* columns */}
          <div className='flex flex-col gap-3'>
            {list.map((column, index) => {
              return(
                <div key={index} 
                // className='flex flex-row gap-2'
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                // py-2 px-4 border rounded mb-2 bg-white
                className="cursor-move flex flex-row gap-2"
                >
                {/* <CFormCheck id="flexCheckDefault" checked /> */}
                {/* <input type='checkbox' className='bg-[#000000]' checked /> */}
                <input type="checkbox" id="customCheckbox" className="bg-white border-gray-300 rounded focus:ring-0 custom-checkbox" defaultChecked />
                <div className='py-1 border-[1px] border-[#E2E8F0] w-48 rounded pl-2 text-[#334155] text-[14px] font-medium'>
                  {column.headerName}
                </div>
                </div>
              )
            })}
          </div>
                <div className='flex flex-row justify-between'>
                  <button className='border-[1px] border-[#E2E8F0] text-[#0F172A] px-[14.5px] py-[1.5px] rounded' onClick={resetToDefault}>Reset to Default</button>
                  <button className='border-[1px] border-[#E2E8F0] text-[#ffffff] bg-[#0F172A] px-[14.5px] py-[1.5px] rounded' onClick={handleApply}>Apply</button>
                </div>
        </div>
  )
}

export default ReArrangeModal