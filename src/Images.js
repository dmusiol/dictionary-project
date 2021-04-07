import React from "react";
import "./styles/Images.css";

export default function Images({images}) {

    if(images) {
        return (
            <div className="images">
                {images.map(function(image) {
                    return (
                    <div className="img-wraper">
                        <a href={image.pageURL} target="_blank" rel="noreferrer"> 
                            <img 
                            src={image.webformatURL} 
                            key={image.id} 
                            alt={image.user} />
                        </a>
                    </div>
                )})}
            </div>
        )
    } else {
        return null;
    }

}