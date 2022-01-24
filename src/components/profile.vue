<template>
  <div class="topnav">
    <router-link :to="{ name: 'contact' }">Contact</router-link>
    <router-link class="active" :to="{ name: 'profile' }">Profile</router-link>
  </div>
  <div class="container">
    <div class="row">
      <h1 class="header">My Profile</h1>
    </div>
    <div class="row">
      <div class="col">
        <img
          width="100%"
          class="rounded mx-auto d-block"
          alt=""
          src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/32192026_1374124596022606_7072448403518521344_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGmmTbBIkCp2X9JvmZlrwouuv8di8Q-AcW6_x2LxD4Bxc98dObQHK2VhmWGYOq1OsHJwruqHkKr1z0j9mIyRYF0&_nc_ohc=hCsyIQiRIBQAX--pjZj&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT8dPXg3XOwxJLc11LrS-vq_ycnziisBPK2JYYovB1ZdIQ&oe=62144733"
        />
      </div>
      <div class="col-8">
        <div class="" align="left">
          <p>Name : Theeraphat Sakulparasert</p>
          <h3>About Me</h3>
          <p>
            I'm Theeraphat Sakulpaprasert, my nickname is Meng. <br />
            I like technology and when I have freetime I will search knowledge.
            <br />
            I want to practice my programming skills even more.<br />
          </p>
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascipt</li>
            <li>Vuejs</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
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
