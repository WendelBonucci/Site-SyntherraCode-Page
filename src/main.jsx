import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Community from './components/Community'
import Join from './components/Uniting'
import './index.css'
import { register } from 'swiper/element/bundle';
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import Uniting from './components/Uniting'


createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <Home />
    <About />
    <Community />
    <Join />
  </div>
)
