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
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    // path: "/employee",
    name: "Employee",
    icon: <FaUser />,
    exact: true,
    subRoutes: [
      {
        path: "/admin/employee/add",
        name: "Add Employees",
        icon: <FaUser />,
      },
      {
        path: "/admin/employee/manage",
        name: "Manage Employees",
        icon: <FaLock />,
      },

    ],
  },
  {
    path: "/admin/department",
    name: "Department",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/admin/department/add",
        name: "Add Department",
        icon: <FaUser />,
      },
      {
        path: "/admin/department/manage",
        name: "Manage Department",
        icon: <FaLock />,
      },

    ],
  },
  {
    path: "/admin/attendence/report",
    name: "Attendence",
    icon: <MdMessage />,
    exact: true,
    // subRoutes: [
    //   {
    //     path: "/admin/attendence/daily",
    //     name: "Daily Attendence",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/admin/attendence/report",
    //     name: "Attendece Report",
    //     icon: <FaLock />,
    //   },

    // ],
  },
  // {
  //   path: "/leave",
  //   name: "Leave",
  //   icon: <MdMessage />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/leave/add",
  //       name: "Add Leave ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/leave/manage",
  //       name: "Manage Leave",
  //       icon: <FaLock />,
  //     }
  //   ],
  // },
  {
    path: "/payroll",
    name: "Payroll",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/admin/payslip/add",
        name: "Create Payslip ",
        icon: <FaUser />,
      },
      {
        path: "/admin/payslip/list",
        name: "Payslp List",
        icon: <FaLock />,
      }
    ],
  },
  {
    path: "/admin/notes",
    name: "Notes",
    icon: <BsCartCheck />,
  },

  {
    path: "/admin/holiday",
    name: "Holiday",
    icon: <BsCartCheck />,
  },
  {
    path: "/admin/announcements",
    name: "Announcements",
    icon: <i class="fa-sharp fa-solid fa-megaphone"></i>,
  },
  {
    path: "/admin/message",
    name: "Messages",
    icon: <i class="fa-sharp fa-solid fa-message"></i>,
  },
  {
    path: "/admin/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/admin/settings/change-password",
        name: "Change Password ",
        icon: <FaUser />,
      },

      {
        path: "/admin/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/admin/logout",
    name: "Logout",
    icon: <BsCartCheck />,
  },


];



const SideBar = ({ children }) => {
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

            <div style={{ "display": "flex", "marginTop": "15px" }}>
              <div >
                <img className="rounded" style={{ "height": "50px", "marginLeft": "5px" }} src={profile} alt="" />
              </div>
              <div style={{ "marginLeft": "15px" }}>
                <span>Welcome,</span>
                <h6>Administator</h6>
              </div>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
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

export default SideBar;
