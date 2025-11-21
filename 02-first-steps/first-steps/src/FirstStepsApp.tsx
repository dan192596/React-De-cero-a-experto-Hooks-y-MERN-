import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 1},
    {productName: 'Pro Controller', quantity: 2},
    {productName: 'Super Smash', quantity: 5},
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Prueba 1" quantity={5}/>
      <ItemCounter name="Prueba 2" quantity={10}/>
      <ItemCounter name="Prueba 3" quantity={15}/> */}
      {
        itemsInCart.map( ({productName, quantity}) => (
            <ItemCounter 
                name={productName}
                quantity={quantity}
                key={productName}
                ></ItemCounter>
        ))
      }
    </>
  )
}