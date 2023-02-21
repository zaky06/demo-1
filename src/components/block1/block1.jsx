import style from './block1.module.css'
import MovingHead from "../movingHead/movingHead";
import Scroll1 from '../scroll1/scroll1';

function Block1() {

    return (
        <div className={style.block1}>
            <div className={style.wrapper}>
                <div className={style.nameHead}>
                    <MovingHead/>
                </div>
                <hr />
                <strong>Demo-1</strong>
                <p>
                    был создан для повторения материала,
                    который был забыт во время моей неактивности
                </p>
                <p>
                    В данном проекте используются симантические теги, 
                    пару библиотек на стилек
                </p>
                <p>
                    Над дизайном не стал заморачиваться, макета у меня нет, все просто с головы
                </p>
                <p>
                    Ниже можете ознакомиться с более серьезной работой, сделанной по макету!
                </p>
                <p>
                    Вот там я реально запарился))
                </p>
            </div>
            <div className={style.scroll1}>
                <Scroll1/>
            </div>
        </div>
    )
}

export default Block1;