import React from "react";
import "./styles/Images.css";

export default function Images({images}) {
    console.log(images);

    if(images) {
        return (
            <div className="images">
                {images.map(function(image) {
                    return (
                    <div className="img-wraper">
                        <a href={image.src.original} target="_blank" rel="noreferrer"> 
                            <img 
                            src={image.src.landscape} 
                            key={image.id} 
                            alt={image.src.photographer} />
                        </a>
                    </div>
                )})}
            </div>
        )
    } else {
        return null;
    }

}