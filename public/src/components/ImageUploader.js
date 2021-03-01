import React, {useRef} from 'react'
import '../assets/Upload.css';

const ImageUploader = ({onImageSelectSuccess,onImageSelectError}) => {
    const imageInput = useRef(null)

    const handleImageInput = (e) => {
        e.preventDefault()
        // handle validations
    const image = e.target.images[0];
        if (image.size > 10 * 1024 * 1024)
            onImageSelectError({ error: "Image size cannot exceed more than 10MB" });
        else onImageSelectSuccess(image);
            
    }
    return (
        <div className="image-uploader">
            <input type="file" onChange={handleImageInput} />
            <button onClick={(e) => imageInput.current && imageInput.current.click()} className="upload-btn">upload image</button>
        </div>
    )
}

export default ImageUploader;   