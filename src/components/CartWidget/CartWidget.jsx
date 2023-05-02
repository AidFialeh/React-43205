import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../../../public/carritosf.png"
  return (
    <div>
        <img src={imgCarrito} alt="Carrito" />
        <p><strong>7</strong></p>
    </div>
  )
}

export default CartWidget