import styles from './RegisterSection.module.css'
import StepProgress from './StepProgress/StepProgress'
import StepOne from "./Steps/StepOne"
import ProgressControl from "./ProgressControl/ProgressControl"

export default function RegisterSection() {
    return (
        <section className={styles.registerContainer}>
            <StepProgress />
            <StepOne />
            <ProgressControl />
        </section>        
    )
} 