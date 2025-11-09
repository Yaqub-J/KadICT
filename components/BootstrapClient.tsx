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

        // Store swiper instances for cleanup
        const swiperInstances: any[] = [];

        // Initialize Swiper instances with a delay to ensure DOM is ready
        const initializeSwipers = () => {
          // Destroy existing instances
          swiperInstances.forEach(instance => {
            if (instance && typeof instance.destroy === 'function') {
              instance.destroy(true, true);
            }
          });
          swiperInstances.length = 0;

          // Initialize .slides-1 swipers
          const slides1Elements = document.querySelectorAll('.slides-1');
          if (slides1Elements.length > 0) {
            slides1Elements.forEach((swiperEl) => {
              const instance = new Swiper(swiperEl as HTMLElement, {
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
              swiperInstances.push(instance);
            });
          }

          // Initialize .slides-3 swipers
          const slides3Elements = document.querySelectorAll('.slides-3');
          if (slides3Elements.length > 0) {
            slides3Elements.forEach((swiperEl) => {
              const instance = new Swiper(swiperEl as HTMLElement, {
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
              swiperInstances.push(instance);
            });
          }
        };

        // Initialize immediately
        setTimeout(initializeSwipers, 100);

        // Re-initialize when navigating back to page
        const handleRouteChange = () => {
          setTimeout(initializeSwipers, 100);
        };

        // Listen for popstate (browser back/forward)
        window.addEventListener('popstate', handleRouteChange);

        // MutationObserver to detect when swiper elements are added to DOM
        const observer = new MutationObserver((mutations) => {
          const hasSwiperElements = mutations.some(mutation => {
            return Array.from(mutation.addedNodes).some((node: any) => {
              return node.nodeType === 1 && (
                node.classList?.contains('slides-1') ||
                node.classList?.contains('slides-3') ||
                node.querySelector?.('.slides-1') ||
                node.querySelector?.('.slides-3')
              );
            });
          });

          if (hasSwiperElements) {
            setTimeout(initializeSwipers, 100);
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Cleanup function
        return () => {
          window.removeEventListener('popstate', handleRouteChange);
          observer.disconnect();
          swiperInstances.forEach(instance => {
            if (instance && typeof instance.destroy === 'function') {
              instance.destroy(true, true);
            }
          });
        };

        // Scroll top button
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
          const scrollTopElement = scrollTop as HTMLElement;
          const toggleScrollTop = () => {
            if (window.scrollY > 100) {
              scrollTopElement.classList.add('active');
            } else {
              scrollTopElement.classList.remove('active');
            }
          };
          window.addEventListener('load', toggleScrollTop);
          window.addEventListener('scroll', toggleScrollTop);

          scrollTopElement.addEventListener('click', (e) => {
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
          const preloaderElement = preloader as HTMLElement;
          setTimeout(() => {
            preloaderElement.remove();
          }, 100);
        }
      }
    };

    loadScripts();
  }, []);

  return null;
}
