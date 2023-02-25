import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import profile from "../../../Assets/fotor_2023-1-29_23_12_31.png"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  // {
  //   path: "/timeline",
  //   name: "TimeLine",
  //   icon: <i className="fa-solid fa-comments"></i>,
  // },
  {
    path: "/events",
    name: "Events",
    icon: <i className="fa-solid fa-calendar-days"></i>,
  },
  {
    path: "/notes",
    name: "Notes",
    icon:<i className="fa-solid fa-comments"></i>,
  }, {
    path: "/messages",
    name: "Messages",
    icon: <i className="fa-sharp fa-solid fa-message"></i>,
  },
  {
    path: "/time-cards",
    name: "Time Cards",
    icon: <i className="fa-regular fa-clock"></i>,
  },
  {
    path: "/leave",
    name: "Leave",
    icon: <i className="fa-light fa-arrow-right-from-bracket"></i>,  
  },
  {
    path: "/announcements",
    name: "Announcements",
    icon: <i className="fa-sharp fa-solid fa-megaphone"></i>,
  },
  // {
  //   path: "/holiday",
  //   name: "Holiday",
  //   icon: <i className="fa-sharp fa-solid fa-calendar-days"></i>,
  // },
  {
    path: "/hrpolicy",
    name: "HR Policy",
    icon: <i className="fa-thin fa-notes"></i>,
  },
  {
    path: "/help&support",
    name: "Help & support",
    icon: <i className="fa-sharp fa-solid fa-circle-info"></i>,
    exact: true,
    subRoutes: [
      {
        path: "/help",
        name: "Help ",
        icon: <i className="fa-sharp fa-solid fa-circle-info"></i>,
      },
      
      {
        path: "/settings/billing",
        name: "Settings",
        icon:<i className="fa-solid fa-gear"></i>,
      },
    ],
  },
  
 
 
];


const SideBar1 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

const RoleId = localStorage.getItem('Role_id')



  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div>

          <div style={{"display":"flex","marginTop":"15px"}}>
            <div >
            <img className="rounded"  style={{"height":"50px","marginLeft":"5px"}}  src={profile} alt="" />
            </div>
            <div style={{"marginLeft":"15px"}}>
              <span>Welcome,</span>
              <h6>Administator</h6>
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index)  => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                  setIsOpen={setIsOpen}
                  key={route.name}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          </div>
        </motion.div>

        <main className="container-fluid mainRight">{children}</main>
      </div>
    </>
  );
};

export default SideBar1;
