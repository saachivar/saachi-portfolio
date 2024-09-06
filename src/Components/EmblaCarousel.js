// EmblaCarouselComponent.jsx
import React, { useRef, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
      loop: true,            // Carousel loops infinitely
      containScroll: 'trim', // Prevents excessive scrolling at the edges
      dragFree: false,       // Set to true if you want to allow drag without snap
   });
  // Function to scroll to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to scroll to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);


  // Optional: Access Embla API for more control
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
      emblaApi.scrollNext(); // Example usage
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          Next
        </button>
    </div>
  );
};

export default EmblaCarouselComponent;
