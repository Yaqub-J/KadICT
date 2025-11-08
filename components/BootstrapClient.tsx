'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Import Bootstrap JS on client side
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Import vendor scripts
    const loadScripts = async () => {
      if (typeof window !== 'undefined') {
        // Load AOS
        const AOS = (await import('aos')).default;
        // @ts-ignore - CSS import
        await import('aos/dist/aos.css');
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });

        // Load GLightbox
        const GLightbox = (await import('glightbox')).default;
        // @ts-ignore - CSS import
        await import('glightbox/dist/css/glightbox.min.css');
        GLightbox({
          selector: '.glightbox'
        });

        // Load Swiper
        const Swiper = (await import('swiper')).default;
        const { Navigation, Pagination, Autoplay } = await import('swiper/modules');
        // @ts-ignore - CSS import
        await import('swiper/css');
        // @ts-ignore - CSS import
        await import('swiper/css/navigation');
        // @ts-ignore - CSS import
        await import('swiper/css/pagination');

        // Initialize Swiper instances with a delay to ensure DOM is ready
        const initializeSwipers = () => {
          // Initialize .slides-1 swipers
          const slides1Elements = document.querySelectorAll('.slides-1');
          if (slides1Elements.length > 0) {
            slides1Elements.forEach((swiperEl) => {
              if (!swiperEl.classList.contains('swiper-initialized')) {
                new Swiper(swiperEl as HTMLElement, {
                  modules: [Navigation, Pagination, Autoplay],
                  speed: 600,
                  loop: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                  },
                  slidesPerView: 1,
                  pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }
                });
              }
            });
          }

          // Initialize .slides-3 swipers
          const slides3Elements = document.querySelectorAll('.slides-3');
          if (slides3Elements.length > 0) {
            slides3Elements.forEach((swiperEl) => {
              if (!swiperEl.classList.contains('swiper-initialized')) {
                new Swiper(swiperEl as HTMLElement, {
                  modules: [Navigation, Pagination, Autoplay],
                  speed: 600,
                  loop: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  },
                  slidesPerView: 1,
                  spaceBetween: 40,
                  centeredSlides: true,
                  pagination: {
                    el: swiperEl.querySelector('.swiper-pagination') as HTMLElement,
                    type: 'bullets',
                    clickable: true
                  },
                  breakpoints: {
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      centeredSlides: false
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                      centeredSlides: false
                    }
                  }
                });
              }
            });
          }
        };

        // Initialize immediately
        initializeSwipers();

        // Also initialize on DOM content loaded and window load as fallback
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initializeSwipers);
        }
        window.addEventListener('load', initializeSwipers);

        // Scroll top button
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
          const toggleScrollTop = () => {
            if (window.scrollY > 100) {
              scrollTop.classList.add('active');
            } else {
              scrollTop.classList.remove('active');
            }
          };
          window.addEventListener('load', toggleScrollTop);
          window.addEventListener('scroll', toggleScrollTop);

          scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        }

        // Preloader - remove immediately
        const preloader = document.querySelector('#preloader');
        if (preloader) {
          setTimeout(() => {
            preloader.remove();
          }, 100);
        }
      }
    };

    loadScripts();
  }, []);

  return null;
}
