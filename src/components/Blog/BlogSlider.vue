<template>
  <div class="blog-slider">
    <v-slide-group class="blog-slider__group" :show-arrows="true">
      <template #next>
        <img
          class="user-select-none slider-arrow"
          alt="lens"
          :src="greenArrowRight"
        />
      </template>
      <template #prev>
        <img
          class="user-select-none slider-arrow"
          alt="lens"
          :src="greenArrowLeft"
        />
      </template>

      <div class="blog-slides">
        <v-slide-group-item
          v-for="post in allBlogPosts"
          :key="post.id"
          class="blog-slider__slide"
        >
          <BlogSlide :post="post" />
        </v-slide-group-item>
      </div>
    </v-slide-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import greenArrowLeft from "@/assets/green-arrow-left.svg";
import greenArrowRight from "@/assets/green-arrow-right.svg";
import BlogSlide from "~/src/components/Blog/BlogSlide.vue";
import queryString from "query-string";
// import { useBlog } from '@/stores/blogStore'; // Закоментовано до переноса стора

const props = defineProps({
  postId: {
    type: Number,
    required: false,
    default: null,
  },
  limit: {
    type: Number,
    required: false,
    default: 5,
  },
});

// const useBlog = useBlog(); // Закоментовано до переноса стора
const allBlogPosts = ref(null);
const loading = ref(true);

const fetchBlogPosts = async () => {
  // const res = await useBlog.getSiteBlogList(queryString.stringify({ 'limit': props.limit, 'postId': props.postId })); // Закоментовано до переноса стора
  const res = []; // Захардкожений результат
  allBlogPosts.value = res;
  loading.value = false;
};

onMounted(fetchBlogPosts);
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.blog-slider {
  &__group {
    :deep {
      .v-slide-group__prev {
        align-items: start;
        @media (max-width: 991px) {
          min-width: 32px;
        }

        .slider-arrow {
          margin-top: 98px;
          @media (max-width: 991px) {
            width: 28px;
            height: 28px;
          }
        }
      }

      .v-slide-group__next {
        align-items: start;
        @media (max-width: 991px) {
          min-width: 32px;
        }

        .slider-arrow {
          margin-top: 98px;
          @media (max-width: 991px) {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
}

.blog-slides {
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin-right: auto;
  margin-left: auto;
}

.blog-item:last-child {
  margin-right: auto;
}

.user-select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.skeleton {
  height: 220px;
  width: 400px;
}
</style>
