export default {
    data: () => ({
      valid: true,
      post: {},
      title: "",
      description: "",
      id: "",
      error: "",
      // validation rules for post title.
      titleRules: [
        (value) => !!value || "The title field is required.",
        //value => /.+@.+\..+/.test(value) || "E-mail must be valid."
      ],
  
      // validation rules for post description.
      desRules: [(value) => !!value || "The descsription field is required."],
    }),
    computed: {
      user() {
        return this.$store.getters.user;
      },
    },
    mounted() {
        this.$axios
            .get(`/post/${this.$route.params.id}`)
            .then((response) => {
             this.post = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    methods: {
      /**
       * This to add new Post.
       * @returns void
       */
      back() {
        this.$router.push({ name: "post-list" });
      },
      editPost() {
        console.log(this.post)
        this.$axios
            .patch("/post/"+ this.$route.params.id, {
                title: this.post.title,
                description: this.post.description,
                id: this.$route.params.id
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
  