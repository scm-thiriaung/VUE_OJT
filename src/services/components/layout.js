import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
        };
    },
    computed: {
        isLoggedIn() {
            console.log("isLoggedIn:"+this.$store.getters.isLoggedIn);
            return this.$store.getters.isLoggedIn;
       },
       user() {
            console.log(this.$store.getters.user);
            return this.$store.getters.user;
       }
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to route profile page.
         * @returns void
         */
        showProfile() {
            // TODO: do something
        },

        userList() {
            this.$router.push({ name: "user-list" });
        },

        postList() {
            this.$router.push({ name: "post-list" });
        }
    },
};
