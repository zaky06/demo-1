import { ScrollTo } from "react-scroll-to";
import MovingArrow from "../movingArrow/movingArrow";
function Scroll() {
    return (
        <ScrollTo>
            {({ scroll }) => (
            <a onClick={() => scroll({ y:500 })}><MovingArrow/></a>
            )}
        </ScrollTo>
    )
}

export default Scroll;

