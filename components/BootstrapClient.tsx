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
        await import('aos/dist/aos.css');
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });

        // Load GLightbox
        const GLightbox = (await import('glightbox')).default;
        await import('glightbox/dist/css/glightbox.min.css');
        GLightbox({
          selector: '.glightbox'
        });

        // Load Swiper
        const Swiper = (await import('swiper')).default;
        const { Navigation, Pagination, Autoplay } = await import('swiper/modules');
        await import('swiper/css');
        await import('swiper/css/navigation');
        await import('swiper/css/pagination');

        // Initialize Swiper instances
        new Swiper('.slides-1', {
          modules: [Navigation, Pagination, Autoplay],
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
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

        new Swiper('.slides-3', {
          modules: [Navigation, Pagination, Autoplay],
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1
            }
          }
        });

        // Mobile navigation toggle
        const mobileNavShow = document.querySelectorAll('.mobile-nav-show');
        const mobileNavHide = document.querySelectorAll('.mobile-nav-hide');

        mobileNavShow.forEach(el => {
          el.addEventListener('click', function() {
            document.querySelector('.navbar')?.classList.add('navbar-mobile');
            this.classList.add('d-none');
            document.querySelector('.mobile-nav-hide')?.classList.remove('d-none');
          });
        });

        mobileNavHide.forEach(el => {
          el.addEventListener('click', function() {
            document.querySelector('.navbar')?.classList.remove('navbar-mobile');
            this.classList.add('d-none');
            document.querySelector('.mobile-nav-show')?.classList.remove('d-none');
          });
        });

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
