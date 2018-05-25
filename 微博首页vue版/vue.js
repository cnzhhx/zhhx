"use strict";
new Vue({
    el: '#page',
    data:{
        newsListAll: []
    },

    mounted(){
        // 请求本地的数据
        this.getLocalData();
    },

    methods: {
        getLocalData() {
            this.$http.get('data/cart.json').then(response => {
                const res = response.body;
                if (res) {
                    this.newsListAll = res.allNewsList;
                    console.log(this.newsListAll);
                    console.log("hahahahahahaha");
                }
            }, response => {
                alert('请求数据失败!');
            });
        }
    }
});