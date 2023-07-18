import styles from './StepProgress.module.css'

function ProgressItem({ stepCount, stepName }) {
    return (
        <span>
            <span className={styles.progressIcon}>
                <span className={styles.text}>{stepCount}</span>
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

export default function StepProgress() {
    return (
        <>
            <h2>結帳</h2>
            <section className={styles.progressContainer}>
                <ProgressItem
                    stepCount={1}
                    stepName={"寄送地址"}
                />
                <ProgressBar />
                <ProgressItem
                    stepCount={2}
                    stepName={"運送方式"}
                />
                <ProgressBar />
                <ProgressItem
                    stepCount={3}
                    stepName={"付款資訊"}
                />
            </section>
        </>
    );
}
