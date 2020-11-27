<template>
  <div class="page-skills  align-items-center">
    <div class="container-fluid">
      <h2 class="text-white mx-auto font-weight-bold py-5 text-center">مهارت های من</h2>
    </div>
    <div class="container-fluid text-white py-5 programming" :style="programmingBackUrl">
      <div class="row flex-column">
        <h3 class="text-light mx-auto pt-3">مهارت های برنامه نویسی</h3>
        <div class="container programming-list">

          <div
              v-bind:key="index"
              v-for="(item, index) of programmingSkills"
              class="row mt-2 d-flex align-items-center">
            <div class="col-md-8">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated " :class="{'bg-success': (item.color == 'bg-success'),'bg-warning': (item.color == 'bg-warning'),'bg-danger': (item.color == 'bg-danger')}" :style="{width: item.level + '%'}"
                     role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-md-4">
              <h3 class="rtl">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid text-dark py-5 bg-light ">
      <div class="row flex-column">
        <h3 class=" mx-auto pt-3">سایر مطالعات</h3>
        <div class="container rtl">
          زبان برنامه نویسی کاتلین، زبان برنامه نویسی GO، زبان برنامه نویسی QT، زبان برنامه نویسی Dart، زبان برنامه نویسی جاوا، اصول طراحی اپلیکیشن های اندرویدی، اصول سئو،
          فریم ورک flutter و غیره...
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%"
                     role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-md-4">
              <h3 class="rtl">فارسی</h3>
            </div>
          </div>
          <div class="row mt-2 d-flex align-items-center">
            <div class="col-md-8">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 75%"
                     role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-md-4">
              <h3 class="rtl">انگلیسی</h3>
            </div>
          </div>
          <div class="row mt-2 d-flex align-items-center">
            <div class="col-md-8">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 70%"
                     role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
      <div class="row flex-column ">
        <div class="col-md-12 text-center py-3 ">
          <router-link class="btn btn-light m-auto px-5 py-2" to="works">نمونه کار هم داری ؟</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "skills",
  data: () => ({
    programmingBackUrl: "background-image: url(assets/images/2.jpg);",
    programmingSkills: [
      {
        title: 'برنامه نویسی JavaScript',
        level: 90,
        color: 'bg-success'
      },
      {
        title: 'تسلط به VueJs',
        level: 85,
        color: 'bg-success'
      },
      {
        title: 'تسلط به HTML',
        level: 80,
        color: 'bg-success'
      },
      {
        title: 'تسلط به CSS',
        level: 90,
        color: 'bg-success'
      },
      {
        title: 'طراحی با بوت استرپ 4',
        level: 90,
        color: 'bg-success'
      },
      {
        title: 'تسلط به JQuery',
        level: 70,
        color: 'bg-success'
      },
      {
        title: 'طراحی ریسپانسیو',
        level: 100,
        color: 'bg-success'
      },
      {
        title: 'برنامه نویسی PHP',
        level: 70,
        color: 'bg-success'
      },
      {
        title: 'تسلط به وردپرس',
        level: 50,
        color: 'bg-warning'
      },
      {
        title: 'تسلط به SCSS',
        level: 60,
        color: 'bg-warning'
      },
      {
        title: 'تسلط به LESS',
        level: 30,
        color: 'bg-danger'
      },
      {
        title: 'تسلط به Laravel',
        level: 30,
        color: 'bg-danger'
      },


    ]
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
  top: 0;
}

.programming {
  background: no-repeat fixed center;
  background-size: cover;
}

.programming-list {
  background-color: #0f0f0f99;
  border-radius: 30px;
  padding: 20px;
}
</style>