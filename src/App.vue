<template>
  <div>
    <a
        v-show="!menuVisibility"
        href="#"
        class="menu-key"

        @click="toggleMenu"> منو </a>
    <ul style="z-index: 9999" :class="{menu: true, visible: menuVisibility }">
      <li><router-link to="/">خانه</router-link></li>
      <li><router-link to="/about">درباره من</router-link></li>
      <li><router-link to="/skills">مهارت های من </router-link></li>
      <li><router-link to="/works">نمونه کارها</router-link></li>
      <li><router-link to="/contact">تماس با من</router-link></li>
      <li><a href="#" @click="toggleMenu"> « </a></li>
    </ul>

    <keep-alive class="contents">
      <transition
          :name="transitionType"
          :enter-active-class="enterTransitionType"
          :leave-active-class="leaveTransitionType"
          mode="in-out">
        <router-view

            class="dynamic-component"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    currentPage:          'home',
    transitionType:       'component-fade',
    enterTransitionType:  'component-fade-enter-active',
    leaveTransitionType:  'component-fade-leave-active',
    menuVisibility: false
  }),
  methods: {
    changePage: function (page) {
      this.currentPage = page
    },
    toggleMenu(){
      this.menuVisibility = !this.menuVisibility;
    }
  },
  computed: {
    loadPage: function () {
      return this.currentPage;
    }
  }
}
</script>