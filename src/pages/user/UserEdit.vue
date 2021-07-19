<template>
  <v-card class="card">
    <v-card-title class="userEdit-title">User Update</v-card-title>
    <v-container>
      <form enctype="multipart/form-data" @submit.prevent="userEdit">
        <v-text-field v-model="name" type="text" label="Name" :rules="nameRules" hide-details="auto"></v-text-field>
        <v-text-field v-model="email" type="text" label="Email" :rules="emailRules" hide-details="auto" class="mt-5"></v-text-field>
        <v-select :items="items" :menu-props="{ top: true, offsetY: true }" label="Type" class="mt-5" v-model="type" 
        @change="selectType()"></v-select>
        <v-text-field v-model="dob" type="datetime" label="Date of Birth" :rules="dobRules" hide-details="auto" class="mt-5"></v-text-field>
        
        <div class="userEdit-action" style="margin-top: 32px;">
            <v-btn type="submit" :disabled="!valid" large color="primary">Edit User</v-btn>&nbsp;&nbsp;
            <v-btn type="submit" large color="userEdit-back" @click="back()">Back To List</v-btn>
        </div>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/user-edit.js">
</script>
<style scoped src="../../assets/css/pages/user/user-edit.css">
</style>
