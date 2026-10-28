/* Local, dependency-free interactions; Bootstrap's layout and styling are retained. */
(function () {
  'use strict';
  var toggle = document.querySelector('.navbar-toggle');
  var menu = document.getElementById('navbar-collapse-1');
  function closeMenu() {
    if (!toggle || !menu) return;
    menu.classList.remove('in');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.add('collapsed');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('collapsed', !open);
      menu.classList.toggle('in', open);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
    });
    menu.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
  }
  var carousel = document.getElementById('carousel');
  if (!carousel) return;
  var track = carousel.querySelector('.carousel-inner');
  var slides = Array.prototype.slice.call(track.querySelectorAll('.item'));
  var count = carousel.querySelector('.carousel-count');
  var playButton = carousel.querySelector('[data-carousel-toggle]');
  if (slides.length < 2) return;
  var current = 0;
  var position = 1;
  var moving = false;
  var timer;
  var transitionTimer;
  var hovered = false;
  var focused = false;
  var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var playing = !motionPreference.matches;
  var interval = Number(carousel.getAttribute('data-interval')) || 5000;

  // Extra slides allow the last-to-first transition to keep moving forwards.
  function cloneSlide(slide) {
    var clone = slide.cloneNode(true);
    clone.hidden = false;
    clone.classList.remove('active');
    clone.setAttribute('data-carousel-clone', '');
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('inert', '');
    clone.querySelector('img').loading = 'eager';
    return clone;
  }
  track.insertBefore(cloneSlide(slides[slides.length - 1]), slides[0]);
  track.appendChild(cloneSlide(slides[0]));
  slides.forEach(function (slide) { slide.hidden = false; });

  function updateSlideState() {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      if (i === current) slide.removeAttribute('inert');
      else slide.setAttribute('inert', '');
    });
    if (count) count.textContent = (current + 1) + ' / ' + slides.length;
  }
  function jumpToPosition() {
    track.classList.add('without-transition');
    track.style.transform = 'translateX(' + (-position * 100) + '%)';
    void track.offsetWidth;
    track.classList.remove('without-transition');
  }
  function finishTransition() {
    if (!moving) return;
    window.clearTimeout(transitionTimer);
    if (position === 0) { position = slides.length; jumpToPosition(); }
    else if (position === slides.length + 1) { position = 1; jumpToPosition(); }
    moving = false;
  }
  function show(direction) {
    if (moving) return;
    moving = true;
    position += direction;
    current = (current + direction + slides.length) % slides.length;
    updateSlideState();
    track.style.transform = 'translateX(' + (-position * 100) + '%)';
    // Reduced-motion mode has no transitionend event.
    transitionTimer = window.setTimeout(finishTransition, motionPreference.matches ? 0 : 650);
  }
  function updatePlayback() {
    window.clearInterval(timer);
    if (playButton) {
      playButton.textContent = playing ? 'Pause' : 'Play';
      playButton.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    }
    track.setAttribute('aria-live', playing ? 'off' : 'polite');
    if (playing && !hovered && !focused && !document.hidden) {
      timer = window.setInterval(function () { show(1); }, interval);
    }
  }
  track.addEventListener('transitionend', function (event) {
    if (event.target === track && event.propertyName === 'transform') finishTransition();
  });
  carousel.querySelectorAll('[data-carousel]').forEach(function (button) {
    button.addEventListener('click', function () {
      show(button.getAttribute('data-carousel') === 'next' ? 1 : -1);
      updatePlayback();
    });
  });
  if (playButton) playButton.addEventListener('click', function () {
    playing = !playing;
    // Explicit Play takes effect even while the playback control has focus.
    focused = false;
    updatePlayback();
  });
  carousel.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      show(event.key === 'ArrowRight' ? 1 : -1);
      updatePlayback();
    }
  });
  track.addEventListener('mouseenter', function () { hovered = true; updatePlayback(); });
  track.addEventListener('mouseleave', function () { hovered = false; updatePlayback(); });
  carousel.addEventListener('focusin', function () { focused = true; updatePlayback(); });
  carousel.addEventListener('focusout', function (event) {
    if (!carousel.contains(event.relatedTarget)) { focused = false; updatePlayback(); }
  });
  document.addEventListener('visibilitychange', updatePlayback);
  function motionChanged() { playing = !motionPreference.matches; updatePlayback(); }
  if (motionPreference.addEventListener) motionPreference.addEventListener('change', motionChanged);
  else motionPreference.addListener(motionChanged);
  updateSlideState();
  jumpToPosition();
  updatePlayback();
}());
