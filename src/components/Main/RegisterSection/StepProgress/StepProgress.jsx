import styles from './StepProgress.module.css'
import { ReactComponent as PgComplete } from 'assests/icons/pg-complete.svg';

function ProgressItem({ step, stepCount, stepName }) {
    return (
        <span className={styles.progressInfoContainer}>
            <span className={styles.progressIcon}>
                <span className={styles.text}>{(step > stepCount) ? <PgComplete /> : stepCount}</span>
            </span>
            <span className={styles.progressLabel}>{stepName}</span>
        </span>
    )
}

function ProgressBar() {
    return (
        <span className={styles.progressBar}>
        </span>
    )
}

export default function StepProgress({ step }) {
    return (
        <>
            <h2>結帳</h2>
            <section className={styles.progressContainer}>
                <ProgressItem
                    step={step}
                    stepCount={1}
                    stepName={"寄送地址"}
                />
                <ProgressBar />
                <ProgressItem
                    step={step}
                    stepCount={2}
                    stepName={"運送方式"}
                />
                <ProgressBar />
                <ProgressItem
                    step={step}
                    stepCount={3}
                    stepName={"付款資訊"}
                />
            </section>
        </>
    );
}
