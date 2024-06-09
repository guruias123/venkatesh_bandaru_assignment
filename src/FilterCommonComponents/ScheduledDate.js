import { CFormSelect, CCalendar } from "@coreui/react";
import React, {useState, useEffect} from "react";
import { Calendar } from "primereact/calendar";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { format } from "date-fns";

const ScheduledDate = (props) => {
  const options = [
    { id: 1, label: "All" },
    { id: 2, label: "Custom" },
    { id: 3, label: "Last 30 days" },
    { id: 4, label: "This month" },
    { id: 5, label: "Last month" },
    { id: 6, label: "This quarter" },
    { id: 7, label: "2 quarter ago" },
    { id: 8, label: "This year" },
    { id: 9, label: "Last year" },
  ];

  const [isFrom, setIsFrom] = useState(false);
  const [isTo, setIsTo] = useState(false);
  const [date, setDate] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [selectedDateType, setSelectedDateType] = useState();
//   const [first, setfirst] = useState(second)

  const onSelectedDateType = (event) => {
    console.log("event", event.target.value === 2);
    setSelectedDateType(event.target.value);
    console.log("date", props.defaultData[0].created_on, format(new Date(props.defaultData[0].created_on), 'dd-MM-yyyy'))
    let data = props.defaultData;
    const now = new Date();
  switch (Number(event.target.value)) {
    case 1:
      props.setData(data);
      props.setByScheduled(!props.byScheduled);
      return data;
    // case 2:
    //   return data; // Custom logic here
    case 3:
      const last30Days = new Date(now.setDate(now.getDate() - 30));
      console.log("after return", data.filter(item => new Date(item.created_on) >= last30Days))
      props.setData(data.filter(item => new Date(item.created_on) >= last30Days));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= last30Days);
    case 4:
      const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfThisMonth));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfThisMonth);
    case 5:
      const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfLastMonth && new Date(item.created_on) <= endOfLastMonth));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfLastMonth && new Date(item.created_on) <= endOfLastMonth);
    case 6:
      const startOfThisQuarter = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfThisQuarter));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfThisQuarter);
    case 7:
      const startOfTwoQuartersAgo = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3 - 6, 1);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfTwoQuartersAgo));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfTwoQuartersAgo);
    case 8:
      const startOfThisYear = new Date(now.getFullYear(), 0, 1);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfThisYear));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfThisYear);
    case 9:
      const startOfLastYear = new Date(now.getFullYear() - 1, 0, 1);
      const endOfLastYear = new Date(now.getFullYear() - 1, 11, 31);
      props.setData(data.filter(item => new Date(item.created_on) >= startOfLastYear && new Date(item.created_on) <= endOfLastYear));
      props.setByScheduled(!props.byScheduled);
      return data.filter(item => new Date(item.created_on) >= startOfLastYear && new Date(item.created_on) <= endOfLastYear);
    default:
      return data;
  }
  
  }

  const onSelectionEndDate = (event) => {
    let data = props.defaultData;
    setToDate(dayjs(event).format("DD/MM/YYYY")); 
    console.log("to date event", dayjs(event).format("DD/MM/YYYY"));
        const from = new Date(fromDate);
        const to = new Date(dayjs(event).format("DD/MM/YYYY"));
        props.setData(data.filter(item => new Date(item.created_on) >= from && new Date(item.created_on) <= to));
        props.setByScheduled(!props.byScheduled);
        return data.filter(item => new Date(item.created_on) >= from && new Date(item.created_on) <= to);
  }


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="text-[#334155] text-[14px] font-medium">
          Show orders for
        </p>
        <CFormSelect size="lg" className="mb-3 border-[#E4E4E7] border-[1px] p-2 rounded text-[14px] font-normal gap-6" aria-label="Large select example"
        onChange={onSelectedDateType}>
            {options.map((item, index) => {
                return(
                    <option key={index} value={item.id} className="text-[14px] font-normal">{item.label}</option>
                )
            })}
            </CFormSelect>
      </div>
      {Number(selectedDateType) === 2 ?
      <div className="flex flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
            <p className="text-[12px] font-medium #334155">From</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(event) => {setFromDate(dayjs(event).format("DD/MM/YYYY")); console.log("from date event", dayjs(event).format("DD/MM/YYYY"))}} />
            </LocalizationProvider>
            {/* </div> */}
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-[12px] font-medium #334155">To</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(event) => {onSelectionEndDate(event)}} />
            </LocalizationProvider>
        </div>
      </div>
       : ''}
    </div>
  );
};

export default ScheduledDate;
