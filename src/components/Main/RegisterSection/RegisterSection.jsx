import styles from './RegisterSection.module.css'
import StepProgress from './StepProgress/StepProgress'
import StepOne from "./Steps/StepOne/StepOne"
import StepTwo from "./Steps/StepTwo/StepTwo"
import StepThree from './Steps/StepThree/StepThree'
import ProgressControl from "./ProgressControl/ProgressControl"
import { useState } from 'react'

export default function RegisterSection({ setShippingFee }) {
    const [step, setStep] = useState(1)

    return (
        <section className={styles.registerContainer}>
            <StepProgress
                step={step}
            />

            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo
                setShippingFee={setShippingFee}
            />}
            {step === 3 && <StepThree />}

            <ProgressControl
                step={step}
                setStep={setStep}
            />
        </section>
    )
} 