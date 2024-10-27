import useMenu from "../../hooks/useMenu";

const MenuData = () => {

    const [menu, refetch] = useMenu();    

    const offeredItem = menu.filter(item => item.category === "offered");
    const popularItem = menu.filter(item => item.category === "popular");
    const pizzaItem = menu.filter(item => item.category === "pizza");
    const burgerItem = menu.filter(item => item.category === "burger");
    const dessertItem = menu.filter(item => item.category === "dessert");
    const soupItem = menu.filter(item => item.category === "soup");
    const saladItem = menu.filter(item => item.category === "salad");
    const drinkItem = menu.filter(item => item.category === "drinks");

    return [menu, offeredItem, popularItem, pizzaItem, burgerItem, dessertItem, soupItem, saladItem, drinkItem, refetch];
};

export default MenuData;