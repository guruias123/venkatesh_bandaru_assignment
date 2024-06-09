import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../src/assets/images/logo.png";
import admin from "../src/assets/images/admin.png"
import WaitListData from "./WaitListData";

function MainDrawer() {
  const { collapseSidebar, toggled, toggleSidebar } = useProSidebar();

  return (
    <div id="app" 
    // style={({ height: "100vh" }, { display: "flex" })}
     className="flex h-screen bg-[#F8FAFC]">
      <Sidebar 
      className="h-screen bg-[#F8FAFC]"
      // style={{ height: "100vh", backgroundColor: "#F8FAFC" }}
      >
        {/* # AECFF0 */}
        <Menu 
        className="bg-[#F8FAFC] h-screen relative"
        >
          <MenuItem
            // icon={<MenuOutlinedIcon />}
            onClick={() => {
              toggleSidebar();
              collapseSidebar();
              // console.log(collapseSidebar())
            }}
            style={{ textAlign: "center" }}
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <img src={logo} style={{ width: "30px" }} />
                <p className="font-bold text-black">Front·Desk</p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                  stroke="#64748B"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2V14"
                  stroke="#64748B"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="8" y="2" width="6" height="12" rx="1" fill="#64748B" />
              </svg>
            </div>
          </MenuItem>

          {toggled ? (
            <MenuItem
              className="my-7 mt-[50px]"
              icon={
                <>
                  {toggled ? (
                    <div className="flex flex-col justify-center items-center">
                      <div className="py-5 px-2 rounded shadow-sm flex flex-col bg-white items-center justify-center block z-10">
                        <svg
                          width="28"
                          height="16"
                          viewBox="0 0 30 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3333 7.33333L20 4.66667L17.3333 2"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 4.66663H12"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.6667 14L8 11.3333L10.6667 8.66663"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 11.3334H8"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div >
                      <MenuItem
                        icon={ 
                          <div className="items-center bg-[#F1F5F9] rounded pt-8 pb-2 px-2.5 ml-2 z-0">
                            <svg
                              width="17"
                              height="13"
                              viewBox="0 0 17 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_19_6790)">
                                <path
                                  d="M8.5 11.9167C11.4915 11.9167 13.9167 9.49158 13.9167 6.50004C13.9167 3.5085 11.4915 1.08337 8.5 1.08337C5.50845 1.08337 3.08333 3.5085 3.08333 6.50004C3.08333 9.49158 5.50845 11.9167 8.5 11.9167Z"
                                  stroke="#64748B"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3.08333 6.5H13.9167"
                                  stroke="#64748B"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M8.49999 1.08337C9.85486 2.56665 10.6248 4.49156 10.6667 6.50004C10.6248 8.50852 9.85486 10.4334 8.49999 11.9167C7.14513 10.4334 6.37517 8.50852 6.33333 6.50004C6.37517 4.49156 7.14513 2.56665 8.49999 1.08337Z"
                                  stroke="#64748B"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_19_6790">
                                  <rect
                                    width="13"
                                    height="13"
                                    fill="white"
                                    transform="translate(2)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        }
                      ></MenuItem>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden">
                      <p className="hidden"></p>
                    </div>
                  )}
                </>
              }
            ></MenuItem>
          ) : (
            <MenuItem className="my-7 mt-[50px]">
              <div 
              // className="p-2 w-full"
              >
                {!toggled ? (
                  <div className="flex flex-col">
                    {/* p-2 rounded shadow-sm flex flex-row justify-between items-center bg-white p-2 w-full */}
                    <div className="p-2 rounded shadow-sm flex flex-row bg-white items-center justify-between block z-10">
                    <p className="text-[#334155] font-medium">Location Name</p>
                    <svg
                      width="28"
                      height="16"
                      viewBox="0 0 28 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3333 7.33333L20 4.66667L17.3333 2"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 4.66663H12"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6667 14L8 11.3333L10.6667 8.66663"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11.3334H8"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    </div>
                <MenuItem
                style={{background: '#F1F5F9'}}
                className="px-2 rounded"
                  // icon={
                  //   <>
                  //     <svg
                  //       width="17"
                  //       height="13"
                  //       viewBox="0 0 17 13"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //     >
                  //       <g clip-path="url(#clip0_19_6790)">
                  //         <path
                  //           d="M8.5 11.9167C11.4915 11.9167 13.9167 9.49158 13.9167 6.50004C13.9167 3.5085 11.4915 1.08337 8.5 1.08337C5.50845 1.08337 3.08333 3.5085 3.08333 6.50004C3.08333 9.49158 5.50845 11.9167 8.5 11.9167Z"
                  //           stroke="#64748B"
                  //           stroke-linecap="round"
                  //           stroke-linejoin="round"
                  //         />
                  //         <path
                  //           d="M3.08333 6.5H13.9167"
                  //           stroke="#64748B"
                  //           stroke-linecap="round"
                  //           stroke-linejoin="round"
                  //         />
                  //         <path
                  //           d="M8.49999 1.08337C9.85486 2.56665 10.6248 4.49156 10.6667 6.50004C10.6248 8.50852 9.85486 10.4334 8.49999 11.9167C7.14513 10.4334 6.37517 8.50852 6.33333 6.50004C6.37517 4.49156 7.14513 2.56665 8.49999 1.08337Z"
                  //           stroke="#64748B"
                  //           stroke-linecap="round"
                  //           stroke-linejoin="round"
                  //         />
                  //       </g>
                  //       <defs>
                  //         <clipPath id="clip0_19_6790">
                  //           <rect
                  //             width="13"
                  //             height="13"
                  //             fill="white"
                  //             transform="translate(2)"
                  //           />
                  //         </clipPath>
                  //       </defs>
                  //     </svg>
                  //   </>
                  // }
                >
                  <div className="flex flex-col">
                    <p className="text-[#334155] font-bold">
                      08:30 AM <span className="font-medium">Tue 20 Jan</span>
                    </p>
                    <div className="flex flex-row" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                      <div className="flex flex-row items-center">
                    <svg
                        width="17"
                        height="13"
                        viewBox="0 0 17 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_19_6790)">
                          <path
                            d="M8.5 11.9167C11.4915 11.9167 13.9167 9.49158 13.9167 6.50004C13.9167 3.5085 11.4915 1.08337 8.5 1.08337C5.50845 1.08337 3.08333 3.5085 3.08333 6.50004C3.08333 9.49158 5.50845 11.9167 8.5 11.9167Z"
                            stroke="#64748B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.08333 6.5H13.9167"
                            stroke="#64748B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.49999 1.08337C9.85486 2.56665 10.6248 4.49156 10.6667 6.50004C10.6248 8.50852 9.85486 10.4334 8.49999 11.9167C7.14513 10.4334 6.37517 8.50852 6.33333 6.50004C6.37517 4.49156 7.14513 2.56665 8.49999 1.08337Z"
                            stroke="#64748B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_19_6790">
                            <rect
                              width="13"
                              height="13"
                              fill="white"
                              transform="translate(2)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="font-medium text-[#334155]">UTC: +5 hours</p>
                      </div>
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 6L8.5 10L12.5 6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                    </div>
                  </div>
                </MenuItem>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* <SubMenu> */}
              {/* </SubMenu> */}
            </MenuItem>
          )}

          <MenuItem
            icon={
              // <HomeOutlinedIcon />
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            className="text-[#334155] text-[14px] font-medium mt-[50px]"
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={
              // <PeopleOutlinedIcon />
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_12388)">
                  <path
                    d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_12388">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            className="text-[#334155] text-[14px] font-medium"
          >
            Subscriptions
          </MenuItem>
          <MenuItem
            icon={
              // <ContactsOutlinedIcon />
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6666 1.33337V4.00004"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33337 1.33337V4.00004"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 6.66663H14"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33337 9.33337H5.34004"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9.33337H8.00667"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6666 9.33337H10.6733"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33337 12H5.34004"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H8.00667"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6666 12H10.6733"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            className="text-[#334155] text-[14px] font-medium"
          >
            Calendar
          </MenuItem>
          <MenuItem
          active={true}
          className="bg-[#ffffff] rounded items-center justify-center text-[#334155] text-[14px] font-medium shadow-md"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            Waitlist
          </MenuItem>

          <div className={`absolute bottom-0 left-0 w-full p-4 flex flex-col gap-3 ${toggled ? 'items-center' : ''} `}>
            {toggled ?
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 2H14V6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66663 9.33333L14 2" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            : 
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="flex flex-row items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 2H2V8H6.66667V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2H9.33337V5.33333H14V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 8H9.33337V14H14V8Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-[#334155] text-[14px] font-medium">Dashboard</p>
              </div>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 2H14V6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66663 9.33333L14 2" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>
            }

            {toggled ?
            <div className="bg-white shadow-md p-2">
              <img src={admin} height={34} width={34} className="rounded-full" />
            </div>
            : 
            <div className="flex flex-row items-center justify-between gap-2 bg-white shadow-md p-2 rounded">
              <div className="flex flex-row items-center gap-2">
            <img src={admin} height={34} width={34} className="rounded-full" />
            <div className="flex flex-col justify-center flex-start gap-1">
              <p className="text-[#0F172A] text-[12px] font-medium">Admin name</p>
              <p className="text-[#64748B] text-[12px] font-normal">adminname@gmail.com</p>
            </div>
              </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            </div>
            }

            {toggled ?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_12438)">
            <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.05994 6.00014C6.21667 5.55458 6.52604 5.17887 6.93324 4.93956C7.34044 4.70024 7.8192 4.61276 8.28472 4.69261C8.75024 4.77246 9.17248 5.01449 9.47665 5.37582C9.78083 5.73716 9.94731 6.19448 9.9466 6.6668C9.9466 8.00014 7.9466 8.6668 7.9466 8.6668" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11.3333H8.00667" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_12438">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
             : 
            <div className="flex flex-row gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_12438)">
            <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.05994 6.00014C6.21667 5.55458 6.52604 5.17887 6.93324 4.93956C7.34044 4.70024 7.8192 4.61276 8.28472 4.69261C8.75024 4.77246 9.17248 5.01449 9.47665 5.37582C9.78083 5.73716 9.94731 6.19448 9.9466 6.6668C9.9466 8.00014 7.9466 8.6668 7.9466 8.6668" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11.3333H8.00667" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_12438">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <div className="flex flex-col gap-1">
              <p className="text-[#334155] text-[14px] font-normal">Help center</p>
              <p className="text-[#64748B] text-[12px] font-normal">@2024 Omnify.Inc.</p>
            </div>

            </div>
            }
          </div>
        </Menu>
      </Sidebar>
      <main className="bg-[#F8FAFC] w-screen h-screen p-2">
        {/* <h1 style={{ color: "black", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
        <p style={{ color: "#000000" }}>{collapseSidebar}</p>
        <p>{String(toggled)}</p> */}
        <WaitListData />
      </main>
    </div>
  );
}

export default MainDrawer;
