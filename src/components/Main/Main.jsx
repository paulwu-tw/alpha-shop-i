import styles from './Main.module.css'
import RegisterSection from "./RegisterSection/RegisterSection"
import Cart from "./Cart/Cart"
import { useState } from 'react'

export default function Main() {
    const [shippingFee, setShippingFee] = useState(0)

    return (
        <section className={styles.mainContainer}>
            <RegisterSection
                setShippingFee={setShippingFee}
            />
            <Cart 
                shippingFee={shippingFee}
            />
        </section>
    )
}