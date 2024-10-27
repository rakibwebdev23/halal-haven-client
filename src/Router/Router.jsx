import {
    createBrowserRouter,
} from "react-router-dom";
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
// import MenuPopular from "../Menu/MenuPopular/MenuPopular";

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
                element: <Order></Order>
            }
        ]
    }
]);