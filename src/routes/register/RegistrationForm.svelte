<script lang="ts">
	import { createUser } from '$lib/auth';
	import Fa from 'svelte-fa';
	import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

	let email: string;
	let password: string;
	let confirmPassword: string;
	let errors: {
		email?: string;
		password?: string;
		confirmPassword?: string;
		general?: string;
	} = {};
	function checkPasswordStrength(password: string) {
		const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
		return passwordRegex.test(password);
	}

	async function register() {
		errors = {};
		if (!email) {
			errors.email = 'Required';
		}
		if (!password) {
			errors.password = 'Required';
		}
		if (password.length < 8) {
			errors.password = 'Too short';
		}
		if (!checkPasswordStrength(password)) {
			errors.password = 'Must contain special character';
		}
		if (password !== confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}
		if (Object.keys(errors).length > 0) {
			return;
		}
		try {
			await createUser(email, password);
			await goto('/');
		} catch (error: any) {
			errors.general = error.message;
		}
	}
</script>

<form on:submit|preventDefault={register} class="flex flex-col gap-6">
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Email</span>
			{#if errors.email}
				<span class="label-text-alt badge badge-error">{errors.email}</span>
			{/if}
		</div>
		<div class="input input-bordered flex items-center gap-2 {errors.email && 'input-error'}">
			<Fa icon={faUser} />
			<input type="email" name="email" bind:value={email} class="grow" required />
		</div>
	</label>
	<label class="form-control w-full bg-base text-base-content">
		<div class="label">
			<span class="label-text">Password</span>
			{#if errors.password}
				<span class="label-text-alt badge badge-error">{errors.password}</span>
			{/if}
		</div>
		<div class="input input-bordered flex items-center gap-2 {errors.password && 'input-error'}">
			<Fa icon={faKey} />
			<input type="password" bind:value={password} class="grow" required />
		</div>
	</label>
	<label class="form-control w-full bg-base text-base-content">
		<div class="label">
			<span class="label-text">Confirm Password</span>
			{#if errors.confirmPassword}
				<span class="label-text-alt badge badge-error">{errors.confirmPassword}</span>
			{/if}
		</div>
		<div
			class="input input-bordered flex items-center gap-2 {errors.confirmPassword && 'input-error'}"
		>
			<Fa icon={faKey} />
			<input type="password" bind:value={confirmPassword} class="grow" required />
		</div>
	</label>
	{#if errors.general}
		<p class="text-error">{errors.general}</p>
	{/if}
	<button type="submit" class="btn btn-primary btn-block mt-4">Login</button>
</form>
