import App from './App.svelte';
import Account from './class/Account';

const app = new App({
	target: document.body,
	props: {
	    user: new Account({
		id: 'World',
		name: 'Hello',
		profile: 'I\'m Hello'
	    }),
	    body: 'line1\nline2',
	}
});

export default app;
