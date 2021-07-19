<template>
<v-card class="mx-auto" height="500px">
    <v-card-title class="postEdit-title">
        <span class="title font-weight-light">Edit Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="editPost">
        <v-card-text>
            <div class="postEdit-error">{{error}}</div>
            <div class="postEdit-input">
                <v-text-field v-model="post.title" type="text" label="Title" :rules="titleRules" hide-details="auto"></v-text-field>
            </div>
            <div class="postEdit-input">
                <v-textarea v-model="post.description" type="text" label="Description" :rules="desRules" hide-details="auto">
                </v-textarea>
            </div>
        </v-card-text>
        <v-card-actions style="margin-top: 134px;">

            <div class="postEdit-action">
                <v-spacer></v-spacer>
                <v-btn type="submit" :disabled="!valid" large color="primary">Edit Post</v-btn>&nbsp;&nbsp;
                <v-btn type="submit" large color="postEdit-back" @click="back()">Back To List</v-btn>
            </div>
        </v-card-actions>
    </v-form>
</v-card>
</template>

<script src="../../services/post/post-edit.js">
</script>

<style scoped src="../../assets/css/pages/post/post-edit.css">

</style>
