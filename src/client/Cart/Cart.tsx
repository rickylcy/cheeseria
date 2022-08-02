import React, { useState } from "react";
import CartItem from "./CartItem/CartItem";
import PurchaseDialog from "./PurchaseDialog";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import { Button } from "@material-ui/core";
import { NumberLiteralType } from "typescript";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  purchaseItems: (cartItems: CartItemType[]) => void;
  setTotal: (total: number) => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  purchaseItems,
  setTotal,
}) => {
  // State for opening dialog component
  const [dialogOpen, setDialogOpen] = React.useState(false);

  // Set dialog state
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  //
  const handleOnClick = (amount: number) => {
    setTotal(amount);
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button
        onClick={() => {
          handleOnClick(parseFloat(calculateTotal(cartItems).toFixed(2)));
          handleDialogOpen();
        }}
      >
        Purchase
      </Button>
      <PurchaseDialog
        cartItems={cartItems}
        purchaseItems={purchaseItems}
        dialogOpen={dialogOpen}
        handleDialogClose={handleDialogClose}
        total={parseFloat(calculateTotal(cartItems).toFixed(2))}
      />
    </Wrapper>
  );
};

export default Cart;
