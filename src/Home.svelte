<script lang='typescript'>
import TwPost from './TwPost.svelte';
import TwModalWindow from './TwModalWindow.svelte';
import type { Account } from './class/Account';
import type { TwPost as TwPostClass } from './class/TwPost';

export let user: Account;
export let post: TwPostClass;

let modalOn: boolean = false;

function toggleModalWindow(e) {
    modalOn = !modalOn; 
}
</script>

<main>
    <TwPost post={post} clickOnHeaderHandler={toggleModalWindow} />
    <TwModalWindow bind:on={modalOn} user={user} />
</main>

<style>
    
</style>
