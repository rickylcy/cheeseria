import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import { Button } from '@material-ui/core';
import { NumberLiteralType } from 'typescript';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  purchaseItems: (cartItems: CartItemType[]) => void;
  setTotal: (total: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart ,purchaseItems, setTotal}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    // 
    const handleOnClick = (amount : number) => {
      setTotal(amount);
      purchaseItems(cartItems);
    };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button
      onClick={() => handleOnClick(parseFloat(calculateTotal(cartItems).toFixed(2)))}>Purchase</Button>
    </Wrapper>
  );
};

export default Cart;
