import React, { Component} from 'react';
import Slider from 'react-slick';
import '../components/styles.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import foto from '../assets/series/filme1.jpg';
import foto3 from '../assets/series/filme3.jpg';
import foto5 from '../assets/series/filme5.jpg';
import foto7 from '../assets/series/filme7.jpg';
import foto9 from '../assets/series/filme9.jpg';
import foto11 from '../assets/series/filme11.jpg';

export default class SliderComponent extends Component{
    render(){

        const series = [
            {
            nome : 'Dia do sim',
            url : foto,
            },
            {
                nome : 'Dia do sim',
                url : foto3,
            },
            {
                nome : 'Dia do sim',
                url : foto5,
            },  
            {
                nome : 'Dia do sim',
                url : foto7,
            }, 
            {
                nome : 'Dia do sim',
                url : foto9,
            },  
            {
                nome : 'Dia do sim',
                url : foto11,
            },   
        ];

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "20px",
            slidesToShow: 4,
            speed: 500,
            arrows:true,
            dots: false,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
          };

        return(
            <div>
                <Slider {...settings}>
                {series.map((serie) => {
                    return(
                    <div>  
                        <div key={serie} className="card">
                            <img src={serie.url} alt="Series" width="110%" height="130px"/>
                        </div>
                    </div>    
                    )
                })}
                </Slider>   
            </div>
        );
    }
}
