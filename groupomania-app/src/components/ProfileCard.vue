<template>

  <router-link class="profile-link" :to="{ name: 'ProfileDetails', params: {id: profile.id} }">
    <div class="profile-card">
        <p> {{ profile.photo }} {{ profile.name }}</p>
        <p> {{ profile.description }} </p>
        <!--<p> v-for="(role,index) in currentUser.roles" :key="index">{{role}} </p>-->
    </div>
  </router-link>

</template>


<script>

export default {
  name: "ProfileCard",
  props: {
    profile: Object
  }
}

</script>


<style scoped>
 
 .profile-card {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.profile-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.profile-link {
  color: #2c3e50;
  text-decoration: none;
}

</style>
