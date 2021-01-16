<template>
    <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64">
            <div class="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <img class="h-8 w-auto"
                         src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                         alt="Easywire logo">
                </div>
                <nav class="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                    <div class="px-2 space-y-1">
                        <a @click="clicked(menu.label)" v-for="menu in menus" :href="menu.route"
                           class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                           :class="activeClasses(menu.route)">
                            <font-awesome-icon class="text-cyan-200 ml-1 mr-4 h-6 w-6" :icon="menu.icon"/>
                            {{ menu.label }}
                        </a>
                    </div>
                    <div class="mt-6 pt-6">
                        <div class="px-2 space-y-1">
                            <a v-for="menu in menusAlt" :href="menu.route"
                               class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                               :class="activeClasses(menu.route)">
                                <font-awesome-icon class="text-cyan-200 ml-1 mr-4 h-6 w-6" :icon="menu.icon"/>
                                {{ menu.label }}
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DesktopSidebar",
    props: ['menus', 'menusAlt'],
    data() {
        return {
            route: 'dashboard',
            type: 'success'
        }
    },
    methods: {
        activeClasses(route) {
            return (route === this.route) ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600';
        },
        clicked(label) {
            this.$toast.open({message: 'You clicked ' + label, type: this.type});
        }
    }
}
</script>
