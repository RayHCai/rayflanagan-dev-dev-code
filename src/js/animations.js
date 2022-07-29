import gsap from 'gsap';
import { getWidth, getHeight } from './helpers.js';
import { animateLandingPage } from './animations/landingPage.js';
import { animatePortfolio } from './animations/portfolio.js';
import { animateSkills } from './animations/skills.js';

function animateNavReturn() {
    let navButton = document.querySelector('div.nav-button-activate-container');
    navButton.classList.remove('hidden');

    gsap.from(navButton, {
        x: 30,
        duration: 0.7,
        clearProps: 'all',
        ease: 'smooth'
    });
}

export function pageOnLoad(obj) {
    // On Page Load Animation
    let tl = gsap.timeline();

    let curPage = obj.namespace;

    let pageloadMessage = document.querySelector('h1.pageload-message');
    let pageloadContainer = document.querySelector('div.pageload-container');

    document.querySelector('div#content-container').classList.add('hidden');

    tl.to(pageloadMessage, {
        autoAlpha: 0,
        y: -25,
        duration: 0.5,
        ease: 'smooth',
        delay: 0.7
    });

    tl.to(pageloadContainer, {
        y: -getHeight(),
        duration: 1.7,
        ease: 'power4',
        clearProps: 'all',
        delay: 0.1,
        onComplete: () => {
            // add hidden class to pageload-container
            pageloadContainer.classList.add('hidden');
            document.querySelector('div#content-container').classList.remove('hidden');

            gsap.to(pageloadMessage, {
                clearProps: 'all'
            });

            if(curPage == 'landing') {   
                document.querySelector('div.landing').classList.remove('hidden');
                
                animateLandingPage();
            }
            else if(curPage == 'portfolio') {
                animatePortfolio();
            }
            else {
                animateSkills();
            }
        }
    });
}

export function animationNavEnter() {
    let nav = document.querySelector('nav');
    let navLinks = document.querySelector('div.nav-links-container');

    nav.classList.remove('hidden');
    document.querySelector('div.nav-button-activate-container').classList.add('hidden');

    gsap.from(nav, {
        x: -getWidth(),
        duration: 0.5,
        clearProps: 'all',
        onComplete: () => {
            let linkTl = gsap.timeline();

            for(let i = 0; i < navLinks.children.length; i++) {
                let c = navLinks.children[i];

                if (i == 0) {
                    linkTl.from(c, {
                        y: getHeight(),
                        duration: .2,
                        clearProps: 'all',
                        ease: 'power4',
                        onComplete: () => { 
                            navLinks.classList.remove('hidden'); 
                            document.querySelector('div.nav-button-close-container').classList.remove('hidden'); 

                            gsap.from(document.querySelector('div.nav-button-close-container'), {
                                autoAlpha: 0,
                                duration: 1,
                                ease: 'power4'
                            });
                        }
                    });  
                }
                else {
                    linkTl.from(c, {
                        y: getHeight(),
                        duration: .3,
                        clearProps: 'all',
                        ease: 'power4',
                        delay: 0.02
                    });
                }
            }
            
        }
    });
}

export function animationNavExit() {
    let navLinks = document.querySelector('div.nav-links-container');
    let navCloseContainer = document.querySelector('div.nav-button-close-container');

    function animateNavBgLeave() {
        let nav = document.querySelector('nav');

        gsap.to(nav, {
            x: -getWidth(),
            duration: 0.5,
            clearProps: 'all',
            onComplete: () => {
                nav.classList.add('hidden');
                document.querySelector('footer').classList.remove('hidden');
                document.querySelector('div.container').classList.remove('hidden');
                animateNavReturn();
            }
        });
    }

    let linkTl = gsap.timeline();

    for(let i = 0; i < navLinks.children.length; i++) {
        let c = navLinks.children[i];

        if (i == 0) {
            linkTl.to(c, {
                y: -getHeight(),
                autoAlpha: 0,
                duration: .1,
                ease: 'power4'
            });
        }
        else if(i == navLinks.children.length - 1) {
            linkTl.to(c, {
                y: -getHeight(),
                autoAlpha: 0,
                duration: .1,
                delay: 0.05,
                ease: 'power4',
                onComplete: () => { 
                    navLinks.classList.add('hidden'); 
                    gsap.to(navCloseContainer, {
                        autoAlpha: 0,
                        x: -200,
                        clearProps: 'all',
                        duration: .2,
                        onComplete: () => {
                            animateNavBgLeave(); 
                            navCloseContainer.classList.add('hidden');
                        }
                    });

                }
            });
        }
        else {
            linkTl.to(c, {
                y: -getHeight(),
                autoAlpha: 0,
                duration: .1,
                delay: 0.05,
                ease: 'power4'
            });
        }
    } 
}

export function amimPageLeave(obj, done) {
    let pageloadContainer = obj.container.querySelector('div.pageload-container');
    let pageloadMessage = document.querySelector('h1.pageload-message');

    document.getElementById('content-container').classList.add('hidden');
    pageloadMessage.classList.add('hidden');
    pageloadContainer.classList.remove('hidden');

    gsap.from(pageloadContainer, {
        y: -getHeight(),
        duration: 1,
        ease: 'power4',
        onComplete: () => {
            done();
        }
    });
}
