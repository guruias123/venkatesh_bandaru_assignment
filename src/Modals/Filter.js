import React, {useState, useEffect} from 'react';
import ScheduledDate from '../FilterCommonComponents/ScheduledDate';
import People from '../FilterCommonComponents/People';
import ServicesAndProducts from '../FilterCommonComponents/ServicesAndProducts';

const Filter = (props) => {
  const [isSelectedScheduled, setIsSelectedScheduled] = useState(true);
  const [isSelectedPeople, setIsSelectedPeople] = useState(false);
  const [isSelectedService, setIsSelectedService] = useState(false);
  const [newList, setNewList] = useState(props.defaultData);

  useEffect(() => {
    console.log("data", newList)
  }, [])
  

  const onSelectSchedule = () => {
    setIsSelectedScheduled(true);
    setIsSelectedPeople(false);
    setIsSelectedService(false);
  }

  const onSelectPeople = () => {
    setIsSelectedScheduled(false);
    setIsSelectedPeople(true);
    setIsSelectedService(false);
  }

  const onSelectService = () => {
    setIsSelectedScheduled(false);
    setIsSelectedPeople(false);
    setIsSelectedService(true);
  }

  const applyFilter = () => {
    // props.setData(newList);
    props.setOpen(!props.open);
    // props.setData(newList);
    let filteredList = [];
    for (const item of props.defaultData) {
      for (const list of newList) {
        if (item.id === list.id) {
          filteredList.push(item);
        }
      }
      console.log("applied filter", newList, filteredList)
      props.setData(filteredList)
  }
  }

  const  resetFilter = () => {
    props.setData(props.defaultData);
    props.setOpen(!props.open);
  }

  const setNewState = (data) => {
    console.log("filter component", data)
    setNewList(data)
  }
  
  return (
    <div className='absolute top-full left-0 bottom-0 z-10 bg-white rouded shadow-md flex flex-col gap-4 border-[#E2E8F0] bg-white h-[70vh]'>
      <div className='flex flex-row h-[550px] border-b-2 border-[#E2E8F0]'>
        {/* left container */}
        <div className='bg-[#F8FAFC] p-2 flex flex-col gap-2 '>
          <div className={`${isSelectedScheduled ? 'bg-[#E2E8F0]' : ''} flex flex-row justify-between items-center p-2 gap-5 rounded cursor-pointer`} onClick={onSelectSchedule}>
            <div className='flex flex-row justify-center items-center gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6666 1.33325V3.99992" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33337 1.33325V3.99992" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.66675H14" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-[#334155] text-[14] font-medium'>Scheduled Date</p>
            </div>
            <p>1</p>
          </div>

          <div className={`${isSelectedPeople ? 'bg-[#E2E8F0]' : ''} flex flex-row justify-between items-center p-2 gap-5 rounded cursor-pointer`} onClick={onSelectPeople}>
            <div className='flex flex-row justify-center items-center gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3858 11.2811 9.88566 10.781C9.38556 10.281 8.70728 10 8.00004 10H4.00004C3.2928 10 2.61452 10.281 2.11442 10.781C1.61433 11.2811 1.33337 11.9594 1.33337 12.6667V14" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6666 14V12.6667C14.6662 12.0758 14.4695 11.5019 14.1075 11.0349C13.7455 10.5679 13.2387 10.2344 12.6666 10.0867" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-[#334155] text-[14] font-medium'>People</p>
            </div>
          </div>

          <div className={`${isSelectedService ? 'bg-[#E2E8F0]' : ''} flex flex-row justify-between items-center p-2 gap-5 rounded cursor-pointer`} onClick={onSelectService}>
            <div className='flex flex-row justify-center items-center gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 2H2V8H6.66667V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2H9.33337V5.33333H14V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 8H9.33337V14H14V8Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-[#334155] text-[14] font-medium'>Services / Products</p>
            </div>
          </div>
        </div>
        {/* right container */}
        <div className='bg-[#ffffff] p-4 w-[480px]'>
          {isSelectedScheduled && <ScheduledDate defaultData={newList} data={props.data} setData={setNewState} byScheduled={props.byScheduled} setByScheduled={props.setByScheduled} />}
          {isSelectedPeople && <People defaultData={newList} data={props.data} setData={setNewState} byPeople={props.byPeople} setByPeople={props.setByPeople} />}
          {isSelectedService && <ServicesAndProducts defaultData={newList} data={props.data} setData={setNewState} byService={props.byService} setByService={props.setByService} />}
        </div>
      </div>
        {/* buttom container */}
        <div className='flex flex-row justify-between self-end gap-4 pb-4 pr-2'>
                  <button className='border-[1px] border-[#E2E8F0] text-[#0F172A] px-[14.5px] py-[6px] rounded font-medium' onClick={resetFilter}>Reset to Default</button>
                  <button className='border-[1px] border-[#E2E8F0] text-[#ffffff] bg-[#0F172A] px-[14.5px] py-[6px] rounded font-medium' onClick={applyFilter}>Apply</button>
        </div>
    </div>
  )
}

export default Filter