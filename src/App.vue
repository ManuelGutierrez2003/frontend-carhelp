<script>
import Register from './components/pages/register.component.vue'
import LoginForm from "./components/login/login.component.vue";
import Menu from './components/pages/menu.component.vue'
import ClientList from "./Client/pages/client-list.component.vue";
import ClientProfile from "./Client/pages/client-profile.component.vue";
import ClientAdd from "./Client/pages/client-add.component.vue";
import ClientDeleteConfirmation from "./Client/pages/client-delete-confirmation.component.vue";
export default {
  name:'app',
  components: {
    ClientList, ClientProfile, ClientAdd, ClientDeleteConfirmation, Register, LoginForm, Menu},
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "Client", to: "/client"},
        { label: "Vehicles", to: "/vehicles"},
        { label: 'Inventory', to: '/inventory' },
        //{ label: "Chats"},
        { label: "Invoice", to: "/invoices"},
        //{ label: "Configuration"},
        { label: "Support", to: "/support"},
        { label: "Plans", to: "/plans"},
      ]
    }
  },
  methods: {
    handleSidebarItemClick(navigate, item) {
      navigate();
      this.drawer = false;
    }
  }
}
</script>

<template>
  <div>
    <pv-toast />
    <pv-toolbar class="bg-primary">
      <template #start>
        <pv-button
            class="p-button-text text-white"
            icon="pi pi-bars"
            @click="drawer = !drawer"
        ></pv-button>
        <h3>CarHelp</h3>
      </template>
    </pv-toolbar>
  </div>
  <pv-sidebar v-model:visible="drawer">
    <img src="/public/Logo_CarHelp%20.png" width="100px">
    <div class="sidebar-items">
      <router-link
          v-for="item in items"
          :to="item.to"
          custom
          v-slot="{ navigate, href }"
          :key="item.label"
      >
        <pv-button
            class="p-button-text black sidebar-item"
            :href="href"
            @click="handleSidebarItemClick(navigate, item)"
        >
          {{ item.label }}
        </pv-button>
      </router-link>
    </div>
  </pv-sidebar>

  <RouterView />
</template>

<style scoped>
.sidebar-items {
  display: flex;
  flex-direction: column;
  padding: 20px; /* Espaciado interno */
}
.sidebar-item {
  margin-bottom: 10px; /* Espaciado entre ítems */
}
</style>
