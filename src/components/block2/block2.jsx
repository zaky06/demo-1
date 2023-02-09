// import { ModalBody } from 'react-bootstrap';
// import Modal from '../modal/modal';
import Scroll2 from '../scroll2/scroll2';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './block2.module.css'
import img1 from "./IMG_5323.JPG";
import img2 from "./IMG_5324.JPG";
import ModalImg from '../modalImg/modalImg';

function Block2() {
    return (
        <div className={style.block2}>
            <h2>Нажмите на изображение для просмотра</h2>
            <div className={style.content}>    
                <div className={style.elems}>
                <ModalImg className={style.modal} img={img1}/>
                <ModalImg img={img1}/>
                </div>
                <div className={style.elems}>
                <ModalImg img={img1}/>
                <ModalImg img={img1}/>
                </div>
            </div>
            <div className={style.scroll2}>
            <Scroll2/>
            </div>
        </div>
    )
}

export default Block2;