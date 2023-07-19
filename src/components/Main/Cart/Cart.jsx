import styles from './Cart.module.css'
import { ReactComponent as Minus } from '../../../assests/icons/minus.svg'
import { ReactComponent as Plus } from '../../../assests/icons/plus.svg'

const cartData = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
    {
        id: '3',
        name: '貓咪',
        img: 'https://picsum.photos/300/300?text=3',
        price: 300,
        quantity: 3,
    },
]

function ProductContainer({ item }) {
    return (
        <div className={styles.productContainer} data-count={item.quantity} data-price={item.price}>
            <img alt="" className={styles.imgContainer} src={item.img} />
            <ProductInfo
                item={item}
            />
        </div>
    )
}

function ProductInfo({ item }) {
    return (
        <div className={styles.productInfo}>
            <div className={styles.productItems}>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <Minus />
                        <span className={styles.productCount}>{item.quantity}</span>
                        <Plus />
                    </div>
                </div>
            </div>
            <div className={styles.productPrice}>${item.price}</div>
        </div>
    )
}

export default function Cart() {

    return (
        <>
            <section className={styles.cartContainer}>
                <h3 className={styles.cartTitle}>購物籃</h3>

                <section className={styles.productList} data-total-price="0">
                    {cartData.map(item => 
                        <ProductContainer
                            key={item.id}
                            item={item}
                        />
                    )}
                </section>

                <section className={styles.priceWrap}>
                    <section className={styles.shippingInfo}>
                        <div className={styles.shippingFeeText}>運費</div>
                        <div className={styles.shippingFee}>免費</div>
                    </section>
                    <section className={styles.cartTotalInfo}>
                        <div className={styles.cartTotalPriceText}>小計</div>
                        <div className={styles.cartTotalPrice}>$0</div>
                    </section>
                </section>
            </section>
        </>
    )
}