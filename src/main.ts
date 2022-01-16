import App from './App.svelte';
import { Account } from './class/Account';
import { TwPost }  from './class/TwPost';

let helloworld = new Account({
    id: 'World',
    name: 'Hello',
    profile: 'I\'m Hello'
});
let post = new TwPost({ text: 'line1\nline2' });
post.attachAccount(helloworld);

const app = new App({
	target: document.body,
	props: {
	    user: helloworld,
	    post: post,
	}
});

export default app;
