import React from "react";
import IMG1 from '../assets/image/pexels-photo-2219701.jpeg'


const HeroAll = ({ title }) => {
    return (
        < div classname="position-absolute " >
            <img src={IMG1} alt="IMG1" className=" w-100 pb-5 position-absolute bottom-50 justify-content-center " />
            <div className="d-flex position-absolute justify-content-center" style={{
                padding: '120px 0px 0px 50rem',
            }}>
                <h1 className="text-white">{title}</h1>
            </div>
        </div >
    )
}
export default HeroAll;