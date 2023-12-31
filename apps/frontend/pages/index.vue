<script lang="ts" setup>
	const { data, pending } = useLazyAsyncData('users', () => $fetch('/api/login'))
</script>
<template>
	<div>
		<div v-if="pending">Loading....</div>
		<div v-else>
			<h1>appName = {{ useRuntimeConfig().public.appName }}</h1>
			<pre>{{ JSON.stringify(data, null, 2) }}</pre>
		</div>
	</div>
</template>
