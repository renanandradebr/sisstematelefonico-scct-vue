<template>
    <nav class="side-menu">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'SideMenu',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .side-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    background-color: #ccc;
    z-index: 1000;
  }
  
  .side-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .side-menu li {
    padding: 10px;
  }
  
  .side-menu a {
    color: #000;
    text-decoration: none;
  }
  </style>