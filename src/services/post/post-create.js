import { mapGetters } from "vuex";
export default {
   
    data: () => ({
        valid: true,
        title: "",
        description: "",
        error: "",

         // validation rules for title
         titleRules: [
            value => !!value || "The title field is required."
        ],
         // validation rules for title
         descriptionRules: [
            value => !!value || "The description field is required."
        ],
    }),
    computed: {
        ...mapGetters(["userId"]),
    },
    mounted() {
        
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
          back () {
            this.$router.push({ name: "post-list" });
          },
          addPost () {
            this.$axios
            .post("/post", {
                title : this.title,
                description : this.description,
                userID : this.userId,

            })
            .then((response) => {
                console.log(response.data)
                this.$router.push({ name: "post-list" });
             
            })
            .catch((err) => {
                console.log(err);
            });
          }
    },
};
