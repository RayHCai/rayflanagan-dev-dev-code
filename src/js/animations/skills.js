import gsap from 'gsap';
import { getWidth, getHeight } from '../helpers.js';

export function animateSkills() {
    let landingTitleContainer = document.querySelector('div.landing-title-container');
    let navButtonContainer = document.querySelector('div.nav-button-activate-container');
    let triangle = document.querySelector('div.landing-welcome-square-container');

    gsap.from(landingTitleContainer, {
        autoAlpha: 0,
        x: getWidth(),
        duration: 0.5,
        ease: 'power4'
    });

    gsap.from(triangle, {
        autoAlpha: 0,
        duration: 6,
        delay: 0.5,
        ease: 'power4'
    });

    gsap.from(navButtonContainer, {
        x: 30,
        duration: 0.5,
        ease: 'smooth',
        clearProps: 'all'
    });

    gsap.from(document.querySelector('div#open-container-skills'), {
        autoAlpha: 0,
        duration: 1,
        ease: 'power4',
        clearProps: 'all'
    });
}

export function animateSkillModal() {
    let modal = document.querySelector('div.skill-modal');

    gsap.from(modal, {
        y: -getHeight(),
        duration: 0.7,
        clearProps: 'all',
        ease: 'power4',
        onComplete: () => {
            document.querySelector('div.skill-modal-content').classList.remove('hidden');
            gsap.from(document.querySelector('div.skill-modal-content'), {
                autoAlpha: 0,
                clearProps: 'all'
            });
        }
    });
}

export function animateSkillModalLeave() {
    let modal = document.querySelector('div.skill-modal');

    gsap.to(modal, {
        y: -getHeight(),
        duration: 0.7,
        clearProps: 'all',
        ease: 'power4',
        onComplete: () => {
            document.querySelector('div.skill-modal').classList.add('hidden');
        }
    });
    
    gsap.to(document.querySelector('div.skill-modal-content'), {
        autoAlpha: 0,
        clearProps: 'all',
        onComplete: () => {
            document.querySelector('div.skill-modal-content').classList.add('hidden');
        }
    });
}