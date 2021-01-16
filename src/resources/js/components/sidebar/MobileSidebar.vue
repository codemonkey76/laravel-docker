<template>
    <transition leave-active-class="duration-300">
        <div v-show="open" class="lg:hidden">
            <div class="fixed inset-0 flex z-40">
                <transition
                    enter-active-class="transition-opacity ease-linear duration-300"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-linear duration-300"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="open" class="fixed inset-0">
                        <div class="absolute inset-0 bg-gray-600 opacity-75" aria-hidden="true"></div>
                    </div>
                </transition>

                <transition
                    enter-active-class="transition ease-in-out duration-300 transform"
                    enter-class="-translate-x-full"
                    enter-to-class="-translate-x-full"
                    leave-active-class="transition ease-in-out duration-300 transform"
                    leave-class="translate-x-0"
                    leave-to-class="-translate-x-full"
                >
                    <div v-show="open" class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                        <div class="absolute top-0 right-0 -mr-12 pt-2">
                            <button @click="$emit('close')" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span class="sr-only">Close sidebar</span>
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-shrink-0 flex items-center px-4">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo">
                        </div>
                        <nav class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                            <div class="px-2 space-y-1">
                                <a v-for="menu in menus" :href="menu.route" class="group flex items-center px-2 py-2 text-base font-medium rounded-md" :class="activeClasses(menu.route)">
                                    <font-awesome-icon class="text-cyan-200 ml-1 mr-4 h-6 w-6" :icon="menu.icon" />
                                    {{ menu.label }}
                                </a>
                            </div>
                            <div class="mt-6 pt-6">
                                <div class="px-2 space-y-1">
                                    <a v-for="menu in menusAlt" :href="menu.route" class="group flex items-center px-2 py-2 text-base font-medium rounded-md" :class="activeClasses(menu.route)">
                                        <font-awesome-icon class="text-cyan-200 ml-1 mr-4 h-6 w-6" :icon="menu.icon" />
                                        {{ menu.label }}
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </transition>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['open', 'menus', 'menusAlt'],
    name: "MobileSidebar",
    data() {
        return {
            route: 'dashboard'
        }
    },
    methods: {
        activeClasses(route) {
            return (route === this.route) ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600';
        }
    }
}
</script>
