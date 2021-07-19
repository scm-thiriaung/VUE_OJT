import { mapGetters } from "vuex";
export default {
    data() {
        return {
            postInfo: null,
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
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "name",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            search_data: ''
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
            .get("/post/list")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
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
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.includes(this.keyword) ||
                    post.description.includes(this.keyword) ||
                    post.created_user.includes(this.keyword)
                );
            });
        },
        newPost() {
            console.log("New Post")
            this.$router.push({ name: "post-create" });
        },
        editPost(item) {
            console.log("Edit Post")
            this.$router.push({ name: "post-edit", params: {id: item.id} });
        },
        deletePost(item) {
            console.log(item.id)
            this.$axios
            .delete("/post/"+item.id)
            .then((response) => {
                console.log(response);
                let i = this.showList.map((data) => data.id).indexOf(item.id);
                this.showList.splice(i, 1);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        download() {
            console.log("Download")
            this.$axios.post("/post/download", { responseType: "blob" })
            .then((response) => {
                const url = URL.createObjectURL(
                new Blob([response.data], {
                type: "application/vnd.ms-excel",
            })
        );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "post.xlsx");
            document.body.appendChild(link);
            link.click();
            });
        },
        upload() {
            console.log("Post Upload")
            this.$router.push({ name: "post-upload" });
        },
        findPost() {
            console.log(this.search_data)
            this.$axios
            .get("/post/search", { params: { 
                'search_data': this.search_data
             } })
            .then((response) => {
                console.log("After searching")
                console.log(response.data.data);
                this.postList = response.data.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
        },
    },
};
