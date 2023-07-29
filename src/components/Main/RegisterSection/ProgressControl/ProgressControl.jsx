import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow } from 'assests/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'assests/icons/left-arrow.svg'

function PreStepBtn({ onClickStep }) {
    return (
        <button className={styles.preStepBtn} onClick={onClickStep}>
            <LeftArrow className={styles.leftArrow} />
            上一步
        </button>
    )
}

function NextStepBtn({ onClickStep }) {
    return (
        <button className={styles.nextStepBtn} onClick={onClickStep}>
            下一步
            <RightArrow className={styles.rightArrow} />
        </button>
    )
}

function ConfirmBtn() {
    return (
        <button className={styles.confirmBtn}>
            確認下單
        </button>
    )
}

export default function ProgressControl({ step, setStep }) {

    function handlePreStep() {
        if (step > 1) setStep(step - 1)
    }

    function handleNextStep() {
        if (step < 3) setStep(step + 1)
    }

    return (
        <>
            <section className={styles.progressControlContainer}>
                <section className={styles.btnGroup}>
                    {(step === 2 || step === 3) && <PreStepBtn onClickStep={handlePreStep} />}
                    {(step === 1 || step === 2) && <NextStepBtn onClickStep={handleNextStep} />}
                    {step === 3 && <ConfirmBtn />}
                </section>
            </section>
        </>
    )
}