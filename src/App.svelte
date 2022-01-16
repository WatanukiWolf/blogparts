<script lang='typescript'>
import ModalWindow from './ModalWindow.svelte';
import Account from './class/Account';

export let user: Account;
export let body: string;

let modalOn: boolean = false;
$: paragraphs = body.split('\n');

function toggleModalWindow(e) {
    modalOn = !modalOn; 
}
</script>

<main>
    <article class="tw">
	<header>
	    <img src="https://picsum.photos/200">
	    <h1 on:click={toggleModalWindow}>
		{user.name}<br>
		<small>@{user.id}</small>
	    </h1>
	</header>
	{#each paragraphs as p}
	    <p>{p}</p>
	{/each}
	<footer>
	    <time>2022-01-09</time>
	    <hr>
	    <p>
	    10 Shared, 1 Liked
	    </p>
	    <ul class="btn-group">
		<li><button>LIKE</button></li>
		<li><button>SHARE</button></li>
	    </ul>
	</footer>
    </article>
    <ModalWindow bind:on={modalOn} user={user} />
</main>

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
