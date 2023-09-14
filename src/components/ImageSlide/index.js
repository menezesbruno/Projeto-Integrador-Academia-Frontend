import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
    render() {
        const images = [
            {
                original: 'img/slide1.jpg',
                thumbnail: 'img/slide1.jpg',
            },
            {
                original: 'img/slide2.jpg',
                thumbnail: 'img/slide2.jpg',
            },
            {
                original: 'img/slide3.jpg',
                thumbnail: 'img/slide3.jpg',
            },
            {
                original: 'img/slide4.jpg',
                thumbnail: 'img/slide4.jpg',
            },
            {
                original: 'img/slide5.jpg',
                thumbnail: 'img/slide5.jpg',
            },
            {
                original: '/img/slide6.jpg',
                thumbnail: '/img/slide6.jpg',
            },
            {
                original: '/img/slide7.jpg',
                thumbnail: 'img/slide7.jpg',
            },
            {
                original: 'img/slide8.jpg',
                thumbnail: 'img/slide8.jpg',
            },
            {
                original: 'img/slide9.jpg',
                thumbnail: 'img/slide9.jpg',
            },
            {
                original: 'img/slide10.jpg',
                thumbnail: 'img/slide10.jpg',
            }
        ]
        return (
            <ImageGallery items={images} autoPlay={false} />
        );
    }
}