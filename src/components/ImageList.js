import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = props => {
    const images = props.images.map(i => {
        return (
            <div key={i.id}>
                <ImageCard image={i}/>
            </div>
        );
    });

    return <div className="image-list">{images}</div>
}

export default ImageList;