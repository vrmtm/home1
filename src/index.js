import './index.css';
import 'particles.js';

let partQty = window.innerWidth / 10;
particlesJS('app', {
  particles: {
    number: {
      value: partQty,
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 2,
    },
    line_linked: {
      enable_auto: true,
      distance: 150,
      color: '#fff',
      opacity: 0.5,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
    },
  },
});
