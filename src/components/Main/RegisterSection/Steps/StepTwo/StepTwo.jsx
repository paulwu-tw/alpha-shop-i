import styles from './StepTwo.module.css'

function ShippingInfo({ shippingInfo, setShippingFee }) {

    function handleShippingFeeChange(){
        setShippingFee(shippingInfo.fee)
    }

    return (
        <label className={styles.labelContainer} data-price={shippingInfo.fee}>
            <input id={"shipping-" + shippingInfo.name} type="radio" name="shipping" 
            onChange={handleShippingFeeChange} 
            defaultChecked={shippingInfo.fee===0 && 'checked'} />
            <div className={styles.radioInfo}>
                <div className={styles.shippingInfo}>
                    <div>{shippingInfo.way}</div>
                    <div>{shippingInfo.fee}</div>
                </div>
                <div className={styles.shippingTimeText}>{shippingInfo.time}</div>
            </div>
        </label>
    )
}

export default function StepTwo({ setShippingFee }) {

    const shippingInfo = {
        "standard": {
            "name": "standard",
            "fee": 0,
            "way": "標準運送",
            "time": "約 3~7 個工作天",
        },
        "dhl": {
            "name": "dhl",
            "fee": 500,
            "way": "DHL",
            "time": "48 小時內送達",
        }
    }

    return (
        <section>
            <form className={styles.formContainer} data-phase="shipping">
                <h3>運送方式</h3>
                <section>
                    <ShippingInfo
                        shippingInfo={shippingInfo.standard}
                        setShippingFee={setShippingFee}
                    />
                    <ShippingInfo
                        shippingInfo={shippingInfo.dhl}
                        setShippingFee={setShippingFee}
                    />
                </section>
            </form>
        </section>
    )
}