// import {FaStar} from "react-icons/ci";
import {useState} from "react";
import {FaStar} from "react-icons/fa";

const Star = () => {

    const [hoverStar, setHoverStar] = useState(0);
    const [star, setStar] = useState(0);

    const focusHighlight = (index)=>{
        setHoverStar(index);
    }

    const leaveHighlight = ()=>{
        setHoverStar(star)
    }

    return (
        <div className={"flex flex-row"}>
            {
               [...Array(5)].map((_, index)=>{
                    index+=1
                    return <FaStar
                        key={index}
                        size={22}
                        className={`cursor-pointer ${(index<=star || index<=hoverStar) ? 'fill-amber-400' : `fill-gray-600`}`}
                        onMouseMove={()=>focusHighlight(index)}
                        onMouseLeave={()=>leaveHighlight()}
                        onClick={()=>setStar(index)}
                    />
                })
            }
        </div>
    );
};

export default Star;
