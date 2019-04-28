<template>
    <div class="page-works  align-items-center">
        <div class="container-fluid">
            <h2 class="text-white mx-auto font-weight-bold py-5 text-center">نمونه کارهای من</h2>
        </div>
        <div class="container-fluid py-3 programming">
            <div class="row flex-column">
                <h3 class="text-light mx-auto py-3">در زمینه وردپرس</h3>
                <div class="container ">
                    <div class="row rtl">
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/faralenz.png" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">طراحی وب سایت Faralenz.com</h5>
                                    <p class="card-text">ویرایش تخصصی پوسته و افزودن قابلیت هایی مانند امکان نمایش تبلیغات ویدئویی و فروشگاه ویدئوهای آموزشی و امکان مدیریت محصولات در پنل کاربران</p>
                                    <a href="http://faralenz.com" target="_blank" class="btn btn-primary">مشاهده سایت</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/bartargc.png" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">طراحی وب سایت Bartargc.com</h5>
                                    <p class="card-text">طراحی و محتوا گذاری وب سایت و افزودن کدهای اختصاصی</p>
                                    <a href="http://bartargc.com" target="_blank" class="btn btn-primary">مشاهده سایت</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/wpsrc.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی پوسته ساده سایت wp-src.ir</h5>
                                    <p class="card-text"></p>
                                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی افزونه Advanced Font Changer</h5>
                                    <p class="card-text">افزونه وردپرس برای ویرایش گرافیکی  وآسان، فونت بخش های مختلف پوسته توسط کاربر نهایی و بدون کدنویسی  </p>
                                    <a href="https://wordpress.org/plugins/advanced-font-changer/" class="btn btn-primary">مشاهده و دانلود</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی درگاه های واسط پرداخت</h5>
                                    <p class="card-text">اتصال درگاه های واسط پرداخت به افزونه های وردپرس</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">ترجمه و راست چین سازی</h5>
                                    <p class="card-text">ترجمه و راست چین سازی بیش از 30 پوسته رایگان و غیررایگان وردپرس</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-3 programming">
            <div class="row flex-column">
                <h3 class="text-light mx-auto py-3 rtl">برخی از کارهای طراحی UI</h3>
                <div class="container ">
                    <div class="row rtl">
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/bitpay.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی ui سایت bitpay.ir</h5>
                                    <p class="card-text">طراحی همه صفحات به علاوه ui پنل کاربری و غیره</p>
                                    <a href="http://bitpay.ir" target="_blank" class="btn btn-primary">مشاهده سایت</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/iphapp.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی ui iphapp</h5>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary">مشاهده سایت</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/tablighati1.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی لندینگ تبلیغاتی</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/tablighati2.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی لندینگ تبلیغاتی</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="dist/images/limoozin.png" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی پوسته html اپلیکیشن لیموزین</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی ui سایت thefarhan.ir</h5>
                                    <p class="card-text">همین پوسته فعلی که در حال مشاهده آن هستید !!! این پوسته به کمک فریم ورک vuejs طراحی شده است و از جمله ویژگی های آن بارگزاری کامپوننت ها به صورت داینامیک و با انیمیشن می باشد.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-3 programming">
            <div class="row flex-column">
                <h3 class="text-light mx-auto py-3 rtl text-center">طراحی اسکریپت های اختصاصی و یا با فریم ورک ها</h3>
                <div class="container ">
                    <div class="row rtl">
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">فروشگاه digi30ketab</h5>
                                    <p class="card-text">
                                        طراحی فروشگاه digi30ketab توسط فریم ورک های لاراول و vuejs
                                        <br>
                                        از جمله امکانات این اسکریپت می توان به امکان ثبت تراکنش ها، آمارگیری، مدیریت پیشرفته بر روی دسته ها، پنل نمایندگان، امکان اعمال تخفیف، تغییر دسته ای قیمت ها، ایجاد کد ارجاع توسط نماینده و...، و طراحی به کمک تکنولوژی های جدید و استفاده از api در برخی بخش ها اشاره کرد.

                                    </p>
                                    <a href="https://github.com/wp-src/watermark-bot"
                                       target="_blank"
                                       class="btn btn-danger"
                                       data-toggle="modal"
                                       data-target="#fullwidthModal"
                                       @click="setModalContent('video', 'https://thefarhan.github.io/videos/digi30ketab.mp4')"
                                    >مشاهده ویدئو</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی ربات تلگرام با فریم ورک lumen</h5>
                                    <p class="card-text">ربات درج لوگو بر روی تصاویر</p>
                                    <a href="https://github.com/wp-src/watermark-bot" target="_blank" class="btn btn-primary">مشاهده سایت</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی ربات تلگرام دستیار ادمین کانال تک آنالیز</h5>
                                    <p class="card-text">کار این ربات پاکسازی لینک ها و محتواهای نامناسب به صورت اسان و سریع می  باشد به این صورت که ادمین مطلبی را برای ربات فروارد کرده و پس از ویرایش در کانال خود ارسال می کند.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی اسکریپت ربات تبلیغاتی اینستاگرام</h5>
                                    <p class="card-text">این اسکریپت با فریم ورک yii2 نوشته شده و در حال حاضر از دسترس خارج است در صورت نیاز امکان تهیه و ارسال ویدئو وجود دارد</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card"  @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی اسکریپت آسان پرداخت برای سایت bitpay.ir</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 pb-3">
                            <div class="card" @click="toggleFull">
                                <img class="card-img-top" :class="{full: full}" src="" >
                                <div class="card-body">
                                    <h5 class="card-title">طراحی اسکریپت لندینگ ساز</h5>
                                    <p class="card-text">این اسکریپت با فریم ورک yii2 نوشته شده، برای وب سایت hidoctor.ir طراحی شده و برای اتوماسیون طراحی صفحات لندینگ می باشد.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- The Modal -->
        <div class="modal" id="fullwidthModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <button type="button" class="close ml-0" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title"></h4>

                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">


                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">بستن</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "works",
        data: () => ({
            full: false
        }),
        methods: {
            changePage(page) {
                this.$root.transitionType = "component-slide";
                this.$root.enterTransitionType = "component-slide-enter-active";
                this.$root.leaveTransitionType = "component-slide-leave-active";
                this.$root.currentPage = page;
            },
            toggleFull(e){
                if(jQuery(e.target).hasClass('card')){
                    jQuery(e.target).toggleClass('full')
                } else {
                    jQuery(e.target).parents('.card').toggleClass('full')
                }
            },
            setModalContent(type, src, title){
                switch (type){
                    case 'video':
                        jQuery('#fullwidthModal .modal-title').text(title);
                            jQuery('#fullwidthModal .modal-body').html(
                                "<video class='video' controls>\n" +
                                "  <source src=\"" + src + "\" type=\"video/mp4\">\n" +
                                "  لطفا از مرورگر به روز استفاده نمایید. \n" +
                                "</video>");

                        break;
                }

            }
        },
        mounted: function() {
        },
        watch: {
            full(){
                console.log(this.full)
            }
        }
    }

</script>

<style scoped>

    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .page-works {
        background-color: #115b63;
        position: absolute;
        width: 100%;
        min-height: 100%;
        top:0;
    }

    .programming{
        background: no-repeat fixed center;
        background-size: cover;
    }

    .card {
        max-width: 18rem;
        margin: 0 auto;
    }

    .card img{
        max-height: 300px;
    }
    .card.full img{
        max-height: none;
    }



</style>

<style>
    .video{
        width: 100% !important;
    }
</style>