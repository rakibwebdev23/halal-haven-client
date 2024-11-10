import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MenuOffered from "../pages/Menu/MenuOffered/MenuOffered";
import MenuPopular from "../pages/Menu/MenuPopular/MenuPopular";
import MenuPizza from "../pages/Menu/MenuPizza/MenuPizza";
import MenuBurger from "../pages/Menu/MenuBurger/MenuBurger";
import MenuDessert from "../pages/Menu/MenuDessert/MenuDessert";
import MenuSoup from "../pages/Menu/MenuSoup/MenuSoup";
import MenuSalad from "../pages/Menu/MenuSalad/MenuSalad";
import MenuDrink from "../pages/Menu/MenuDrink/MenuDrink";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/UsersSocialSign/SignUp/SignUp";
import SignIn from "../pages/UsersSocialSign/SignIn/SignIn";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/Dashboard/Users/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Users/Reservation/Reservation";
import Bookings from "../pages/Dashboard/Users/Bookings/Bookings";
import PaymentHistory from "../pages/Dashboard/Users/PaymentHistory/PaymentHistory";
import Review from "../pages/Dashboard/Users/Review/Review";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AddItems from "../pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "../pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            // Menu related rote
            {
                path: "menuOffered",
                element: <MenuOffered></MenuOffered>
            },
            {
                path: "menuPopular",
                element: <MenuPopular></MenuPopular>
            },
            {
                path: "menuPizza",
                element: <MenuPizza></MenuPizza>
            },
            {
                path: "menuBurger",
                element: <MenuBurger></MenuBurger>
            },
            {
                path: "menuDessert",
                element: <MenuDessert></MenuDessert>
            },
            {
                path: "menuSoup",
                element: <MenuSoup></MenuSoup>
            },
            {
                path: "menuSalad",
                element: <MenuSalad></MenuSalad>
            },
            {
                path: "menuDrink",
                element: <MenuDrink></MenuDrink>
            },

            // food order related
            {
                path: "order",
                element: <Order></Order>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // user related routes
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "bookings",
                element: <Bookings></Bookings>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "review",
                element: <Review></Review>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },

            // admin related routes 
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "manageBookings",
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);