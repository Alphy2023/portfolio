import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineBgColors,
} from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { RiCouponLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { BiCategoryAlt, BiPlus, BiLogOut, BiCode, BiServer, BiBookContent, BiHeart, BiFilterAlt, BiMessage } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
// import { Logout } from "../features/auth/authSlice";

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user= {
    firstname:"John",
    lastname:"Doe",
    email:"example@gmail.com",
    image:""
  }
//   const { user } = useSelector((state) => state.auth);
//   if (!user) {
//     return <Navigate to="/admin-login" />;
//   }
//   if (user.role === "user") {
//     return <Navigate to="/account" />;
//   }
  const handleLogout = () => {
    // dispatch(Logout());
    // setTimeout(() => {
    //   navigate("/admin-login")
    // }, 300);
  };
  return (
    <div>
      {/* onContextMenu={(e) => e.preventDefault()} */}
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h5 className="text-white py-3 text-center">
              <span className="lg-logo">Wendo Store</span>
              <span className="sm-logo">WS</span>
            </h5>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "logout") {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "admin",
                icon: <AiOutlineDashboard className="fs-5" />,
                label: "Dashboard",
              },
              {
                key: "admin/about",
                icon: <UserOutlined className="fs-5" />,
                label: "About me",
              },
              {
                key: "admin/Resume",
                icon: <FaClipboardList className="fs-5" />,
                label: "Resume",
                children: [
                  {
                    key: "admin/resume/education",
                    icon: <AiOutlineShopping className="fs-5" />,
                    label: "Education",
                  },

                  {
                    key: "admin/resume/experience",
                    icon: <BiCategoryAlt className="fs-5" />,
                    label: "Experiences",
                  },
                ],
              },
              {
                key: "admin/skills",
                icon: <BiCode className="fs-5" />,
                label: "Skills",
              },
              {
                key: "admin/services",
                icon: <BiServer className="fs-5" />,
                label: "Services",
              },
              {
                key: "admin/portfolio",
                icon: <BiBookContent className="fs-5" />,
                label: "Portfolio",
              },
              {
                key: "admin/testimonials",
                icon: <BiHeart className="fs-5" />,
                label: "Testimonials",
              },
              {
                key: "admin/facts",
                icon: <BiFilterAlt className="fs-5" />,
                label: "Facts",
              },
              {
                key: "admin/contact",
                icon: <BiMessage className="fs-5" />,
                label: "Contact",
              },
              
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className=" d-flex justify-content-between ps-1 pe-4"
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
              {
                className: "trigger text-light ",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className="d-flex gap-4 align-items-center text-light">
              <div className="position-relative">
                <IoIosNotifications className="fs-4" />
                <span
                  className="badge bg-warning rounded-circle p-1
                position-absolute"
                >
                  3
                </span>
              </div>
              <div
                className="d-flex gap-3 align-items-center
               dropdown"
              >
                <div>
                  <img
                    src={user.image ? user.image : "/img/team/01.jpg"}
                    alt=""
                    className="profile-img"
                  />
                </div>
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="text-white mb-0">
                    {user.firstname + " " + user.lastname}
                  </h5>
                  <p className="mb-0">{user.email}</p>
                </div>
                <div className="dropdown-menu dropdown-menu-end mt-2">
                  <div style={{ minWidth: "14rem" }}>
                    <h6 className="dropdown-header">Admin Dashbaord</h6>
                    <NavLink
                      style={{ height: "auto", paddingBottom: "0px" }}
                      className="dropdown-item py-0 mb-0 d-flex align-items-center"
                      to="/account"
                    >
                      <i className="ci-settings opacity-60 me-2"></i>Settings
                    </NavLink>
                    <a
                      style={{ height: "auto", minHeight: "20px !important" }}
                      className="dropdown-item py-0 mb-0 d-flex align-items-center"
                    >
                      <i className="ci-basket opacity-60 me-2"></i>Order History
                    </a>
                    <button
                      style={{ height: "auto", minHeight: "auto" }}
                      type="button"
                      className="dropdown-item my-0 py-0 mb-0 d-flex align-items-center"
                      onClick={handleLogout}
                    >
                      <BiLogOut className="opacity-60 me-2" /> Logout
                    </button>
                    <div className="dropdown-divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="dark"
            />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
