import DarkTable from '../table/table';
import MyTab from '../tabs/tabs';
import style from './block2.module.css'
import Scroll2 from '../scroll2/scroll2';

function Block2() {
    return (
        <div className={style.block2}>
            <div className={style.wrapper}>
                <h2>Мои навыки</h2>
                <DarkTable/>
                <h2>Развернутое описание</h2>
                <MyTab/>
            </div>
            <div className={style.scroll2}>
                <Scroll2/>
            </div>
        </div>
    )
}

export default Block2;