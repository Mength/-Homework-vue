<template>
  <div class="topnav">
    <router-link class="active" :to="{ name: 'contact' }">Contact</router-link>
    <router-link :to="{ name: 'profile' }">Profile</router-link>
  </div>
  <div class="container">
    <div class="row">
      <h1 class="header">CONTACT</h1>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <li><p>Email : theerphat.saku@bumail.net</p></li>
          <li><p>Tel. : 080-806-6844</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style>
.header {
  background-color: #009eff;
  color: white;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 12px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #0066ff;
  color: white;
}
</style>
