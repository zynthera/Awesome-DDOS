// Animate header on page load
anime({
  targets: "#main-title",
  translateY: [-80, 0],
  opacity: [0, 1],
  color: [
    { value: '#646cff', duration: 800 },
    { value: '#14e956', duration: 800 }
  ],
  duration: 1800,
  easing: 'easeOutExpo'
});

// Lens.js effect (subtle light follows mouse)
lens('#lens', {
  radius: 120,
  strength: 1.3,
  blur: 0.32,
  color: '#7ee7ff44',
  fade: 200,
  shadow: true
});

// Barbajs page transition (will work for multi-page sites)
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return anime({
        targets: data.current.container,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutQuad'
      }).finished;
    },
    enter(data) {
      return anime({
        targets: data.next.container,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad'
      }).finished;
    }
  }]
});

// Extra: Animate features list in
anime({
  targets: '.features-list li',
  translateX: [-40, 0],
  opacity: [0, 1],
  delay: anime.stagger(60, {start: 800}),
  duration: 700,
  easing: 'easeOutBack'
});