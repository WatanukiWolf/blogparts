import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	    id: 'World',
	    name: 'Hello'
	}
});

export default app;
