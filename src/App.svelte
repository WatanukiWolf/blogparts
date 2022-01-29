<script lang='typescript'>
import Router from 'svelte-spa-router'
import { wrap } from 'svelte-spa-router/wrap'

import { Account } from './class/Account';
import { TwPost }  from './class/TwPost';

import Home from './routes/Home.svelte'
import NotFound from './routes/NotFound.svelte'

let helloworld = new Account({
    id: 'World',
    name: 'Hello',
    profile: 'I\'m Hello'
});
let post = new TwPost({ text: 'line1\nline2' });
post.attachAccount(helloworld);

const routes = {
    '/not_found': NotFound,
    '*': wrap({
	component: Home,
	props: {
	    user: helloworld,
	    post: post
	}}),
}
</script>

<main>
    <Router routes={routes} />
</main>

<style>
    
</style>
