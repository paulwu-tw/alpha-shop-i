import styles from './StepOne.module.css'
import selectData from './selectData.json'

const titleGroup = selectData.titleGroup

const cityGroup = selectData.cityGroup

function InputGroup({ styleGroup, styleBox, label, type, placeholder }) {
    return (
        <div className={styleGroup}>
            <div className={styles.inputLabel}>{label}</div>
            <input className={styleBox} type={type} placeholder={placeholder} />
        </div>
    )
}

function SelectWrap({ selectGroup, selectData, name }) {

    let options = []
    options.push(<option key={0} value="" defaultValue>請選擇{name}</option>)

    Object.keys(selectData).map((element) =>
        options.push(<option key={element} value={element}>{selectData[element]}</option>)
    );

    return (
        <div className={selectGroup}>
            <div className={styles.inputLabel}>{name}</div>
            <div>
                <select className={styles.selectContainer}>
                    {options}
                </select>
            </div>
        </div>
    )
}

export default function StepOne() {
    return (
        <section >
            <form className={styles.formContainer}>
                <h3 className={styles.formTitle}>寄送地址</h3>
                <section className={styles.formBody}>
                    <div className={styles.inputWrap}>
                        <SelectWrap
                            selectGroup={styles.selectTitleGroup}
                            selectData={titleGroup}
                            name={"稱謂"}
                        />
                        <InputGroup
                            styleGroup={styles.inputNameGroup}
                            styleBox={styles.inputNameBox}
                            label={"姓名"}
                            type={"text"}
                            placeholder={"請輸入姓名"}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        <InputGroup
                            styleGroup={styles.inputPhoneGroup}
                            styleBox={styles.inputPhoneBox}
                            label={"電話"}
                            type={"tel"}
                            placeholder={"請輸入行動電話"}
                        />
                        <InputGroup
                            styleGroup={styles.inputMailGroup}
                            styleBox={styles.inputMailBox}
                            label={"Email"}
                            type={"email"}
                            placeholder={"請輸入電子郵件"}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        <SelectWrap
                            selectGroup={styles.selectCityGroup}
                            selectData={cityGroup}
                            name={"縣市"}
                        />
                        <InputGroup
                            styleGroup={styles.inputAdressGroup}
                            styleBox={styles.inputAdressBox}
                            label={"地址"}
                            type={"text"}
                            placeholder={"請輸入地址"}
                        />
                    </div>
                </section>
            </form>
        </section>
    );
}