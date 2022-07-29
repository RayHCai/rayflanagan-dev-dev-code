import barba from '@barba/core';
import { pageOnLoad, amimPageLeave } from './animations.js';
import { loadDomMethods } from './domMethods.js';

barba.init({
	transitions: [
		{
			once({next}) {
				loadDomMethods(next.namespace);

				pageOnLoad(next);
			},
			leave({current}) {
				const done = this.async()
				amimPageLeave(current, done);
			},
			after({next}) {
				loadDomMethods(next.namespace);
				pageOnLoad(next);
			},
		}
	]
});
