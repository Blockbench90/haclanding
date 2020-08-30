const images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/1/', //большое изображение
        thumbnail: 'http://lorempixel.com/250/150/nature/1/', //миниатюрное изображение
        description : "название эскиза изображения",

    },
    {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    },
    {
        original: '',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
]

const imageLoader = () => {
    return images;
}

export default imageLoader;