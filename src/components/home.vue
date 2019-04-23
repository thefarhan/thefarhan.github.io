<template>
    <div class="page-home text-white d-flex align-items-center">
        <section class="container-fluid header">
            <div class="row ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h2 class="rtl text-center py-4 font-weight-bold">به وب سایت شخصی فرحان نیسی خوش آمدید :/</h2>
                            <p class="rtl text-center py-2 m-auto" style="max-width: 300px;">توی این وب سایت میتونید در مورد من اطلاعات جامعی کسب نمایید. این که کی هستم و آیا به درد آشنایی با شما می خورم یا نه !!!</p>
                        </div>
                        <div class="col-md-4">
                            <div class="avatar m-auto">
                                <img class="w-100" src="dist/images/avatar.png" alt="">
                            </div>
                        </div>
                        <div class="col-md-12 text-center pt-5">
                            <a class="btn btn-light m-auto px-5 py-2" v-on:click="changePage('about')" href="#">بزن بریم</a>
                        </div>
                    </div>
                   </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            changePage(page) {
                this.$root.transitionType = "component-slide";
                this.$root.enterTransitionType = "component-slide-enter-active";
                this.$root.leaveTransitionType = "component-slide-leave-active";
                this.$root.currentPage = page;
            }
        }
    }
</script>

<style scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .page-home {
        background-color: orangered;
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
    }
    .avatar{
        border: 6px solid #c69500;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        overflow: hidden;
    }

    .avatar img {
        height: 100%;
        width:100%;
    }
    @media (max-width: 700px) {
        .avatar{
            height: 100px;
            width: 100px;
        }
    }
</style>