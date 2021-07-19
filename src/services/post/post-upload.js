export default {
    data() {
        return {
          error: {},
          import_file: '',
        }
      },
    methods: {
        importExcel(){
            let import_form = document.querySelector('#importForm');
            let data = new FormData(import_form);
            this.$axios.post('/post/upload', data)
            .then((response)=>{
                console.log(response);
                this.$router.push({ name: "post-list" });
            })
        }
  },
};
