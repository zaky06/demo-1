import MovingArrow from "../movingArrow/movingArrow";
import style from "./main.module.css"

function Main() {
    return (
        <main>
            <div className={style.wrapper}>
                <div className={style.leftContainer}>
                    <p>Представляю вашему вниманию</p>
                    <h2>САЙТ-</h2>
                    <h2>ВИЗИТКА!</h2>
                </div>
                <div className={style.rightContainer}>
                    <h5>
                        Это одностраничный сайт
                        <br />
                        Сделанный мной для работодателя
                    </h5>
                    <p>
                        Вся основная информанция будет ниже.
                        <br />
                        Для быстрого перехода используйте
                        <br />
                        стрелку)
                    </p>
                </div>
            </div>
            <div className={style.movingArrow}>
                <MovingArrow/>
            </div>
        </main>
    )
}

export default Main;