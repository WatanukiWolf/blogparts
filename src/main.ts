import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	    id: 'World',
	    name: 'Hello',
	    body: 'line1\nline2',
	}
});

export default app;
