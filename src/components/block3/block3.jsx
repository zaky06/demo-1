import 'bootstrap/dist/css/bootstrap.min.css';
import style from './block3.module.css'
import img1 from "./IMG_5323.JPG";
import img2 from "./IMG_5324.JPG";
import ModalImg from '../modalImg/modalImg';

function Block3() {
    return (
        <div className={style.block3}>
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
        </div>
    )
}

export default Block3;