<template>
    <div class="h-screen flex overflow-hidden bg-gray-100">
        <mobile-sidebar :open="sidebarOpen" @close="sidebarOpen = false" :menus="menus" :menus-alt="menusAlt"></mobile-sidebar>
        <desktop-sidebar :menus="menus" :menus-alt="menusAlt"></desktop-sidebar>

        <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
            <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                <sidebar-button @click="sidebarOpen = true"></sidebar-button>
                <!-- Search bar -->
                <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    <search-bar></search-bar>
                    <div class="ml-4 flex items-center md:ml-6">
                        <notifications-button></notifications-button>
                        <profile-dropdown></profile-dropdown>
                    </div>
                </div>
            </div>
            <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
                <page-header></page-header>

                <div class="mt-8">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                        <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <!-- Card -->
                            <balance-card></balance-card>
                        </div>
                    </div>

                    <h2 class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                        Recent activity
                    </h2>

                    <activity-list-small></activity-list-small>
                    <activity-list></activity-list>

                </div>
            </main>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        window.Echo.channel('global-notifications')
            .listen('GlobalNotification', (e) => {
                this.$toast.open({message: e.message, type: e.type});
            });
    },
    data() {
        return {
            sidebarOpen: false,
            menus: [
                {
                    route: '#',
                    label: 'Dashboard',
                    icon: ['fas', 'tachometer-alt']
                },
                {
                    route: 'directory',
                    label: 'Directory',
                    icon: ['far', 'address-card']
                },
                {
                    route: 'tickets',
                    label: 'Tickets',
                    icon: ['fas', 'ticket-alt']
                },
                {
                    route: 'organizations',
                    label: 'Organizations',
                    icon: ['fas', 'building']
                },
                {
                    route: 'companies',
                    label: 'Companies',
                    icon: ['fas', 'home']
                },
                {
                    route: 'contacts',
                    label: 'Contacts',
                    icon: ['far', 'address-card']
                },
                {
                    route: 'jobs',
                    label: 'Jobs',
                    icon: ['fas', 'tasks']
                },
                {
                    route: 'logs',
                    label: 'Logs',
                    icon: ['fab', 'buffer']
                },
                {
                    route: 'users',
                    label: 'Users',
                    icon: ['fas', 'users']
                },

            ],
            'menusAlt': [
                {
                    route: 'settings',
                    label: 'Settings',
                    icon: ['fas', 'cog']
                },
                {
                    route: 'bugs',
                    label: 'Bugs / Feature Requests',
                    icon: ['fas', 'bug']
                }
            ]
        }

    }
}
</script>
