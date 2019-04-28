<template>
    <div class="page-about">
        <div class="container ">
            <h2 class="py-4 text-center text-white font-weight-bold">اول کمی درباره من بدونید</h2>
            <div class="row about-text text-white rtl">
                <p>فرحان نیسی هستم متولد 1370</p>
                <p>فارغ التحصیل رشته علوم کامپیوتر، از دانشگاه پیام نور اهواز</p>
                <p>فرزند کوچیک خانواده هستم و تنها پسر خانواده.</p>
                <p>خیلی اهل ورزش کردن نیستم ولی ورزش کردن رو دوست دارم.</p>
                <p>اهل مطالعه کتاب نیستم اما منابع اینترنتی رو زیاد مطالعه می کنم، مقالاتی توی زمینه های مختلف می خونم که اکثرا مرتبط با شغلم هستن، ولی خوب هر از چندگاهی مطالب غیر مرتبط هم می خونم، مثلا مقالاتی در مورد تکنولوژی های جدید، سیاست، اقتصاد، جامعه شناسی و غیره.. . اما مقاله ای که در مورد تکنولوژی جدید باشه اصلا یه چیز دیگست، طوری که حتما باید تا خط اخرشو بخونم. از منابع مختلف هم می خونم چه فارسی چه انگلیسی</p>
                <p>هیچ وقت از یادگیری خسته نمیشم و فک نمیکنم یادگیری زمان خاصی داشته باشه. همیشه آدم باید مهارت هاش رو ارتقا بده</p>
                <p>به نظر خودم تواناییم توی ایده پردازی خیلی بالاست، توی زمینه های مختلف با یکم داده اولیه ایده هایی میدم که شاید به ذهن کمتر کسی رسیده باشه</p>
                <p>به آینده امیدوارم و معمولا خنده رو هستم، ولی خوب گاهی اوقات بامزه ترین چیزا هم واسه آدم بی مزه میشه</p>
                <p>کار بی هدف یا خیلی پرتکرار رو دوست ندارم، مجبور باشم انجام میدم و سعیمو میکنم به بهترین نحو انجام بدم. ترجیح میدم اول فک کنم بعد دست به کار بشم، چون در این صورت نتیجه نامطلوب هم باشه آدم خیلی خودخوری نمیکنه که ای کاش اول فک می کردم و وقت و انرژیم رو تلف نمیکردم.</p>

            </div>

            <div class="col-md-12 text-center py-3 pb-5">
                <a class="btn btn-light m-auto px-5 py-2" @click="changePage('skills')" href="#">چیا بلدی</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods: {
            changePage(page) {
                this.$root.transitionType = "component-bounce";
                this.$root.enterTransitionType = "component-bounce-enter-active";
                this.$root.leaveTransitionType = "component-bounce-leave-active";
                this.$root.currentPage = page;
            }
        }
    }
</script>

<style scoped>
    .page-about {
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