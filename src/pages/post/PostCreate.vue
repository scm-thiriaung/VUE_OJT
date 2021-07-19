<template>
<v-card class="mx-auto" height="500px">
    <v-card-title class="postCreate-title">
        <span class="title font-weight-light">Create Post</span>
    </v-card-title>
    <v-form v-model="valid" @submit.prevent="addPost">
        <v-card-text>
            <div class="postCreate-error">{{error}}</div>
            <div class="postCreate-input">
                <v-text-field v-model="title" type="text" label="Title" :rules="titleRules" clearable
                clear-icon="mdi-close-circle" :counter="10"></v-text-field>
            </div>
            <div class="postCreate-input">
                <v-textarea v-model="description" type="text" label="Description" :rules="descriptionRules" clearable
                clear-icon="mdi-close-circle"></v-textarea>
            </div>
        </v-card-text>
        <v-card-actions style="margin-top: 134px;">

            <div class="postCreate-action">
                <v-spacer></v-spacer>
                <v-btn type="submit" :disabled="!valid" large color="primary">Create Post</v-btn>&nbsp;&nbsp;
                <v-btn type="submit" large color="postCreate-back" @click="back()">Back To List</v-btn>
            </div>
        </v-card-actions>
    </v-form>
</v-card>
</template>

<script src="../../services/post/post-create.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
</style>
