<script>
export let id;
export let name;
let modalOn = false;
$: modalStyle = "display: " + (modalOn? "block": "none") + ";";

function toggleModalWindow(e) {
    modalOn != modalOn; 
}
</script>

<main>
    <article class="tw">
	<header>
	    <img src="https://picsum.photos/200">
	    <h1 on:click={toggleModalWindow}>
		{name}<br>
		<small>@{id}</small>
	    </h1>
	</header>
	<p>
	    aa
	</p>
	<p>
	    bb
	</p>
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
    <div class="modal" style={modalStyle}>
	<div class="content">
	    <header>
		<img src="https://picsum.photos/200">
		<h1 data-modal-target-id="1">
		    {name}<br>
		    <small>@{id}</small>
		</h1>
	    </header>
	</div>
    </div>

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
