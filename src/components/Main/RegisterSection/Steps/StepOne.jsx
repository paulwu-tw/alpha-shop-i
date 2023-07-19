import styles from './StepOne.module.css'

const titleGroup = {
    mr: "先生",
    ms: "女士",
    mx: "不明"
}

const cityGroup = {
    KLU: "基隆市",
    TPH: "新北市",
    TPE: "臺北市",
    TYC: "桃園市",
    HSH: "新竹縣",
    HSC: "新竹市",
    MAC: "苗栗市",
    MAL: "苗栗縣",
    TXG: "臺中市",
    CWH: "彰化縣",
    CWS: "彰化市",
    NTC: "南投市",
    NTO: "南投縣",
    YLH: "雲林縣",
    CHY: "嘉義縣",
    CYI: "嘉義市",
    TNN: "臺南市",
    KHH: "高雄市",
    IUH: "屏東縣",
    PTS: "屏東市",
    ILN: "宜蘭縣",
    ILC: "宜蘭市",
    HWA: "花蓮縣",
    HWC: "花蓮市",
    TTC: "臺東市",
    TTT: "臺東縣",
    PEH: "澎湖縣",
    KMN: "金門縣",
    LNN: "連江縣"
}

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
        <>
            <section >
                {/* address phase */}
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
        </>
    );
}