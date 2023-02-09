import DarkTable from '../table/table';
import MyTab from '../tabs/tabs';
import style from './block3.module.css'

function Block3() {
    return (
        <div className={style.block3}>
            <div className={style.wrapper}>
                <DarkTable/>
                <h2>Развернутое описание</h2>
                <MyTab/>
            </div>
        </div>
    )
}

export default Block3;