import gsap from 'gsap';
import { getWidth } from '../helpers.js';

export function animatePortfolio() {
    let landingTitleContainer = document.querySelector('div.landing-title-container');
    let navButtonContainer = document.querySelector('div.nav-button-activate-container');

    gsap.from(landingTitleContainer, {
        autoAlpha: 0,
        x: getWidth(),
        duration: 0.7,
        ease: 'power4'
    });

    gsap.from(navButtonContainer, {
        x: 30,
        duration: 0.7,
        ease: 'smooth',
        clearProps: 'all'
    });
}
