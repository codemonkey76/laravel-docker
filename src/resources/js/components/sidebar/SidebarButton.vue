<template>
    <button @click="$emit('click')" class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: menu-alt-1 -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </button>
</template>

<script>
export default {
    name: "SidebarButton"
}
</script>

<style scoped>

</style>
