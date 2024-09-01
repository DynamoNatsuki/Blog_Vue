<template>
  <div class="home">
    <h1>Welcome to the Blog!</h1>
    <p>Press the name of the blog post you are interested in to view the post.</p>
    <ul>
      <li><router-link to="/blog1">The Future of Technology: What to Expect in 2024</router-link></li>
      <li><router-link to="/blog2">5 Quick and Easy Recipes for Busy Weeknights</router-link></li>
      <li><router-link to="/blog3">How to Create a Productive Home Office Space</router-link></li>
      <li><router-link to="/blog4">Top 5 Destinations for Your Next Weekend Getaway</router-link></li>
      <li><router-link to="/blog5">The Benefits of Mindfulness and How to Get Started</router-link></li>
      <li><router-link to="/blog6">Essential Tips for Maintaining a Healthy Work-Life Balance</router-link></li>
      <li><router-link to="/blog7">How to Build a Successful Personal Brand Online</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  color: #020340;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: list-item;
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>

