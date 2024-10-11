<template>
  <div class="blog-item">
    <div class="blog-item__first" style="position: relative">
      <img
        height="220"
        class="blog-item__image user-select-none"
        :src="post.card_image"
        :alt="post.meta_card_image_alt"
        @click="navigateToPost(post.slug)"
      />
      <div class="blog-item__hover" @click="navigateToPost(post.slug)">
        <div class="blog-item__hover__circle">
          <div
            class="blog-item__hover__circle__link user-select-none"
            @click="navigateToPost(post.slug)"
          >
            <img :src="showMoreIcon" />
            <span>Show</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="blog-item__title" @click="navigateToPost(post.slug)">
        {{ post.title }}
      </h3>
      <p class="blog-item__description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import showMore from "@/assets/show-more.svg";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const showMoreIcon = showMore;
const router = useRouter();

const navigateToPost = (slug) => {
  router.push(`/blog/${slug}`);
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.blog-item {
  width: 400px;
  min-height: 298px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  padding: 0;
  align-content: center;
  border-radius: 16px;

  @media (max-width: 991px) {
    width: 380px;
  }

  &__image {
    width: 400px;
    height: 220px;
    object-fit: cover;
    border-radius: 16px;
  }

  &__hover {
    border-radius: 16px;
    width: 400px;
    height: 220px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 9999;
    align-content: center;
    transition: opacity 0.3s;
    background-color: rgba(30, 30, 30, 0.7);
    @media (max-width: 991px) {
      width: 380px;
    }

    &__circle {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background-color: white;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      &__link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
        }

        span {
          color: $green;
        }
      }
    }

    &__circle:hover {
      cursor: pointer;
    }
  }

  &__hover:hover {
    opacity: 1;
  }

  &__title {
    font-family: $font-main;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    margin-top: 10px;
    cursor: pointer;
  }

  &__description {
    font-family: $font-main;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    margin-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
  }
}

.user-select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
</style>
