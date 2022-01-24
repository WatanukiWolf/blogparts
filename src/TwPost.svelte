<script lang='typescript'>
import type { TwPost } from './class/TwPost';
import { push } from 'svelte-spa-router'

export let post: TwPost;
export let clickOnHeaderHandler: (e) => void = (e) => {};

</script>

<article class="tw">
    <header>
	<img src="https://picsum.photos/200">
	<h1 on:click={clickOnHeaderHandler}>
	    {post.user.name}<br>
	    <small>@{post.user.id}</small>
	</h1>
    </header>
    {#each post.paragraphs as p}
	<p>{p}</p>
    {/each}
    <footer>
	<time>2022-01-09</time>
	<hr>
	<p>
	10 Shared, 1 Liked
	</p>
	<ul class="btn-group">
	    <li><button on:click={() => push('/not_found')}>LIKE</button></li>
	    <li><button>SHARE</button></li>
	</ul>
    </footer>
</article>

<style>
    .tw {
	border: 1px solid black;
	border-radius: 10px;
    }
    .tw header {
	margin: 10px;
    }
    .tw header h1 {
	font-size: 1.2em;
	vertical-align: middle;
	margin: 0px;
	display: inline-block;
    }
    .tw header img {
	width: 2.5em;
	height: 2.5em;
	border-radius: 25px;
	vertical-align: middle;
	margin: 10px;
	display: inline-block;
    }
    .tw p {
	margin: auto 10px;
    }
    .tw footer {
	margin: 10px;
	overflow: hidden;
    }
    .tw ul.btn-group {
	margin: 0px;
	padding: 0px;
	float: right;
    }
    .tw ul.btn-group li {
	display: inline-block;
	margin: 0px;
    }
    .tw footer button {
    }
    .tw footer time {
    }
    .tw footer p {
	float: left;
    }
</style>
