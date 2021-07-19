<template>
<v-card>
    <v-card-title>
        User list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search by User name" hide-details="auto" v-model="search_name"></v-text-field>
                </v-col>
                <v-col md="2.5">
                    <v-text-field label="Search by User email" hide-details="auto" v-model="search_email"></v-text-field>
                </v-col>
                <v-btn class="user-list-btn mr-4" color="primary" @click="findUser()">Search</v-btn>
                <v-btn class="user-list-btn mr-4" color="primary" @click="newUser()">Create</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.title`]="{ item }">
                <a v-if="item.title">{{item.title}}</a>
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <v-btn color="primary" class="user-list-btn" @click="updateUser(item)">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="user-list-btn" @click="deleteUser(item)">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/user/user-list.css">
</style>
