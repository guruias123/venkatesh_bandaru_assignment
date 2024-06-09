import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ListData from "./WaitListData.json";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { CFormCheck, CTab, CTable } from '@coreui/react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReArrangeModal from "./Modals/ReArrangeModal";
import Status from "./common/Status";
import Filter from "./Modals/Filter";

const WaitListData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [list, setList] = useState(ListData);
  const [onOpenRearrangeModal, setOnOpenRearrangeModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [searchPayer, setSearchPayer] = useState('');

  const [byPeople, setByPeople] = useState(false);
  const [byScheduled, setByScheduled] = useState(false);
  const [byService, setByService] = useState(false);
  useEffect(() => {
    console.log("waitlist", list);
  }, []);

  const headings = [
    { field: "created_on", headerName: "Created On", 
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.5 5H10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    },
    { field: "payer", headerName: "Payer",
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    },
    { field: "status", headerName: "Status",
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_18317)">
    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1_18317">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    },
    { field: "email", headerName: "Email",
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    },
    { field: "phone", headerName: "Payer Phone",
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     },
    { field: "service", headerName: "Services",
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     },
    { field: "scheduled", headerName: "Scheduled", 
    icon: <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 1V3" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.5 5H10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     },
  ];

  const [columns, setColumns] = useState(headings);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onSearchPayer = (e) => {
    const payer = e.target.value;
    // console.log("payer",props.defaultData);
    setSearchPayer(payer);
    if(e.target.value !== ''){
        const filteredList = [];
        for (const item of ListData) {
        if (item.payer.toLowerCase().includes(payer.toLowerCase())) {
            filteredList.push(item);
            if (filteredList.length === 10) {
            break;
            }
        }
        }
        console.log("filteredList",filteredList)
        setList(filteredList);
    }else{
      setList(ListData);
    }
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const setListState = (data) => {
    console.log("state updated", data)
    setList(data);
  }

  const onCancelScheduled = () => {
    setByScheduled(false);
    if(list.length === ListData.length){
    }else{
      setList(ListData);
    }
  }

  const onCancelPeople = () => {
    setByPeople(false);
    if(list.length === ListData.length){
    }else{
      setList(ListData);
    }
  }

  const onCancelService = () => {
    setByService(false);
    if(list.length === ListData.length){
    }else{
      setList(ListData);
    }
  }

  return (
    <div className="bg-white rounded p-3 flex flex-col gap-4">
      <p className="font-bold text-[#334155] text-xl">Waitlist</p>
      <div className="flex flex-col gap-4">
        {/* three blanks */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-1.5 p-2 border rounded border-[#64748B] items-center w-1/3">
            <p className="text-[#334155] text-xs font-semibold">
              All Waitlists
            </p>
            <p className="text-[#64748B] text-[10px] font-medium">100</p>
          </div>
          <div className="flex flex-row gap-1.5 p-2 border rounded border-[#E2E8F0] items-center w-1/3">
            <p className="text-[#334155] text-xs font-semibold">Newly Added</p>
            <p className="text-[#64748B] text-[10px] font-medium">50</p>
          </div>
          <div className="flex flex-row gap-1.5 p-2 border rounded border-[#E2E8F0] items-center w-1/3">
            <p className="text-[#334155] text-xs font-semibold">Leads</p>
            <p className="text-[#64748B] text-[10px] font-medium">20</p>
          </div>
        </div>
        {/* filter and search extra */}
        <div className="flex flex-row justify-between items-center relative">
          <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#F1F5F9] rounded p-2 flex flex-row items-center gap-1.5 cursor-pointer" onClick={() => setFilterModal(!filterModal)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#334155] text-[14px]">Add Filter</p>
          </div>
          
          {/* selected filters */}
          {byScheduled ?
          <div className="flex flex-row justify-center gap-2 p-2 bg-[#F8FAFC] items-center">
            <p className="text-[#64748B] text-[14px] font-medium">By Scheduled Date</p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={onCancelScheduled}>
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#71717A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          : ''}
          {byPeople ?
          <div className="flex flex-row justify-center gap-2 p-2 bg-[#F8FAFC] items-center">
            <p className="text-[#64748B] text-[14px] font-medium">By People</p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={onCancelPeople}>
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#71717A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          : ''}
          {byService ?
          <div className="flex flex-row justify-center gap-2 p-2 bg-[#F8FAFC] items-center">
            <p className="text-[#64748B] text-[14px] font-medium">By Service</p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={onCancelService}>
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#71717A" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          : ''}
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="flex fles-row shadow-md rouded gap-2 items-center py-2 pl-3 pr-10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 10.5L8.34998 8.34998M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
                  stroke="#64748B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input placeholder="Search client" className="text-[14px]" onChange={(e) => onSearchPayer(e)} />
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1.33337V5.33337H6"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8.00003C13.9989 6.84224 13.6629 5.70948 13.0325 4.73839C12.4021 3.76729 11.5041 2.99934 10.447 2.52715C9.38987 2.05497 8.2187 1.89873 7.07476 2.07727C5.93082 2.2558 4.86297 2.7615 4 3.53336L2 5.33336"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14.6666V10.6666H10"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8C2.00105 9.15779 2.33707 10.2905 2.9675 11.2616C3.59794 12.2327 4.49588 13.0007 5.55301 13.4729C6.61013 13.9451 7.7813 14.1013 8.92524 13.9228C10.0692 13.7442 11.137 13.2385 12 12.4667L14 10.6667"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col gap-8 cursor-pointer" onClick={() => setOnOpenRearrangeModal(!onOpenRearrangeModal)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 2V14"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {onOpenRearrangeModal ?
        <ReArrangeModal data={columns} defaultData={headings} open={onOpenRearrangeModal} setOpen={setOnOpenRearrangeModal} setData={setColumns} />
           : ''}
           {filterModal ?
           <Filter defaultData={ListData} data={list} setData={setListState} setOpen={setFilterModal} open={filterModal} byScheduled={byScheduled} setByScheduled={setByScheduled}
           byPeople={byPeople} setByPeople={setByPeople} byService={byService} setByService={setByService} />
           : ''}
        </div>

        {/* table */}
        <div className="z-0">
        {/* w-[70vw] md:w-[80vw] lg:w-[80vw] */}
        <TableContainer component={Paper} className="overflow-x-scroll scrollbar-thin h-[65vh]">
          <Table
            aria-label="simple table"
            className="table table-hover table-outline mb-0 d-table"
            responsive
          >
            <TableHead className="thead-light bg-[#F8FAFC]">
              <TableRow>
                <TableCell>
                  <CFormCheck id="flexCheckDefault" />
                </TableCell>
                {columns.map((row) => (
                  <TableCell
                    key={row.field}
                    align="left"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex flex-row items-center gap-2">
                        {row.icon}
                      <span className="text-[16px] text-[#64748B] font-medium">{row.headerName}</span>
                    </div>
                  </TableCell>
                ))}
                {/* <TableCell align="center">Actions</TableCell> */}
                {/* <TableCell align="center">Download</TableCell> */}
              </TableRow>
            </TableHead>
            {list && list.length > 0 ?
            <TableBody>
              {(rowsPerPage > 0
                ? list && list.length > 0
                  ? list.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : list.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                : list && list.length > 0
                ? list
                : list
              ).map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <CFormCheck
                        id="flexCheckDefault"
                    
                      />
                    </TableCell>
                    {
                      columns[0].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[0].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[0].field]}</TableCell>
                    }
                    {
                      columns[1].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[1].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[1].field]}</TableCell>
                    }
                    {
                      columns[2].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[2].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[2].field]}</TableCell>
                    }
                    {
                      columns[3].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[3].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[3].field]}</TableCell>
                    }
                    {
                      columns[4].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[4].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[4].field]}</TableCell>
                    }
                    {
                      columns[5].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[5].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[5].field]}</TableCell>
                    }
                    {
                      columns[6].field === 'status' ? 
                      <TableCell align="left">
                        <Status data={row[columns[6].field]} />
                      </TableCell> :
                    <TableCell align="left" className="text-[12px] text-[#374151] font-medium">{row[columns[6].field]}</TableCell>
                    }
                    </TableRow>
                );
              })}
            </TableBody>
             :
             <TableBody>
              <TableRow>
                <TableCell colSpan={columns.length + 1}>
                  <div className="flex flex-row justify-center items-center">
                    <p>No data found</p>
                  </div>
                </TableCell>
              </TableRow>
             </TableBody>
             }
          </Table>

        </TableContainer>
          <Table>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={
                    list && list.length > 0
                      ? list.length
                      : list.length
                  }
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  labelRowsPerPage="Rows"
                  style={{ padding: "0px" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        
      </div>
    </div>
  );
};

export default WaitListData;
