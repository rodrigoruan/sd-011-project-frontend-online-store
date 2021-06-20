import { getCart, setCart } from '../services/storage';

export const handleAddToCart = (item) => {
  const oldItems = [...getCart()];
  const itemExists = oldItems.find((el) => el.id === item.id);
  if (itemExists) {
    const updatedItem = { ...item, quantity: itemExists.quantity + 1 };
    const updatedShoppingCart = oldItems.map((el) => (el.id === item.id ? updatedItem : el));
    return setCart([...updatedShoppingCart]);
  }
  return setCart([...oldItems, { ...item, quantity: 1 }]);
};

export const handleDecreaseQuantity = (item) => {
  const oldItems = [...getCart()];
  const itemExists = oldItems.find((el) => el.id === item.id);
  if (itemExists && itemExists.quantity > 1) {
    const updatedItem = { ...item, quantity: itemExists.quantity - 1 };
    const updatedShoppingCart = oldItems.map((el) => (el.id === item.id ? updatedItem : el));
    setCart([...updatedShoppingCart]);
    return this.forceUpdate();
  }
  if (itemExists && itemExists.quantity === 1) {
    const updatedShoppingCart = oldItems.filter((el) => el.id !== item.id);
    setCart([...updatedShoppingCart]);
    return this.forceUpdate();
  }
};

export const handleRemoveFromCart = (item) => {
  console.log(item);
  const oldItems = [...getCart()];
  const itemExists = oldItems.find((el) => el.id === item.id);
  if (itemExists) {
    const updatedShoppingCart = oldItems.filter((el) => el.id !== item.id);
    setCart([...updatedShoppingCart]);
    return this.forceUpdate();
  }
};
