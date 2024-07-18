<template>
  <header id="header">
    <Container>
      <nav class="header">
        <div class="header__logo">
          <NuxtLink to="/">
            <img alt="logo" src="~/assets/logo.svg" />
          </NuxtLink>
        </div>
        <div class="wrap">
          <ul class="header__nav">
            <li
                v-if="items?.id === 0 || items?.id === 2 || items?.id === 3"
                :class="{ active: activeIndex === 1 }"
                class="header__nav__item"
                @click="setActive(1)"
            >
              <p class="wrap">
                <span class="wrap__text">{{ items?.title }}</span>
                <span class="wrap__arr">
                  <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_2735)">
                      <path
                          clip-rule="evenodd"
                          d="M12.707 15.7071C12.5194 15.8946 12.2651 15.9999 12 15.9999C11.7348 15.9999 11.4805 15.8946 11.293 15.7071L5.63598 10.0501C5.54047 9.95785 5.46428 9.84751 5.41188 9.7255C5.35947 9.6035 5.33188 9.47228 5.33073 9.3395C5.32957 9.20672 5.35487 9.07504 5.40516 8.95215C5.45544 8.82925 5.52969 8.7176 5.62358 8.6237C5.71747 8.52981 5.82913 8.45556 5.95202 8.40528C6.07492 8.355 6.2066 8.32969 6.33938 8.33085C6.47216 8.332 6.60338 8.35959 6.72538 8.412C6.84739 8.46441 6.95773 8.54059 7.04998 8.6361L12 13.5861L16.95 8.6361C17.1386 8.45394 17.3912 8.35315 17.6534 8.35542C17.9156 8.3577 18.1664 8.46287 18.3518 8.64828C18.5372 8.83369 18.6424 9.0845 18.6447 9.3467C18.6469 9.60889 18.5461 9.8615 18.364 10.0501L12.707 15.7071Z"
                          fill-rule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2735">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
              <div :class="{ activeBlock: activeIndex === 1 }" class="sub-menu">
                <div class="container">
                  <div class="list">
                    <div
                        v-for="(itemList, key) in items?.list"
                        :key="key"
                        class="list__item"
                    >
                      <NuxtLink :to="{ name: itemList.url }">
                        <p class="list__item__title">{{ itemList.title }}</p>
                        <p class="list__item__text">{{ itemList.text }}</p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
                :class="{ active: activeIndex === 2 }"
                class="header__nav__item"
                @click="setActive(2)"
            >
              <p class="wrap">
                <span class="wrap__text">{{ baseItem?.title }}</span>
                <span class="wrap__arr">
                  <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_2735)">
                      <path
                          clip-rule="evenodd"
                          d="M12.707 15.7071C12.5194 15.8946 12.2651 15.9999 12 15.9999C11.7348 15.9999 11.4805 15.8946 11.293 15.7071L5.63598 10.0501C5.54047 9.95785 5.46428 9.84751 5.41188 9.7255C5.35947 9.6035 5.33188 9.47228 5.33073 9.3395C5.32957 9.20672 5.35487 9.07504 5.40516 8.95215C5.45544 8.82925 5.52969 8.7176 5.62358 8.6237C5.71747 8.52981 5.82913 8.45556 5.95202 8.40528C6.07492 8.355 6.2066 8.32969 6.33938 8.33085C6.47216 8.332 6.60338 8.35959 6.72538 8.412C6.84739 8.46441 6.95773 8.54059 7.04998 8.6361L12 13.5861L16.95 8.6361C17.1386 8.45394 17.3912 8.35315 17.6534 8.35542C17.9156 8.3577 18.1664 8.46287 18.3518 8.64828C18.5372 8.83369 18.6424 9.0845 18.6447 9.3467C18.6469 9.60889 18.5461 9.8615 18.364 10.0501L12.707 15.7071Z"
                          fill-rule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2735">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
              <div :class="{ activeBlock: activeIndex === 2 }" class="sub-menu">
                <div class="container">
                  <div class="list">
                    <div
                        v-for="(itemList, key) in baseItem?.list"
                        :key="key"
                        class="list__item"
                    >
                      <NuxtLink :to="{ name: itemList.url }">
                        <p class="list__item__title">{{ itemList.title }}</p>
                        <p class="list__item__text">{{ itemList.text }}</p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
                v-if="isNotificationShow"
                class="wrap__right--chat"
                @click="goToChat"
            >
              <img alt="chat" :src="icons.chats" />
              <div
                  v-if="!!chatStore.getNotificationCount"
                  class="wrap__right--chat--notification"
              >
                {{ chatStore.getNotificationCount }}
              </div>
            </li>
          </ul>
          <div class="wrap__right">
            <div v-if="!is_company" class="">
              <div v-if="isSearchOpened">
                <v-text-field
                    class="bg-white wrap__right__search-input"
                    base-color="#4ea62f"
                    variant="outlined"
                    density="compact"
                    hide-details
                    single-line
                    color="#4ea62f"
                    ref="search"
                    :placeholder="$t('CompanyNameForSearch')"
                    :label="$t('Search')"
                    @focusout="closeSearch"
                    v-model="searchString"
                    v-on:keyup.enter="searchCompany"
                    autofocus="search"
                >
                  <template v-slot:prepend-inner>
                    <img alt="lens" :src="icons.lensGreen" />
                  </template>
                  <template v-slot:append-inner>
                    <v-icon @click="clearSearch">mdi-close</v-icon>
                  </template>
                </v-text-field>
              </div>
              <div v-if="!isSearchOpened">
                <v-btn
                    class="wrap__right__search-btn"
                    variant="flat"
                    density="compact"
                    @click="openSearch"
                >
                  <img alt="lens" :src="icons.lensGreen" />
                </v-btn>
              </div>
            </div>
            <div v-if="loginStore.userInfo !== undefined" class="switch">
              <p
                  :class="{ active: cookies.get('lang') === 'de' || defaultLang }"
                  data-lang="de"
                  @click="langSwitch('de')"
              >
                De
              </p>
              <p>/</p>
              <p
                  :class="{ active: cookies.get('lang') === 'en' }"
                  data-lang="en"
                  @click="langSwitch('en')"
              >
                En
              </p>
            </div>
            <div v-if="loginStore.userInfo === undefined" class="switch">
              <p
                  :class="{ active: cookies.get('lang') === 'de' || defaultLang }"
                  data-lang="de"
                  @click="langSwitch('de')"
              >
                De
              </p>
              <p>/</p>
              <p
                  :class="{ active: cookies.get('lang') === 'en' }"
                  data-lang="en"
                  @click="langSwitch('en')"
              >
                En
              </p>
            </div>

            <div class="header__buttons" v-if="loginStore.userInfo === undefined">
              <NuxtLink to="/login">
                <Button :text="$t('LogIn')" class="btn-header" name="white" type="button" />
              </NuxtLink>
              <NuxtLink to="/register">
                <Button :text="$t('SignIn')" class="btn-header" name="green" type="button" />
              </NuxtLink>
            </div>
            <div v-else>
              <div class="header__login__info">
                <div class="header__login__info__profile">
                  <div class="header__login__info__profile-user" @click="toggleMenu">
                    <img :src="getCompanyLogo" alt="" class="header__login__info__avatar" />
                    <div class="header__login__info__user">
                      <p>{{ loginStore.userInfo?.user.fullName }}</p>
                      <p>{{ loginStore.userInfo?.user.email }}</p>
                    </div>
                  </div>
                  <ul :class="{ activeMenu: activeMenu }" class="header__login__info__menu">
                    <li class="header__login__info__profile-user" @click="toggleMenu">
                      <img :src="getCompanyLogo" alt="" class="header__login__info__avatar" />
                      <div class="header__login__info__user">
                        <p>{{ loginStore.userInfo?.user.fullName }}</p>
                        <p>{{ loginStore.userInfo?.user.email }}</p>
                      </div>
                    </li>
                    <li v-if="loginStore.roleName === 'admin'">
                      <NuxtLink class="header__login__info__item" to="/dashboard">
                        <img alt="profile" src="~/assets/header/profile.svg" /><span>{{ $t('Profile') }}</span>
                      </NuxtLink>
                    </li>
                    <li v-else-if="loginStore.roleName === 'super-admin'">
                      <NuxtLink class="header__login__info__item" to="/dashboard">
                        <img alt="profile" src="~/assets/header/profile.svg" /><span>{{ $t('Profile') }}</span>
                      </NuxtLink>
                    </li>
                    <li v-else-if="!is_company">
                      <NuxtLink class="header__login__info__item" to="/user-profile">
                        <img alt="profile" src="~/assets/header/profile.svg" /><span>{{ $t('Profile') }}</span>
                      </NuxtLink>
                    </li>
                    <li v-else>
                      <NuxtLink class="header__login__info__item" to="/profile">
                        <img alt="profile" src="~/assets/header/profile.svg" /><span>{{ $t('Profile') }}</span>
                      </NuxtLink>
                    </li>

                    <li
                        v-if="loginStore.roleName === 'company-admin' && loginStore.isHasPersonalProfile"
                        @click="loginAs"
                    >
                      <NuxtLink class="header__login__info__item" to="/">
                        <img alt="login-as" src="~/assets/header/go-to.svg" /><span>{{ $t('Personal Profile') }}</span>
                      </NuxtLink>
                    </li>

                    <li v-if="loginStore.roleName === 'customer' && loginStore.isHasCompanyProfile" @click="loginAs">
                      <NuxtLink class="header__login__info__item" to="/">
                        <img alt="login-as" src="~/assets/header/go-to.svg" /><span>{{ $t('Company Account') }}</span>
                      </NuxtLink>
                    </li>

                    <li @click="logOut">
                      <NuxtLink class="header__login__info__item" to="/">
                        <img alt="logout" src="~/assets/header/logout.svg" /><span>{{ $t('LogOut') }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="header-mobile">
        <button v-show="!mobileMenu" class="header-mobile__btn" @click="openMobileMenu">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.125 7.125H19.875M4.125 12H19.875M4.125 16.875H19.875"
                stroke="black"
                stroke-linecap="round"
                stroke-miterlimit="10"
            />
          </svg>
        </button>
        <button v-show="mobileMenu" class="header-mobile__btn" @click="openMobileMenu">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.0664 12L21.1523 20.0977L20.0977 21.1523L12 13.0664L3.90234 21.1523L2.84766 20.0977L10.9336 12L2.84766 3.90234L3.90234 2.84766L12 10.9336L20.0977 2.84766L21.1523 3.90234L13.0664 12Z"
                fill="black"
            />
          </svg>
        </button>
        <div class="header-mobile__logo">
          <NuxtLink to="/">
            <img alt="logo" src="~/assets/logo-mobile.svg" />
          </NuxtLink>
        </div>
        <div v-if="loginStore.userInfo === undefined" class="header-mobile__info">
          <NuxtLink v-if="!mobileMenu" :to="{ name: 'login' }">Log in</NuxtLink>
          <div v-if="mobileMenu" class="switch-mobile">
            <p :class="{ active: cookies.get('lang') === 'de' || defaultLang }" data-lang="de" @click="langSwitch('de')">
              De
            </p>
            <p>/</p>
            <p :class="{ active: cookies.get('lang') === 'en' }" data-lang="en" @click="langSwitch('en')">En</p>
          </div>
        </div>
        <div v-else class="header-mobile__info">
          <div v-if="mobileMenu" class="switch-mobile">
            <p :class="{ active: cookies.get('lang') === 'de' || defaultLang }" data-lang="de" @click="langSwitch('de')">
              De
            </p>
            <p>/</p>
            <p :class="{ active: cookies.get('lang') === 'en' }" data-lang="en" @click="langSwitch('en')">En</p>
          </div>

          <img
              v-else
              :src="getCompanyLogo"
              :style="{ cursor: 'pointer' }"
              alt="logo"
              @click="goToProfile"
          />

          <div v-if="isNotificationShow" class="wrap__right--chat" @click="goToChat(true)">
            <img :src="icons.chats" alt="chat" />
            <div v-if="!!chatStore.getNotificationCount" class="wrap__right--chat--notification">
              {{ chatStore.getNotificationCount }}
            </div>
          </div>
        </div>
      </div>
      <div v-show="mobileMenu" class="header-mobile__sub-menu">
        <div class="container">
          <div v-if="loginStore.userInfo !== undefined" class="wrap-mobile-user">
            <div class="header__login__info__profile-user" @click="switchToProfile">
              <img :src="getCompanyLogo" alt="" class="header__login__info__avatar" />
              <div class="header__login__info__user">
                <p>{{ loginStore.userInfo?.user.fullName }}</p>
                <p>{{ loginStore.userInfo?.user.email }}</p>
              </div>
            </div>
            <button v-if="mobileMenu" class="mobile-logout" @click="logOut">
              <i class="icon-logout"></i>
            </button>
          </div>
          <div v-if="mobileMenu" class="mt-4 login-as-block">
            <div v-if="loginStore.roleName === 'company-admin' && loginStore.isHasPersonalProfile" @click="loginAs">
              <div class="login-as">
                <img alt="logout" src="~/assets/header/go-to.svg" /><span>{{ $t('Personal Profile') }}</span>
              </div>
            </div>

            <div v-if="loginStore.roleName === 'customer' && loginStore.isHasCompanyProfile" @click="loginAs">
              <div class="login-as">
                <img alt="logout" src="~/assets/header/go-to.svg" /><span>{{ $t('Company Account') }}</span>
              </div>
            </div>
          </div>
          <ul>
            <li v-if="items?.id === 0 || items?.id === 2 || items?.id === 3" class="list">
              <p class="title">{{ items?.title }}</p>
              <v-text-field
                  v-if="!is_company"
                  class="bg-white header-mobile__sub-menu__search-input"
                  base-color="#4ea62f"
                  variant="outlined"
                  density="compact"
                  :placeholder="$t('CompanyNameForSearch')"
                  hide-details
                  single-line
                  color="#4ea62f"
                  ref="search"
                  v-model="searchString"
                  v-on:keyup.enter="searchCompanyMobile"
              >
                <template v-slot:prepend-inner>
                  <img alt="lens" :src="icons.lensGreen" />
                </template>
                <template v-slot:append-inner>
                  <v-icon @click="clearSearch">mdi-close</v-icon>
                </template>
              </v-text-field>
              <ul>
                <li v-for="(i, index) in items?.list" :key="index" class="item">
                  <NuxtLink :to="`${i.url}`" @click="closeMenu">
                    <p>{{ i.title }}</p>
                    <span>{{ i.text }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="list">
              <p class="title">{{ baseItem?.title }}</p>
              <ul>
                <li v-for="(i, index) in baseItem?.list" :key="index" class="item">
                  <NuxtLink :to="`${i.url}`" @click="closeMenu">
                    <p>{{ i.title }}</p>
                    <span>{{ i.text }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Container>
    <animation-block v-if="show" :show="show" class="loader-lang" />
  </header>
</template>

<script>
import { useCookies } from 'vue3-cookies'
import Container from "~/src/components/Reuseble/Container.vue";
import Button from '~/src/components/Reuseble/Button.vue'
import { useI18n } from 'vue-i18n'
import { useLogin } from '~/stores/loginStore'
import { companyEvent, companyName, useCompanyStore } from '~/stores/companyStore'
import AnimationBlock from '~/src/components/Reuseble/AnimationBlock.vue'
import { useChatStore } from '~/stores/chatStore'
import chats from '~/assets/company/chats.svg'
import lensGreen from '~/assets/chat/lens-green.svg';

const { cookies } = useCookies()

export default {
  name: 'HeaderMenu',
  components: { AnimationBlock, Button, Container },
  data() {
    return {
      icons: {
        chats,
        lensGreen
      },
      show: false,
      defaultLang: true,
      companyStore: useCompanyStore(),
      chatStore: useChatStore(),
      mobileMenu: false,
      activeMenu: false,
      items: undefined,
      loginStore: useLogin(),
      cookies: cookies,
      activeIndex: null,
      landSwitch: 'en',
      companyData: {},
      locale: useI18n({
        useScope: 'global'
      }),

      baseItem: {
        title: `${ this.$t('WhyGTG') }`,
        list: [
          {
            url: 'about-us',
            title: `${ this.$t('AboutUs') }`,
            text: `${ this.$t('AboutUsDescr') }`
          },
          {
            url: 'faq',
            title: 'FAQ',
            text: `${ this.$t('FAQDescr') }`
          },
          {
            url: 'contact-us',
            title: `${ this.$t('Contact') }`,
            text: `${ this.$t('ContactDescr') }`
          }
        ]
      },
      nameOfHeader: [
        {
          id: 3,
          name: 'company-admin',
          title: `${ this.$t('FindOffers') }`,
          list: [
            {
              url: 'offers-list',
              title: `${ this.$t('FindCustomers') }`,
              text: `${ this.$t('FindCustomersDescr') }`
            },
            {
              url: 'profile-data',
              title: `${ this.$t('FillProfile') }`,
              text: `${ this.$t('FillProfileDescr') }`
            }
          ]
        },
        {
          id: 2,
          name: 'customer',
          title: `${ this.$t('FindCompanies') }`,
          list: [
            {
              url: 'user-request-send',
              title: `${ this.$t('FindCompanies') }`,
              text: `${ this.$t('FindCompaniesDescr') }`
            },
            {
              url: 'user-offers',
              title: `${ this.$t('MakeRequest') }`,
              text: `${ this.$t('MakeRequestDescr') }`
            }
          ]
        },
        {
          id: 1,
          name: 'super-admin',
          title: `${ this.$t('WhyGTG') }`,
          list: [
            {
              url: 'about-us',
              title: `${ this.$t('AboutUs') }`,
              text: `${ this.$t('AboutUsDescr') }`
            },
            {
              url: 'faq',
              title: 'FAQ',
              text: `${ this.$t('FAQDescr') }`
            },
            {
              url: 'contact-us',
              title: `${ this.$t('Contact') }`,
              text: `${ this.$t('ContactDescr') }`
            }
          ]
        },
        {
          id: 0,
          name: 'customer-not-login',
          title: `${ this.$t('FindCompanies') }`,
          list: [
            {
              url: 'user-request-send',
              title: `${ this.$t('FindCompanies') }`,
              text: `${ this.$t('FindCompaniesDescr') }`
            }
          ]
        }
      ],
      is_company: false,
      searchString: '',
      isSearchOpened: false,
    }
  },
  computed: {
    isNotificationShow() {
      return this.loginStore.userInfo?.user?.roleName === 'customer' || this.loginStore.userInfo?.user?.roleName === 'company-admin';
    },
    getCompanyLogo() {
      return this.loginStore.getCompanyLogo ||
          this.companyData.logo ||
          this.loginStore.userInfo?.user.companyLogo ||
          this.loginStore.userInfo?.user.avatar;
    },
  },
  async mounted() {
    this.changeLang()
    if (this.loginStore.roleName === 'company-admin') {
      await this.companyStore.getInfo()
    }
    if (this.loginStore.userInfo?.user !== undefined) {
      this.items = this.nameOfHeader.find(
          (id) => id.name === this.loginStore.roleName
      )
    } else {
      this.items = this.nameOfHeader.find(id => id.name === 'customer-not-login')
    }

    const onClick = (event) => {
      if (!(this.$el === event.target || this.$el.contains(event.target))) {
        this.activeMenu = false
        this.activeIndex = null
      }
    }

    document.addEventListener('click', onClick)
    this.clickOutsideEvent = onClick
  },
  created() {
    this.is_company = (this.loginStore.userInfo?.user?.roleName === 'company-admin'
        || this.loginStore.userInfo?.user?.roleName === 'super-admin'
        || this.loginStore.userInfo?.user?.roleName === 'admin')
    if (this.loginStore.roleName === 'company-admin') {
      companyEvent.subscribe(companyName.getInfo, this.seeCompanyInfo)
    }
  },
  beforeUnmount() {
    if (this.loginStore.roleName === 'company-admin') {
      companyEvent.unsubscribe(companyName.getInfo, this.seeCompanyInfo)
    }
    document.removeEventListener('click', this.clickOutsideEvent)
  },
  methods: {
    goToProfile() {
      if (this.loginStore.roleName === 'customer') {
        this.$router.push({ path: '/user-data' })
      }
      if ( this.loginStore.roleName === "super-admin") {
        this.$router.push({ path: '/dashboard' })
      }
      if (this.loginStore.roleName === "company-admin"){
        this.$router.push({ path: '/profile-data' })
      }
    },
    goToChat(isMobile) {
      if (this.loginStore.roleName === 'customer') {
        this.$router.push({ path: '/user-chat' })
        return
      }
      this.$router.push({ path: `/chat${isMobile ? '/:true?' : ''}` });
    },
    changeLang() {
      if (cookies.get('lang') === 'de') {
        this.defaultLang = false
      } else if (cookies.get('lang') === 'en') {
        this.defaultLang = false
      } else {
        this.defaultLang = true
      }
    },
    langSwitch(selectedLang) {
      this.show = true
      if (this.defaultLang === true) {
        this.defaultLang = false
      }
      cookies.set('lang', selectedLang)

      window.location.reload()
    },
    async loginAs() {
      if (this.loginStore.roleName === 'customer') {
        await this.loginStore.loginAsCompany()
        await this.$router.push({path: '/profile-data'})
        window.location.reload()
      } else if (this.loginStore.roleName === 'company-admin') {
        await this.loginStore.loginAsCustomer()
        await this.$router.push({path: '/user-data'})
        window.location.reload()
      }
    },
    logOut() {
      this.loginStore.logout()
      this.items = this.nameOfHeader.find(id => id.name === 'customer-not-login')

      this.mobileMenu = false
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'visible'
      }
    },
    openMobileMenu() {
      if (this.mobileMenu === false) {
        this.mobileMenu = !this.mobileMenu
        document.body.style.overflow = 'hidden'
      } else {
        this.mobileMenu = !this.mobileMenu
        document.body.style.overflow = 'visible'
      }
    },
    switchToProfile() {
      if (this.loginStore.userInfo?.user.roleName === 'company-admin') {
        this.$router.push('profile-data')
      } else if ( this.loginStore.userInfo?.user.roleName === 'super-admin') {
        this.$router.push('dashboard')
      } else if (this.loginStore.userInfo?.user.roleName === 'admin') {
        this.$router.push('dashboard')
      } else {
        this.$router.push('user-data')
      }
      document.body.style.overflow = 'visible'
    },
    closeMenu() {
      this.mobileMenu = false
      document.body.style.overflow = 'visible'
    },
    toggleMenu() {
      if (this.activeMenu === true) {
        this.activeMenu = false
      } else {
        this.activeMenu = true
        this.activeIndex = null
      }
    },
    setActive(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
        this.activeMenu = false
      }
    },
    seeCompanyInfo(data) {
      if (data instanceof Error) {
        return
      }
      this.companyData = data
    },
    openSearch() {
      this.isSearchOpened = true;
      this.$nextTick(() => this.$refs.search.focus());
    },
    closeSearch() {
      if (!this.searchString) {
        this.isSearchOpened = false;
      }
    },
    clearSearch() {
      this.searchString = '';
      this.isSearchOpened = false;
    },
    async searchCompany() {
      if (this.searchString) {
        await this.$router.replace('/user-request-send?search=' + this.searchString);
        location.reload()
        this.searchString = ''
        this.isSearchOpened = false;
      }
    },
    async searchCompanyMobile() {
      if (this.searchString) {
        this.closeMenu();
        await this.$router.replace('/user-request-send?search=' + this.searchString);
        location.reload()
        this.searchString = ''
        this.isSearchOpened = false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.loader-lang {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}

#header {
  position: relative;
  border-bottom: 1px solid #ccc;
  @media (max-width: 1200px) {
    border-bottom: none;
  }
}

.header {
  @include flex(row, flex-start, center);
  @media (max-width: 1200px) {
    display: none;
  }

  &__logo img {
    width: 114px;
    margin-right: 76px;
    height: 26px;
  }

  &__nav {
    @include flex(row, center, center);
    gap: 60px;
    cursor: pointer;

    &__item {
      gap: 8px;
    }

    &__item .wrap {
      @include flex(row, center, center);
      gap: 8px;
      padding: 30px 0;
      @include transition;
    }

    &__item:hover .wrap {
      color: $green;
    }

    &__item .wrap__text {
      display: block;
    }

    &__item .wrap__arr {
      display: inherit;
      @include transition;

      svg {
        fill: currentColor;
      }
    }

    &__item.active .wrap {
      color: $green;
    }

    &__item.active .wrap__arr {
      transform: rotate(180deg);
    }

    .sub-menu {
      overflow: hidden;
      position: absolute;
      z-index: 100;
      top: 85px;
      left: 0;
      width: 100%;
      height: 0;
    }

    .activeBlock {
      height: auto;
      background: $white;
      border-bottom: 1px solid #ccc;
    }

    .list {
      padding: 20px;
      background-color: $white;
      @include flex(row, flex-start, flex-start);
      gap: 100px;

      &__item {
        width: 33.3%;
        border-radius: 10px;
        background: $white;
        padding: 20px;
        @include transition;

        &:hover {
          background: #eff9eb;
        }

        &__title {
          color: $black;
          font-family: $font-main;
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
          margin-bottom: 9px;
        }

        &__text {
          color: #686868;
          font-family: $font-main;
          font-size: 13px;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }

  &__buttons {
    @include flex(row, flex-end, center);
    gap: 14px;
  }

  &__login__info {
    position: relative;
    border-radius: 4px;
    background: $white;
    padding: 10px 4px;
    height: 64px;
    z-index: 100;
    cursor: pointer;
    @include transition;

    &__profile {
      @include flex(column, flex-start, flex-start);
    }

    &__profile-user {
      @include flex(row, flex-start, center);
    }

    &__avatar {
      width: 44px;
      height: 44px;
      object-fit: cover;
    }

    &__user {
      margin-left: 10px;
      line-height: 130%;
      font-style: normal;
      font-family: $font-main;
      color: $black;

      p:first-child {
        font-size: 14px;
        font-weight: 600;
      }

      p:last-child {
        font-size: 12px;
        font-weight: 500;
      }
    }

    &__menu {
      position: absolute;
      top: 0px;
      left: 0;
      z-index: 10;
      padding: 10px 4px;
      width: 100%;
      @include flex(column, flex-start, flex-start);
      gap: 16px;
      @include transition;
      border-radius: 4px;
      box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.05);
      background-color: $white;
      pointer-events: none;
      opacity: 0;
    }

    &__item {
      @include flex(row, flex-start, center);
      gap: 16px;
      padding: 0 11px;
    }
  }
}

.header-mobile {
  display: none;
  @media (max-width: 1200px) {
    @include flex(row, space-between, center);
    padding: 16px 0;
    height: 58px;

    .wrap__right {
      &--chat {
        & > img {
          width: 24px;
        }
      }
    }
  }

  &__logo {
    margin-left: 40px;
  }

  &__info {
    @include flex(row, space-between, center);
    gap: 20px;
    padding-bottom: 10px;

    img {
      @media (max-width: 1200px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  &__sub-menu {
    display: none;
    @media (max-width: 1200px) {
      overflow: auto;
      display: block;
      z-index: 10;
      position: absolute;
      top: 58px;
      left: 0;
      width: 100%;
      height: 100vh;
      padding: 20px 0 100px 0;
      background-color: $white;

      &__search-input {
        row-gap: 10px;

        :deep(.v-field__input) {
          caret-color: black;
          color: black;
        }

        :deep(.v-field__prepend-inner) {
          width: 24px;
        }

        :deep(.v-field__append-inner) {
          width: 24px;
        }
      }
    }
  }

  &__sub-menu {
    @include transition;
    z-index: 999999;

    .title {
      color: $green;
      font-family: $font-main;
      font-size: 11px;
      font-weight: 500;
      line-height: 17px;
      margin-bottom: 12px;
    }

    .list {
      margin-top: 32px;
    }

    .item {
      border-radius: 4px;
      border: 1px solid #eee;
      background: $white;
      padding: 4px 16px;
    }

    .item:not(:last-child) {
      margin-bottom: 18px;
    }

    .item p {
      color: $black;
      font-family: $font-main;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
    }

    .item span {
      color: #686868;
      font-family: $font-main;
      font-size: 11px;
      font-weight: 400;
      line-height: 150%;
    }
  }
}

.activeMenu {
  @include transition;
  pointer-events: all;
  opacity: 1;
}

.wrap {
  @include flex(row, space-between, center);
  width: 100%;
}

.btn-header {
  white-space: nowrap;
}

.switch {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
  gap: 14px;
  @media (max-width: 1200px) {
    margin-right: 15px;
    margin-left: 10px;
  }

  p {
    color: #8e8e8e;
    cursor: pointer;
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &.active {
      color: #4ea62f;
    }
  }
}

.switch-mobile {
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    color: #8e8e8e;
    cursor: pointer;
    text-align: center;
    font-family: $font-manrope;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;

    &.active {
      color: #4ea62f;
    }
  }
}

.mobile-logout {
  @include flex(row, center, center);
  border: 2px solid $grey-dark;
  background-color: transparent;
  color: $grey-dark;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  @include transition;

  &:hover {
    background-color: $grey-dark;
    color: $white;
  }
}

.wrap-mobile-user {
  @include flex(row, space-between, flex-start);
}

.wrap__right {
  @include flex(row, flex-end, center);
  gap: 10px;

  &--chat {
    margin-top: 10px;
    position: relative;
    cursor: pointer;

    &--notification {
      @include regular400(12px, $white);
      @include flex(row, center, center);
      position: absolute;
      display: inline-flex;
      top: 11px;
      right: -8px;
      height: 17px;
      min-width: 17px;
      margin-left: 5px;
      background-color: $green;
      padding: 5px;
      border-radius: 50%;
      align-self: center;
    }
  }

  &__search-input {
    width: 240px;

    :deep(.v-field__input) {
      caret-color: black;
      color: black;
    }

    :deep(.v-field__prepend-inner) {
      width: 24px;
    }

    :deep(.v-field__append-inner) {
      width: 24px;
    }
  }
}

.login-as-block {
  display: flex;
  justify-content: end;
}

.login-as {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
