import styles from './Cart.module.css'
import { ReactComponent as Minus } from 'assests/icons/minus.svg'
import { ReactComponent as Plus } from 'assests/icons/plus.svg'
import data from 'components/Main/Cart/cartData.json'
import { useState } from 'react'

const cartData = data.data

function ProductContainer({ item, totalAmount, setTotalAmount }) {
    return (
        <div className={styles.productContainer} data-count={item.quantity} data-price={item.price}>
            <img alt="" className={styles.imgContainer} src={item.img} />
            <ProductInfo
                item={item}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
            />
        </div>
    )
}

function ProductInfo({ item, totalAmount, setTotalAmount }) {
    const [quantity, setQuantity] = useState(item.quantity)

    function handleIncreaseClick() {
        setQuantity(quantity + 1)
        setTotalAmount(totalAmount + item.price)
    }

    function handleDecreaseClick() {
        if (quantity === 0) {
            setQuantity(0)
        } else {
            setQuantity(quantity - 1)
            setTotalAmount(totalAmount - item.price)
        }
    }

    return (
        <div className={styles.productInfo}>
            <div className={styles.productItems}>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <Minus onClick={handleDecreaseClick} />
                        <span className={styles.productCount}>{quantity}</span>
                        <Plus onClick={handleIncreaseClick} />
                    </div>
                </div>
            </div>
            <div className={styles.productPrice}>${item.price}</div>
        </div>
    )
}

export default function Cart({shippingFee}) {
    let defaultTotal = 0
    cartData.map(item => defaultTotal += (item.quantity * item.price))

    const [totalAmount, setTotalAmount] = useState(defaultTotal + shippingFee)

    return (
        <>
            <section className={styles.cartContainer}>
                <h3 className={styles.cartTitle}>購物籃</h3>

                <section className={styles.productList} data-total-price={totalAmount}>
                    {cartData.map(item =>
                        <ProductContainer
                            key={item.id}
                            item={item}
                            totalAmount={totalAmount}
                            setTotalAmount={setTotalAmount}
                        />
                    )}
                </section>

                <section className={styles.priceWrap}>
                    <section className={styles.shippingInfo}>
                        <div className={styles.shippingFeeText}>運費</div>
                        <div className={styles.shippingFee}>{shippingFee}</div>
                    </section>
                    <section className={styles.cartTotalInfo}>
                        <div className={styles.cartTotalPriceText}>小計</div>
                        <div className={styles.cartTotalPrice}>{totalAmount + shippingFee}</div>
                    </section>
                </section>
            </section>
        </>
    )
}