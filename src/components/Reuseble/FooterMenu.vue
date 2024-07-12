<template>
  <footer id="footer">
    <Container>
      <div class="footer">
        <ul class="footer__lists">
          <li class="footer__contact">
            <img src="@/assets/logo.svg" alt="logo" />
            <router-link to="/contact-us">
              Green Technology Germany GmbH
            </router-link>
            <router-link to="/contact-us">Neuer Wall 10</router-link>
            <router-link to="/contact-us">DE-20354 Hamburg</router-link>
          </li>
          <li class="footer__list" v-for="(item, index) in items" :key="index">
            <h4>
              <p>{{ item.title }}</p>
              <span></span>
            </h4>
            <ul>
              <li v-for="(itemList, index) in item.list" :key="index">
                <router-link :to="itemList.url" v-if="!itemList.target">
                  {{ itemList.text }}
                </router-link>
                <a :href="itemList.url" target="_blank" v-else>
                  {{ itemList.text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
  <div class="description">
    <Container>
      <div class="description__wrap">
        <p>{{ $t("Copyright") }}</p>
        <p>{{ $t("MadeInDevocean") }}</p>
      </div>
    </Container>
  </div>
</template>

<script setup>
//import { useLogin } from "@/stores/loginStore";
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import Container from "~/src/components/Reuseble/Container.vue";

//const loginStore = useLogin();
const loginStore ={}
loginStore.roleName == "super-admin"
const items = ref([]);
const i18n = useI18n();

const itemsAdmin = [
  {
    title: i18n.t("SiteMap"),
    list: [
      {
        text: i18n.t("AboutUs"),
        url: "/about-us",
      },
      {
        text: "FAQ",
        url: "/faq",
      },
      {
        text: i18n.t("ContactUs"),
        url: "/contact-us",
      },
      {
        text: i18n.t("TermsOfUseOfTheSiteFooter"),
        url: "/terms-of-use",
      },
    ],
  },
  {
    title: i18n.t("WhyUs"),
    list: [
      {
        text: "Impressum",
        url: "/impressum",
      },
      {
        text: i18n.t("Downloads"),
        url: "/downloads",
      },
    ],
  },
];

const itemsNotLog = [
  {
    title: i18n.t("SiteMap"),
    list: [
      {
        text: i18n.t("AboutUs"),
        url: "/about-us",
      },
      {
        text: "FAQ",
        url: "/faq",
      },
      {
        text: i18n.t("ContactUs"),
        url: "/contact-us",
      },
      {
        text: i18n.t("TermsOfUseOfTheSiteFooter"),
        url: "/terms-of-use",
      },
    ],
  },
  {
    title: i18n.t("FindCompany"),
    list: [
      {
        text: i18n.t("Companies"),
        url: "/login",
      },
      {
        text: i18n.t("PlaceAnAdvertisemen"),
        url: "/login",
      },
      {
        text: i18n.t("AllAnnouncements"),
        url: "/login",
      },
    ],
  },
  {
    title: i18n.t("FindClient"),
    list: [
      {
        text: i18n.t("AllClients"),
        url: "/login",
      },
      {
        text: i18n.t("Requests"),
        url: "/login",
      },
    ],
  },
  {
    title: i18n.t("WhyUs"),
    list: [
      {
        text: "Impressum",
        url: "/impressum",
      },
      {
        text: i18n.t("Downloads"),
        url: "/downloads",
      },
    ],
  },
];

const itemsCompany = [
  {
    title: i18n.t("SiteMap"),
    list: [
      {
        text: i18n.t("AboutUs"),
        url: "/about-us",
      },
      {
        text: "FAQ",
        url: "/faq",
      },
      {
        text: i18n.t("ContactUs"),
        url: "/contact-us",
      },
      {
        text: i18n.t("TermsOfUseOfTheSiteFooter"),
        url: "/terms-of-use",
      },
    ],
  },
  {
    title: i18n.t("FindClient"),
    list: [
      {
        text: i18n.t("AllClients"),
        url: "/offers-list",
      },
      {
        text: i18n.t("Requests"),
        url: "/active-offers",
      },
    ],
  },
  {
    title: i18n.t("WhyUs"),
    list: [
      {
        text: "Impressum",
        url: "/impressum",
      },
      {
        text: i18n.t("Downloads"),
        url: "/downloads",
      },
      {
        text: "AGBs für Kunden",
        url: `${import.meta.env.VITE_VUE_APP_BASE_URL}show-sgb-customer`,
        target: "_blank",
      },
      {
        text: "AGBs für Unternehmen",
        url: `${import.meta.env.VITE_VUE_APP_BASE_URL}show-sgb-company`,
        target: "_blank",
      },
    ],
  },
];

const itemsCustomer = [
  {
    title: i18n.t("SiteMap"),
    list: [
      {
        text: i18n.t("AboutUs"),
        url: "/about-us",
      },
      {
        text: "FAQ",
        url: "/faq",
      },
      {
        text: i18n.t("ContactUs"),
        url: "/contact-us",
      },
      {
        text: i18n.t("TermsOfUseOfTheSiteFooter"),
        url: "/terms-of-use",
      },
    ],
  },
  {
    title: i18n.t("FindCompany"),
    list: [
      {
        text: i18n.t("Companies"),
        url: "/user-request-send",
      },
      {
        text: i18n.t("PlaceAnAdvertisemen"),
        url: "/user-offers",
      },
      {
        text: i18n.t("AllAnnouncements"),
        url: "/user-request-send",
      },
    ],
  },
  {
    title: i18n.t("WhyUs"),
    list: [
      {
        text: "Impressum",
        url: "/impressum",
      },
      {
        text: i18n.t("Downloads"),
        url: "/downloads",
      },
      {
        text: "AGBs für Kunden",
        url: `${import.meta.env.VITE_VUE_APP_BASE_URL}show-sgb-customer`,
        target: "_blank",
      },
      {
        text: "AGBs für Unternehmen",
        url: `${import.meta.env.VITE_VUE_APP_BASE_URL}show-sgb-company`,
        target: "_blank",
      },
    ],
  },
];

watchEffect(() => {
  if (loginStore.roleName === "customer") {
    items.value = itemsCustomer;
  } else if (loginStore.roleName === "company-admin") {
    items.value = itemsCompany;
  } else if (loginStore.roleName === "super-admin") {
    items.value = itemsAdmin;
  } else {
    items.value = itemsNotLog;
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
#footer {
  background-color: rgba(29, 29, 41, 0.9);
  background-image: url(@/assets/footer-bg.png);
  background-size: cover;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 80px 0;
    background-position: bottom;
  }
}

.footer {
  @include flex(row, space-between, start);
  gap: 77px;
  @media (max-width: 991px) {
    @include flex(column, center, center);
    gap: 40px;
    text-align: center;
  }
  &__contact {
    img {
      margin-bottom: 32px;
    }
    a {
      display: block;
      color: #9898a0;
      font-family: $font-main;
      font-weight: 500;
      line-height: 27.638px;
      letter-spacing: -0.2px;
      margin-bottom: 6px;
      @media (max-width: 991px) {
        font-size: 12px;
      }
    }
  }
  &__lists {
    @include flex(row, space-between, start);
    width: 100%;
    gap: 77px;
    @media (max-width: 991px) {
      @include flex(column, center, center);
      text-align: center;
      gap: 40px;
    }
  }
  &__list {
    h4 {
      display: inline-block;
      @include flex(row, flex-start, center);
      gap: 10px;
      margin-bottom: 32px;
      @media (max-width: 991px) {
        position: relative;
        margin-bottom: 16px;
        display: inline-block;
      }

      p {
        color: $white;
        font-family: $font-main;
        font-size: 20px;
        font-weight: 700;
        line-height: 28.8px;
        @media (max-width: 991px) {
          font-size: 20px;
          text-align: center;
        }
      }
      span {
        display: block;
        width: 25px;
        height: 3px;
        background: #87ab42;
        @media (max-width: 991px) {
          position: absolute;
          bottom: -3px;
          left: 0;
        }
      }
    }
    ul > li:not(:last-child) {
      margin-bottom: 6px;
    }
    ul > li > a {
      color: #9898a0;
      font-family: $font-main;
      font-size: 14px;
      font-weight: 500;
      line-height: 26px;
      @media (max-width: 991px) {
        font-size: 16px;
      }
    }
  }
}
.description {
  padding: 16px 0 15px 0;
  background: #1d1d29;
  &__wrap {
    text-align: center;
    @media (max-width: 991px) {
      @include flex(row, space-between, center);
    }
    p {
      color: #9898a0;
      font-family: $font-main;
      font-size: 14px;
      font-weight: 500;
      line-height: 28.8px;
      letter-spacing: -0.2px;
      @media (max-width: 991px) {
        font-size: 10px;
      }
    }
    p:last-child {
      display: none;
      @media (max-width: 991px) {
        display: block;
      }
    }
  }
}
</style>
