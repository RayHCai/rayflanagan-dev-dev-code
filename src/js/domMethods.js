import { animationNavEnter, animationNavExit } from './animations.js';
import { animateSkillModal, animateSkillModalLeave } from './animations/skills.js';

export function loadDomMethods(namespace) {
    let navButtonContainer = document.querySelector('div.nav-button-activate-container');
    let navButtonExitContainer = document.querySelector('div.nav-button-close-container');

    navButtonExitContainer.addEventListener('click', () => {
        animationNavExit();
    });
    
    navButtonContainer.addEventListener('click', () => {
        navButtonContainer.classList.add('hidden');
        animationNavEnter();
    });

    if(namespace == 'skills') {
        let activeLang = '';

        document.querySelectorAll('div#skill-main').forEach((el) => {
            el.addEventListener('click', () => {
                activeLang = el.getAttribute('lang');
                document.querySelector('div.skill-modal').classList.remove('hidden');
                document.querySelector(`div.${activeLang}-container`).classList.remove('hidden');
                document.querySelector('div#content-container').classList.add('hidden');
            
                animateSkillModal();
            });
        });
    
        document.querySelector('div.modal-close').addEventListener('click', () => {
            document.querySelector('div#content-container').classList.remove('hidden');

            document.querySelectorAll('div.lang-container').forEach((el) => {
                el.classList.add('hidden');
            });
            
            animateSkillModalLeave();
        });
    }
};
