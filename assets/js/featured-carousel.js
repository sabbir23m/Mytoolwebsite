/**
 * Featured Tools Carousel / Image Showcase Slider for Homepage
 * Smooth left-right sliding with auto-play, pause on hover, dots, and touch support.
 */
(function () {
  'use strict';

  function initCarousel() {
    var carousel = document.getElementById('featured-carousel');
    if (!carousel) return;

    var track = carousel.querySelector('.carousel-track');
    var slides = carousel.querySelectorAll('.carousel-slide');
    var prevBtn = carousel.querySelector('.carousel-btn.prev');
    var nextBtn = carousel.querySelector('.carousel-btn.next');
    var dotsContainer = carousel.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    var currentIndex = 0;
    var totalSlides = slides.length;
    var autoPlayTimer = null;
    var isHovered = false;

    // Create indicator dots
    dotsContainer.innerHTML = '';
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.dataset.index = i;
      dot.addEventListener('click', function (e) {
        var idx = parseInt(e.currentTarget.dataset.index, 10);
        goToSlide(idx);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }

    var dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('active', j === currentIndex);
      }
      for (var k = 0; k < slides.length; k++) {
        slides[k].classList.toggle('active', k === currentIndex);
      }
    }

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
        resetAutoPlay();
      });
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(function () {
        if (!isHovered) {
          nextSlide();
        }
      }, 4500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    carousel.addEventListener('mouseenter', function () {
      isHovered = true;
    });

    carousel.addEventListener('mouseleave', function () {
      isHovered = false;
    });

    // Touch support for mobile swipe
    var touchStartX = 0;
    var touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resetAutoPlay();
      }
    }, { passive: true });

    updateCarousel();
    startAutoPlay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
