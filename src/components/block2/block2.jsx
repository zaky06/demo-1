import Scroll2 from '../scroll2/scroll2';
import style from './block2.module.css'
import img1 from "./IMG_5323.JPG";
import img2 from "./IMG_5324.JPG";

function Block2() {
    return (
        <div className={style.block2}>
            <figure>
                <figcaption>Скрины моей работы</figcaption>
                <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                    <img src={img1} alt="img1" />
                </a>
                <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                    <img src={img2} alt="img1" />
                </a>
                <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                    <img src={img2} alt="img1" />
                </a>
                <a target={"_blank"} href="https://zaky06.github.io/cra-gh/">
                    <img src={img2} alt="img1" />
                </a>
            </figure>
            <Scroll2/>
        </div>
    )
}

export default Block2;