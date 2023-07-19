import styles from './Main.module.css'
import RegisterSection from "./RegisterSection/RegisterSection"
import Cart from "./Cart/Cart"

export default function Main() {
    return (
        <section className={styles.mainContainer}>
            <RegisterSection />
            <Cart />
        </section>
    )
}