import { mapGetters } from "vuex";
export default {
    data() {
        return {
            userInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "User Name",
                    value: "name",
                },
                {
                    text: "User Email",
                    value: "email",
                },
                {
                    text:  "Date of Birth",
                    value: "dob",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
            search_name: '',
            search_email: ''
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.$axios
            .get("/user/list")
            .then((response) => {
                this.userList = response.data;
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.includes(this.keyword) ||
                    user.email.includes(this.keyword)
                );
            });
        },
        newUser() {
            console.log("New User")
            this.$router.push({ name: "user-create" });
        },
        deleteUser(item) {
            console.log("Delete User")
            this.$axios
            .delete("/user/" + item.id)
            .then((response) => {
                console.log(response);
                let i = this.showList.map((data) => data.id).indexOf(item.id);
                this.showList.splice(i, 1);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        updateUser(item) {
            console.log("Update User")
            this.$router.push({ name: "user-edit", params: {id: item.id} });
        },
        findUser() {
            this.$axios
                .get("/user/searchUser", {
                    params: {
                        'nameSearch': this.search_name,
                        'emailSearch': this.search_email,
                    }
                })
                .then((response) => {
                    console.log(response.data.data)
                    this.userList = response.data.data;
                    this.showList = this.userList;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
