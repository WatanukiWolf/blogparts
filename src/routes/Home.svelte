<script lang='typescript'>
import TwPost from 'components/TwPost.svelte';
import TwModalWindow from 'components/TwModalWindow.svelte';
import type { Account } from 'class/Account';
import type { TwPost as TwPostClass } from 'class/TwPost';

import json from '../data/data.json';

export let user: Account;
export let post: TwPostClass;

let modalOn: boolean = false;

function toggleModalWindow(e) {
    modalOn = !modalOn; 
    console.log(json);
}
</script>

<main>
    <TwPost post={post} clickOnHeaderHandler={toggleModalWindow} />
    <TwModalWindow bind:on={modalOn} user={user} />
</main>

<style>
    
</style>
