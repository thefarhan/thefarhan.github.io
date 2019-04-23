<template>
    <div class="page-skills  align-items-center">
        <div class="container-fluid">
            <h2 class="text-white mx-auto font-weight-bold py-5 text-center">مهارت های من</h2>
        </div>
        <div class="container-fluid text-white py-5 programming" :style="programmingBackUrl">
            <div class="row flex-column">
                <h3 class="text-light mx-auto pt-3">مهارت های برنامه نویسی</h3>
                <div class="container programming-list">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 96%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">برنامه نویسی PHP</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 92%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">برنامه نویسی JavaScript</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 96%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">طراحی با بوت استرپ 4</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 92%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به JQuery</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">طراحی ریسپانسیو</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 48%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">برنامه نویسی اندروید با Kotlin</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 96%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به وردپرس</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 40%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به Angular1</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 85%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به VueJs</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 65%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به Git</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به HTML</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به CSS</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 30%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به ReactJs</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 49%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به NativeScript</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 72%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به LESS</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 76%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به SCSS</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 85%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به Laravel</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 60%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">تسلط به Yii2</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid  text-white py-5">
            <div class="row flex-column">
                <h3 class=" mx-auto pt-3">سایر ابزارها و نرم افزارها</h3>
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 70%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">NPM</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 70%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">Composer</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 70%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">Photoshop</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 40%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">Illustrator</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-dark py-5 bg-light ">
            <div class="row flex-column">
                <h3 class=" mx-auto pt-3">مهارت های زبانی</h3>
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">فارسی</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">انگلیسی</h3>
                        </div>
                    </div>
                    <div class="row mt-2 d-flex align-items-center">
                        <div class="col-md-8">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 70%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="rtl">عربی</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="container-fluid py-5 text-white ">
            <div class="row flex-column " >
                <div class="col-md-12 text-center py-3 ">
                    <a class="btn btn-light m-auto px-5 py-2" @click="changePage('works')" href="#">نمونه کار هم داری ؟</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "skills",
        data: () => ({
            programmingBackUrl: "background-image: url(dist/images/2.jpg);"
        }),
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
    .page-skills {
        background-color: #721d54;
        position: absolute;
        width: 100%;
        min-height: 100%;
        top:0;
    }

    .programming{
        background: no-repeat fixed center;
        background-size: cover;
    }

    .programming-list{
        background-color: #0f0f0f99;
        border-radius: 30px;
        padding: 20px;
    }
</style>