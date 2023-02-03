// import ControlledCarousel from "../carousel/carousel";
import MovingHead from "../movingHead/movingHead";
import Scroll from "../scroll/scroll";
// import MyMovingText from "../movingText/movingText";
import img1 from "./IMG_5323.JPG";
import img2 from "./IMG_5324.JPG";
import style from "./main.module.css"


function Main() {
    return (
        <main>
            <div className={style.block1}>
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
                <Scroll/>
            </div>
            </div>
            <div id="block2" className={style.block2}>
                <figure>
                <figcaption>Скрины моей работы</figcaption>
                    <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                        <img src={img1} alt="img1" />
                    </a>
                    <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                        <img src={img2} alt="img1" />
                    </a>
                </figure>
            </div>
        </main>
    )
}

export default Main;