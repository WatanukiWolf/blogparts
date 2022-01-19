<script lang='typescript'>
import type { Account } from './class/Account';

export let user: Account;
export let on: boolean = false;

$: modalStyle = "display: " + (on? "block": "none") + ";";
$: paragraphs = user.profile.split('\n');
</script>

<div class="modal" style={modalStyle}>
    <div class="content" on:click={e => {on = !on}}>
	<header>
	    <img src="https://picsum.photos/200">
	    <h1 data-modal-target-id="1">
		{user.name}<br>
		<small>@{user.id}</small>
	    </h1>
	    <p>
	    {user.stars['tw']} follower{user.stars['tw'] == 1? '': 's'}
	    </p>
	</header>
	{#each paragraphs as p}
	    <p>{p}</p>
	{/each}
    </div>
</div>


<style>
    .modal {
	/* display: none; */
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	overflow: auto;
	background-color: rgba(0,0,0,0.5);
	text-align: center;
    }
    .modal .content {
	border-radius: 10px;
	width: 500px;
	background-color: white;
	margin: 0 auto;
    }
    .modal header {
	text-align: left;
	margin: 10px;
    }
    .modal header h1 {
	font-size: 1.2em;
	vertical-align: middle;
	margin: 0px;
	display: inline-block;
    }
    .modal header img {
	width: 2.5em;
	height: 2.5em;
	border-radius: 25px;
	vertical-align: middle;
	margin: 10px;
	display: inline-block;
    }
</style>
