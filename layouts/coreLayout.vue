<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav>
        <nuxt-link to="/" class="nav-item nav-link">หน้าแรก</nuxt-link>
        <nuxt-link to="/posts" class="nav-item nav-link">บทความ</nuxt-link>
        <nuxt-link to="/admin" class="nav-item nav-link">ผู้เขียน</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>
