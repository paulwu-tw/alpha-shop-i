import styles from './StepOne.module.css'

// const titleGroup = { 
//     mr: "先生" , 
//     ms: "女士" , 
//     mx: "不明" 
// }

function InputGroup({ styleGroup, styleBox, label, type, placeholder }) {
    return (
        <div className={styleGroup}>
            <div className={styles.inputLabel}>{label}</div>
            <input className={styleBox} type={type} placeholder={placeholder} />
        </div>
    )
}

// function SelectWrap({ selectGroup, selectData }) {
    
//     let options = []
//     console.log(selectData)
//     Object.keys(selectData).forEach((element,
//         9 index) => {
//         // console.log(element)
//         if(index===0) options.push(<option value={element} selected>{selectData[element]}</option>)
//         options.push(<option value={element}>{selectData[element]}</option>)
//     });

//     return (
//         <div className={selectGroup}>
//             <div className={styles.inputLabel}>稱謂</div>
//             <div>
//                 <select className={styles.selectContainer}>
//                     {options}
//                 </select>
//             </div>
//         </div>
//     )
// }

export default function StepOne() {
    return (
        <>
            <section >
                {/* address phase */}
                <form className={styles.formContainer}>
                    <h3 className={styles.formTitle}>寄送地址</h3>
                    <section className={styles.formBody}>
                        <div className={styles.inputWrap}>
                            {/* <SelectWrap 
                                selectGroup={styles.selectTitleGroup}
                                selectData={titleGroup}
                            /> */}
                            {/* <div className={styles.selectTitleGroup}>
                                <div className={styles.inputLabel}>稱謂</div>
                                <div>
                                    <select className={styles.selectContainer}>
                                        <option value="mr" selected>先生</option>
                                        <option value="ms">女士</option>
                                        <option value="mx">不明</option>
                                    </select>
                                </div>
                            </div> */}
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
                            <div className={styles.selectCityGroup}>
                                <div className={styles.inputLabel}>縣市</div>
                                <div >
                                    <select className={styles.selectContainer} required>
                                        <option value="">請選擇縣市</option>
                                        <option value="KLU">基隆市</option>
                                        <option value="TPH">新北市</option>
                                        <option value="TPE">臺北市</option>
                                        <option value="TYC">桃園市</option>
                                        <option value="HSH">新竹縣</option>
                                        <option value="HSC">新竹市</option>
                                        <option value="MAC">苗栗市</option>
                                        <option value="MAL">苗栗縣</option>
                                        <option value="TXG">臺中市</option>
                                        <option value="CWH">彰化縣</option>
                                        <option value="CWS">彰化市</option>
                                        <option value="NTC">南投市</option>
                                        <option value="NTO">南投縣</option>
                                        <option value="YLH">雲林縣</option>
                                        <option value="CHY">嘉義縣</option>
                                        <option value="CYI">嘉義市</option>
                                        <option value="TNN">臺南市</option>
                                        <option value="KHH">高雄市</option>
                                        <option value="IUH">屏東縣</option>
                                        <option value="PTS">屏東市</option>
                                        <option value="ILN">宜蘭縣</option>
                                        <option value="ILC">宜蘭市</option>
                                        <option value="HWA">花蓮縣</option>
                                        <option value="HWC">花蓮市</option>
                                        <option value="TTC">臺東市</option>
                                        <option value="TTT">臺東縣</option>
                                        <option value="PEH">澎湖縣</option>
                                        <option value="KMN">金門縣</option>
                                        <option value="LNN">連江縣</option>
                                    </select>
                                </div>
                            </div>
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