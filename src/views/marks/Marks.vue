<template>
  <div>
    <b-button @click="searchMarks()">Click to show</b-button>
    <div v-if="courses.length > 0">
        <ul>
            <li v-for="(course, index) in courses" :key="index">
                <span>{{course.name}}</span>
            </li>
        </ul>
    </div>
    <section class="grid-view">
      <b-card
        v-for="(course,index) in courses"
        :key="index"
        class="ecommerce-card"
        no-body
      >
        <!-- Product Details -->
        <b-card-body>
          <h6 class="item-name">
            <b-link
              class="text-body"
            >
              {{ course.name }}
            </b-link>
            <b-card-text class="item-company">
              By <b-link class="ml-25">
                {{ course.id }}
              </b-link>
            </b-card-text>
          </h6>
          <b-card-text class="item-description">
            {{ course.description }}
          </b-card-text>
        </b-card-body>

        <!-- Product Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price">
                ${{ course.credits }}
              </h4>
            </div>
          </div>
        </div>
      </b-card>
    </section>
  </div>
</template>

<script>
import MarkService from "./marks.services"
export default {
    data() {
        return{
            courses: []
        }
    },
    methods:{
        async searchMarks(){
            try {
                const data = await MarkService.searchCourses()
                if(data.status === 200) {
                    this.courses = data.data
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
    async mounted() {
        await this.searchMarks();
    }
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}