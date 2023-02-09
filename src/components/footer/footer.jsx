import style from './footer.module.css'
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className={style.wrapper}>
                <span>
                    <a href=""><BsTelegram/>Telegramm</a>
                </span>
                <span>
                    <a href=""><AiFillGithub/>GitHub</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;