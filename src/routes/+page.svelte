<script lang="ts">
	import { goto } from "$app/navigation";
	import type { PageData } from "./$types";

	export let data: PageData;

	const signOut = async () => {
		const response = await fetch("/logout", {
			method: "POST"
		});
		const body = await response.json();
		console.log(body.message); // "logout successful"
		goto("/login"); // create  a  new  page  history  entry  (`replaceState`  is  false  by  default  here)
	};
</script>

<h1>Hi, {data.user.name}!</h1>
<img src={data.user.picture} height="100px" width="100px" alt="profile" />
<p>Email: {data.user.email}</p>

<button on:click={signOut}>Sign out</button>
