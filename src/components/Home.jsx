import '../styles/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { EffectFade } from 'swiper/modules';

// Importando imagens
import Slide01Desktop from '../images/descktop-1.png';
import Slide02Desktop from '../images/descktop-2.png';
import Slide03Desktop from '../images/descktop-3.png';
import Slide04Desktop from '../images/descktop-4.png';

import Slide01Mobile from '../images/mobile-1.png';
import Slide02Mobile from '../images/mobile-2.png';
import Slide03Mobile from '../images/mobile-3.png';
import Slide04Mobile from '../images/mobile-4.png';

function Home() {
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [slides, setSlides] = useState([]);

    // Função que atualiza imagens conforme tamanho da tela
    function handleResize() {
        if (window.innerWidth < 720) {
            setSlidesPerView(1);
            setSlides([
                { id: 1, image: Slide01Mobile },
                { id: 2, image: Slide02Mobile },
                { id: 3, image: Slide03Mobile },
                { id: 4, image: Slide04Mobile },
            ]);
        } else {
            setSlidesPerView(1);
            setSlides([
                { id: 1, image: Slide01Desktop },
                { id: 2, image: Slide02Desktop },
                { id: 3, image: Slide03Desktop },
                { id: 4, image: Slide04Desktop },
            ]);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='Config-Global-Home' id='Inicio'>
            <Swiper
                modules={[EffectFade]}
                effect='fade'
                slidesPerView={slidesPerView}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                speed={1100}
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='Box-Slide-Item-Hom'>
                            <div
                                style={{
                                    background: `url(${item.image}) no-repeat center center`,
                                    backgroundSize: 'cover'
                                }}
                                className='Slide-Item-Home'
                            ></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='Particulas'></div>
        </section>
    );
}

export default Home;