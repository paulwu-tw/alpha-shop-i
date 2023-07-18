import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow } from '../../../assests/icons/right-arrow.svg'

export default function ProgressControl() {
    return (
        <>
            <section className={styles.progressControlContainer}>
                <section className={styles.btnGroup}>
                    <button className={styles.nextStepBtn}>
                        下一步
                        <RightArrow className={styles.rightArrow} />
                    </button>
                </section>
            </section>
        </>
    )
}