import React, { useState } from "react";
import '../scss/edit.scss';

const PostForm = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [imageUrl, setImageUrl] = useState();

    
    const AddImageUrl = (e) => {
        e.preventDefault();

        var array = imageUrls;
        array.push(imageUrl);
        setImageUrls(array);
        setImageUrl();
    }

    return(
        <form className="default-form">
            <div>
                <input className="default-input" placeholder="Title" />
            </div>
            <div>
                <textarea rows="6" className="default-text-area" placeholder="Description" />
            </div>
            <div>
                {imageUrls.map(url => {
                    return(
                        <input className="default-input input-disable" value={url} />
                    )
                })}
                <input className="default-input no-margin" placeholder="Image Url" 
                    onChange={e => setImageUrl(e.target.value)}
                />
                <button className="add-button" onClick={AddImageUrl}><ion-icon name="add-outline"></ion-icon> Add</button>
            </div>
        </form>
    )
}

export default PostForm;