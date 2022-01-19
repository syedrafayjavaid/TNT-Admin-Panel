
import Dashboard from "views/Dashboard.js";

import viewProducts from "components/ItemsViewPage";




import Classes from "views/Classes";
import Assignment from "views/Assignment";
import Posts from "views/Posts";
import Profile from "views/Profile";
import users from "views/users";
import Editors from "views/Editors";










const dashboardRoutes = [



  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-tv-2",
    component: Dashboard,
    layout: "/admin",
  },


  {
    path: "/Profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: Profile,
    layout: "/admin",
  },


  
  {
    path: "/editors",
    name: "Editors",
    icon: "nc-icon nc-ruler-pencil",
    component: Editors,
    layout: "/admin",
  },





  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-single-02",
    component: users,
    layout: "/admin",
  },


 
 

  {
    path: "/Posts",
    name: "Posts",
    icon: "nc-icon nc-paper-2",
    component: Posts,
    layout: "/admin",
  },




 





  


];

export default dashboardRoutes;
