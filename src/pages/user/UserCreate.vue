<template>
  <v-card class="card">
    <v-card-title class="UserCreate-title"> User Create </v-card-title>
    <v-container>
      <form enctype="multipart/form-data" @submit="addUser">
        <v-text-field v-model="name" type="text" label="Name" :rules="nameRules"  hide-details="auto"></v-text-field>
        <v-text-field v-model="email" type="text" label="Email" :rules="emailRules" hide-details="auto" class="mt-5"></v-text-field>
        <v-text-field v-model="password" type="password" label="Password" :rules="passwordRules" hide-details="auto"
          class="mt-5"></v-text-field>
        <v-text-field v-model="confirm_password" type="password" label="Confirm Password" :rules="confirm_pwdRules"
          class="mt-5" hide-details="auto"></v-text-field>
        <v-select :items="items" :menu-props="{ top: true, offsetY: true }" label="Type" class="mt-5" v-model="type"
          @change="selectType()"></v-select>
        <v-text-field v-model="dob" type="date" label="Date of Birth" :rules="dobRules" hide-details="auto"
          class="mt-5"></v-text-field>

        <div class="userCreate-action" style="margin-top: 32px;">
            <v-btn type="submit" :disabled="!valid" large color="primary">Create User</v-btn>&nbsp;&nbsp;
            <v-btn type="submit" large color="userCreate-back" @click="back()">Back To List</v-btn>
        </div>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/user-create.js">
</script>
<style scoped src="../../assets/css/pages/user/user-create.css">
</style>
