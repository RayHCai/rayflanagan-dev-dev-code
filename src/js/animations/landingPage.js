import gsap from 'gsap';
import { getWidth } from '../helpers.js';

export function animateLandingPage() {
    let landingMessageFrag1 = document.querySelector('p.landing-welcome-sentence1');
    let landingMessageFrag2 = document.querySelector('p.landing-welcome-state');
    let navButtonContainer = document.querySelector('div.nav-button-activate-container');
    let landingTitleContainer = document.querySelector('div.landing-title-container');
    let triangle = document.querySelector('div.landing-welcome-triangle-container');

    gsap.from(landingMessageFrag1, {
        y: 100,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power4'
    });

    gsap.from(landingMessageFrag2, {
        y: -100,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power4'
    });

    gsap.from(navButtonContainer, {
        x: 30,
        duration: 0.7,
        ease: 'smooth',
        clearProps: 'all'
    });

    gsap.from(landingTitleContainer, {
        autoAlpha: 0,
        x: getWidth(),
        duration: 0.7,
        ease: 'power4'
    });

    gsap.from(triangle, {
        autoAlpha: 0,
        duration: 6,
        delay: 0.5,
        ease: 'power4'
    });
}
