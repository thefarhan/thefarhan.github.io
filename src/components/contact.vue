<template>
    <div class="page-contact">
        <div class="container ">
            <h2 class="py-4 text-center text-white font-weight-bold">با من تماس بگیرید</h2>
            <div class="row about-text text-white rtl">

            </div>

            <div class="col-md-12 text-center py-3 pb-5">
                <a class="btn btn-info m-auto px-5 py-2" target="_blank" href="http://t.me/milisecond">ارتباط از طریق تلگرام</a>
                <a class="btn btn-light m-auto px-5 py-2" href="mailto:wpmagic70@gmail.com">ارسال ایمیل</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact",
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
    .page-contact {
        background-color: #06293f;
        position: absolute;

        min-height: 100%;
        width: 100%;
        top:0;
    }
    .about-text{
        margin: 0 auto;
        max-width: 450px;
    }
</style>