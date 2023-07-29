import styles from './StepThree.module.css'

export default function StepThree() {
    return (
        <section>
            <form className={styles.formContainer} data-phase="credit-card">
                <h3 className={styles.payInfoTitle}>付款資訊</h3>
                <section className={styles.formBody}>
                    <div className={styles.cardHolderInfo}>
                        <div className={styles.cardLabelText}>持卡人姓名</div>
                        <input className={styles.cardInput} type="text" placeholder="John Doe" />
                    </div>

                    <div className={styles.cardHolderInfo}>
                        <div className={styles.cardLabelText}>卡號</div>
                        <input className={styles.cardInput} type="text" placeholder="1111 2222 3333 4444" />
                    </div>

                    <div className={styles.cardSecretSection}>
                        <div>
                            <div className={styles.cardLabelText}>有效期限</div>
                            <input className={styles.cardSecretInput} type="text" placeholder="MM/YY" />
                        </div>
                        <div>
                            <div className={styles.cardLabelText}>CVC / CCV</div>
                            <input className={styles.cardSecretInput} type="text" placeholder="123" />
                        </div>
                    </div>
                </section>
            </form>
        </section>
    )
}