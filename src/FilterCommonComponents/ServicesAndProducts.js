import React, { useState, useEffect } from "react";
// import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CFormSelect } from "@coreui/react";

const ServicesAndProducts = (props) => {
  const [isByName, setIsByName] = useState(false);
  const [searchPayer, setSearchPayer] = useState("");
  const [newList, setNewList] = useState([]);
  const [selectedPayers, setSelectedPayers] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const type_options = [
    { id: 1, label: "Show all service type" },
    { id: 2, label: "Class" },
    { id: 3, label: "Appointment" },
    { id: 4, label: "Facility" },
    { id: 5, label: "Class Pack" },
    { id: 6, label: "Membership" },
    { id: 7, label: "General Items" },
  ];

  const status_options = [
    { id: 1, label: "Show all" },
    { id: 2, label: "Public" },
    { id: 3, label: "Private" },
    { id: 4, label: "Disable" },
    { id: 5, label: "Draft" },
  ];
  useEffect(() => {
    // console.log("people list", props);
  }, []);

  const handleChange = (e) => {
    const payer = e.target.value;
    // console.log("payer",props.defaultData);
    setSearchPayer(payer);
    if (e.target.value !== "") {
      const filteredList = [];
      for (const item of props.defaultData) {
        // console.log(">>>>>>>>>",item, payer);
        if (item.name.toLowerCase().includes(payer.toLowerCase())) {
          filteredList.push({
            id: item.id,
            label: item.name,
            value: item.name,
            type: item.type,
            type_status: item.type_status,
          });
          if (filteredList.length === 10) {
            break;
          }
        }
      }
      console.log("filteredList", filteredList);
      setNewList(filteredList);
    } else {
      setNewList([]);
    }
  };

  const handleSelectedPayers = (event, item) => {
      if (event.target.checked) {
        const filteredList = [];
      setSelectedPayers([...selectedPayers, item]);
      console.log("selected by service name", filteredList)
      props.setData([...selectedPayers, item]);
      props.setByService(!props.byService);
    } else {
        setSelectedPayers(selectedPayers.filter((payer) => payer.id !== item.id));
        props.setData(selectedPayers.filter((payer) => payer.id !== item.id));
        props.setByService(!props.byService);
    }
  };

  const onSelectServiceType = (event) => {
    console.log("selected service type", event.target.value);
    const filteredList = [];
    for (const item of props.defaultData) {
    if (item.type === event.target.value) {
        filteredList.push(item);
    }
    }
    console.log("filterlist", filteredList)
    setNewList(filteredList);
    props.setData(filteredList);
    props.setByService(!props.byService);
    if(event.target.value === 'Show all'){
      props.setData(props.defaultData);
      props.setByService(!props.byService);
    }
  }

  const onSelecteServiceStatus = (event) => {
    console.log("selected service status", event.target.value);
    const filteredList = [];
    for (const item of props.defaultData) {
    if (item.type_status === event.target.value) {
        filteredList.push(item
          );
    }
    }
    setNewList(filteredList);
    props.setData(filteredList);
    props.setByService(!props.byService);
    if(event.target.value === 'Show all service type'){
      props.setData(props.defaultData);
      props.setByService(!props.byService);
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="flex flex-row justify-around"
      >
        <FormControlLabel
          value="female"
          control={
            <Radio checked={!isByName} onClick={() => {setIsByName(false); setNewList([])}} />
          }
          label="Search by name"
        />
        <FormControlLabel
          value="male"
          control={
            <Radio checked={isByName} onClick={() => {setIsByName(true); setNewList([])}} />
          }
          label="Search by tags"
        />
      </RadioGroup>

      {!isByName ? (
        <>
          <div className="border-[1px] border-[#E2E8F0] p-2 flex flex-row gap-1.5 items-center justify-between rounded-[6px] bg-[#F8FAFC]">
            <div className="flex flex-row gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#3F3F46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 14.0001L11.1 11.1001"
                  stroke="#9CA3AF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                placeholder="Search Payer or attendee name"
                className="bg-[#F8FAFC]"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => {
                setSearchPayer("");
                setNewList([]);
              }}
            >
              <g clip-path="url(#clip0_5_11013)">
                <path
                  d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                  stroke="#3F3F46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 6L6 10"
                  stroke="#3F3F46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L10 10"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_11013">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col p-2 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
            {newList.length > 0 ? (
              <p>
                Showing {newList.length} results matching "{searchPayer}"
              </p>
            ) : (
              ""
            )}
            {newList &&
              newList.length > 0 &&
              newList.map((item) => {
                return (
                  <div className="flex flex-row items-center gap-2 justify-between">
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={selectedPayer?.id}
                          checked={selectedPayers.some(
                            (payer) => payer.id === item.id
                          )}
                          // onChange={handleSelectedPayers}
                          onChange={(event) =>
                            handleSelectedPayers(event, item)
                          }
                        />
                      }
                      label={item.label}
                      className="flex flex-row"
                    />
                    <div className="flex flex-row gap-2 flex-end">
                      <div className="bg-[#F8FAFC] px-2 py-1 rounded">
                        <p className="text-[16px] font-medium text-[#475467]">
                          {item.type}
                        </p>
                      </div>
                      <div className="bg-[#F8FAFC] px-2 py-1 rounded">
                        <p
                          className={`${
                            item.type_status === "Public"
                              ? "text-[#039855]"
                              : "text-[#BF8000]"
                          } text-[16px] font-medium`}
                        >
                          {item.type_status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <p className="text-[#334155] text-[14px] font-medium">
              Service type
            </p>
            <CFormSelect
              size="lg"
              className="mb-3 border-[#E4E4E7] border-[1px] p-2 rounded text-[14px] font-normal flex flex-col gap-6"
              aria-label="Large select example"
              onChange={onSelectServiceType}
            >
              {type_options.map((item, index) => {
                return (
                  <option key={index} className="text-[14px] font-normal flex flex-col gap-6">
                    {item.label}
                  </option>
                );
              })}
            </CFormSelect>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#334155] text-[14px] font-medium">
              Status
            </p>
            <CFormSelect
              size="lg"
              className="mb-3 border-[#E4E4E7] border-[1px] p-2 rounded text-[14px] font-normal gap-6"
              aria-label="Large select example"
              onChange={onSelecteServiceStatus}
            >
              {status_options.map((item, index) => {
                return (
                  <option key={index} className="text-[14px] font-normal">
                    {item.label}
                  </option>
                );
              })}
            </CFormSelect>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesAndProducts;
