import { mapGetters } from "vuex";
export default {
    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        type: 1,
        phone: "",
        address: "",
        dob: "",
        profile: "",
        items: ['Admin', 'User'],
        url: null,
        error: "",
        
        // validation rules for user name.
        nameRules: [
            value => !!value || "The name field is required."
        ],

        // validation rules for user email.
        emailRules: [
            value => !!value || "The email field is required.",
            value => /.+@.+\..+/.test(value) || "E-mail must be valid."
        ],
        // validation rules for password.
        passwordRules: [
            value => !!value || "The password field is required.",
            value => /^(?:(?=.*\d)(?=.*[A-Z]).*){8}$/.test(value) || "Password must be valid."
        ],

        //validation rules for confirm password.
        confirm_pwdRules: [
            value => !!value || "The confirm password field is required.",
            // value =>  same:password.test(value) || "new Password and new confirm password must be same"
        ],

        // validation rules for dob.
        dobRules: [
            value => !!value || "Date of birth is required."
        ],
    }),
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

    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        back() {
            this.$router.push({ name: "user-list" });
        },
        addUser(event) {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('type', this.type);
            formData.append('dob', this.dob);
            formData.append('created_user_id', 1);
            event.preventDefault()
            this.$axios.post("/user", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    type: this.type,
                    address: this.address,
                    dob: this.dob,
                    data: formData })
                .then((response) => {
                    console.log(response.data)
                    this.$router.push({
                        name: "user-list"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        selectType() {
            if (this._data.type == 'Admin') {
                this.type = 0;
            } else {
                this.type = 1;
            }
            console.log(this.type)
        },
    },
};