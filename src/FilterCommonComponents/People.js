import { Checkbox, FormControlLabel } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Select from "react-select";

const People = (props) => {
    const [searchPayer, setSearchPayer] = useState('');
    const [newList, setNewList] = useState([]);
    const [selectedPayers, setSelectedPayers] = useState([]);
    useEffect(() => {
        // console.log("people list", props);
    }, [])

    const handleChange = (e) => {
        const payer = e.target.value;
        // console.log("payer",props.defaultData);
        setSearchPayer(payer);
        if(e.target.value !== ''){
            const filteredList = [];
            for (const item of props.defaultData) {
            if (item.payer.toLowerCase().includes(payer.toLowerCase())) {
                filteredList.push({id: item.id, label: item.payer, value: item.payer});
                if (filteredList.length === 10) {
                break;
                }
            }
            }
            console.log("filteredList",filteredList)
            setNewList(filteredList);
        }else{
            setNewList([]);
        }
    }

    const handleSelectedPayers = (event, item) => {
        if (event.target.checked) {
          setSelectedPayers([...selectedPayers, item]);
          console.log("people", item);
          props.setData([...selectedPayers, item]);
          props.setByPeople(!props.byPeople);
        } else {
          setSelectedPayers(selectedPayers.filter(payer => payer.id !== item.id));
          props.setData(selectedPayers.filter((payer) => payer.id !== item.id));
          props.setByPeople(!props.byPeople);
        }
      };
    
  return (
    <div className='flex flex-col gap-3'>
        <div className='border-[1px] border-[#E2E8F0] p-2 flex flex-row gap-1.5 items-center rounded-[6px] bg-[#F8FAFC]'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 14.0001L11.1 11.1001" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input placeholder='Search Payer or attendee name' className='bg-[#F8FAFC]' onChange={(e) => handleChange(e) } />
        </div>
        <div className='flex flex-col p-2 h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300'>
            
            {newList.length > 0 ?
            <p>Showing {newList.length} results matching "{searchPayer}"</p>
             : ''}
            {newList && newList.length > 0 && newList.map((item) => {
                return(
                    <FormControlLabel
                        control={
                        <Checkbox 
                        // checked={selectedPayer?.id} 
                        checked={selectedPayers.some(payer => payer.id === item.id)}
                        // onChange={handleSelectedPayers} 
                        onChange={(event) => handleSelectedPayers(event, item)}
                        />
                        }
                        label={item.label}
                        className='flex flex-row'
                    />
                )
            })}
        </div>
    </div>
  )
}

export default People