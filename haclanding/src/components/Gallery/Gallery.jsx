import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import s from "./Gallery.module.css"
import ImageGallery from 'react-image-gallery';
import imageLoader from "./Photos";

const MyComponent = () => {
    const images = imageLoader()
    // const images = [
    //     {
    //         original: 'http://lorempixel.com/1000/600/nature/1/', //большое изображение
    //         thumbnail: 'http://lorempixel.com/250/150/nature/1/', //миниатюрное изображение
    //         description : "название эскиза изображения",
    //
    //     },
    //     {
    //         original: 'http://lorempixel.com/1000/600/nature/2/',
    //         thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    //     },
    //     {
    //         original: 'http://lorempixel.com/1000/600/nature/3/',
    //         thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    //     }
    // ]

    return (
        <div className={s.Wrapper}>
            <ImageGallery items={images}
                          thumbnailPosition={"top"} // позиция миниатюр
                          showPlayButton={false} //показывает кнопку воспроизвидения
                          disableArrowKeys={true}
            />
        </div>
    );
}
export default MyComponent;