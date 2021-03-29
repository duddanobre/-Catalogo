import React, { Component} from 'react';
import Slider from 'react-slick';
import '../components/styles.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import foto2 from '../assets/series/filme2.jpg';
import foto4 from '../assets/series/filme4.jpg';
import foto6 from '../assets/series/filme6.jpg';
import foto8 from '../assets/series/filme8.jpg';
import foto10 from '../assets/series/filme10.jpg';
import foto12 from '../assets/series/filme12.jpg';

export default class SliderComponent2 extends Component{
    render(){

        const filmes = [
            {
                nome : 'Dia do sim',
                url : foto2,
            },
            {
                nome : 'Dia do sim',
                url : foto4,
            },  
            {
                nome : 'Dia do sim',
                url : foto6,
            }, 
            {
                nome : 'Dia do sim',
                url : foto8,
            }, 
            {
                nome : 'Dia do sim',
                url : foto10,
            },   
            {
                nome : 'Dia do sim',
                url : foto12,
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
                {filmes.map((filme) => {
                    return(
                    <div>  
                        <div key={filme} className="card">
                            <img src={filme.url} alt="Filmes" width="110%" height="130px"/>
                        </div>
                    </div>    
                    )
                })}
                </Slider>   
            </div>
        );
    }
}
