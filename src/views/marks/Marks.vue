<template>
  <div>
    <section class="grid-view">
    <b-overlay
      :show="isRefreshing"
      rounded="sm"
    >
      <b-card
        v-for="(course,index) in courses"
        :aria-hidden="isRefreshing ? 'true' : null"
        :key="index"
        class="ecommerce-card"
        :actionRefresh="isRefreshing"
        
        no-body
      >
        <!-- Product Details -->
        <b-card-body @click="searchMarks(course.parent_id)" style="cursor: pointer;">
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
    </b-overlay>
    </section>
  </div>
</template>

<script>
import MarkService from "./marks.services"
export default {
    data() {
        return{
            courses: [],
            isRefreshing: false,
        }
    },
    methods:{
        async searchMarks(item){
          this.isRefreshing = true
            try {
                let params = {
                  parent_id: item ? item : 0
                }
                const data = await MarkService.searchCourses(params)
                if(data.status === 200) {
                    this.courses = data.data
                }
                this.isRefreshing = false
            } catch (e) {
                console.log(e);
                this.isRefreshing = false
            }
        },
    },
    async mounted() {
        await this.searchMarks(null);
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