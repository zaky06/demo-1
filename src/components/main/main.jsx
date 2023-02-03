import MovingArrow from "../movingArrow/movingArrow";
import MovingHead from "../movingHead/movingHead";
// import MyMovingText from "../movingText/movingText";
import style from "./main.module.css"

function Main() {
    return (
        <main>
            <div className={style.nameHead}>
                <MovingHead/>
            </div>
            <div className={style.wrapper}>
                <h4>небольшое описание:</h4>
                <hr />
                <strong>Demo-1</strong>
                <p>
                    было созданно для повторения материала,
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
            <div className={style.arrow}>
                <MovingArrow/>
            </div>
            
        </main>
    )
}

export default Main;