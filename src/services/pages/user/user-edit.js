import { mapGetters } from "vuex";
import moment from "moment";
export default {

    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        type: 1,
        dob: "",
        items: ['Admin', 'User'],
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
        this.id = this.$route.params.id
        this.$axios
            .get("/user/" + this.id)
            .then((response) => {
                console.log(response.data)
                this.name = response.data.name
                this.email = response.data.email
                this.password = response.data.password
                if (response.data.status == 1)
                    this.type = 'Admin'
                else
                    this.type = 'User'
                this.dob = moment(String(response.data.dob)).format('yyyy-MM-DD')
                
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
         back() {
            this.$router.push({ name: "user-list" });
        },
        userEdit() {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('type', this.type);
            formData.append('dob', this.dob);
            formData.append('created_user_id', 1);
            this.$axios.patch("/user/" + this.id, {
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    type: this.type,
                    dob: this.dob
                })
                .then((response) => {
                    console.log(response.data)
                    this.$router.push({ name: "user-list" });
                })
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