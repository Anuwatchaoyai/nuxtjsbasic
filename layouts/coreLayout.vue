<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav>
        <nuxt-link to="/" class="nav-item nav-link">หน้าแรก</nuxt-link>
        <nuxt-link to="/post" class="nav-item nav-link">บทความ</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>