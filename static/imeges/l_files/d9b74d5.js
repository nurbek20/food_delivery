(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{528:function(e,t,o){var content=o(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("56296cd6",content,!0,{sourceMap:!1})},529:function(e,t,o){var content=o(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("1cb66b95",content,!0,{sourceMap:!1})},530:function(e,t,o){var content=o(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("0ace817b",content,!0,{sourceMap:!1})},571:function(e,t,o){"use strict";o(528)},572:function(e,t,o){var r=o(12)(!1);r.push([e.i,".bk-promotions{height:410px;overflow:hidden}.bk-promotions .bk-content-wrapper{position:relative}@media(max-width:767px){.bk-promotions{padding:24px 16px 12px;height:auto}}.bk-promotions__wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform}.bk-promotions__slide{width:100%;height:100%;overflow:hidden;flex-shrink:0}.bk-promotions__slide img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}@media(max-width:767px){.bk-promotions__slide{width:284px;height:185px;border-radius:12px;margin-right:16px}}.bk-promotions__pagination{display:flex;align-items:center;position:absolute;bottom:20px;z-index:2;grid-gap:14px;gap:14px}@media(max-width:767px){.bk-promotions__pagination{display:none}}.bk-promotions__page{width:13px;height:13px;border-radius:50%;background-color:#f5ebdc;font-size:0;cursor:pointer}.bk-promotions__page--active{background-color:#502314}.bk-promotions__navigation{display:flex;align-items:center;position:absolute;bottom:20px;right:0;z-index:2;grid-gap:14px;gap:14px}@media(max-width:767px){.bk-promotions__navigation{display:none}}.bk-promotions__arrow{width:50px;height:50px;padding:15px;display:flex;align-items:center;justify-content:center;background-color:transparent;border:2px solid #f5ebdc;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.02),0 0 15px rgba(0,0,0,.1);color:#f5ebdc;cursor:pointer}.bk-promotions__arrow:hover{background-color:#f5ebdc;color:#87604f}.bk-promotions__arrow--right{transform:rotate(180deg)}",""]),e.exports=r},573:function(e,t,o){"use strict";o(529)},574:function(e,t,o){var r=o(12)(!1);r.push([e.i,".bk-seo__title{font-weight:700;font-size:40px;line-height:110%}.bk-seo__text{font:500 14px/120% Rotonda}.bk-seo{padding:80px 16px 120px;display:flex;flex-direction:column;align-items:center;max-width:600px;margin:0 auto}@media(max-width:767px){.bk-seo{padding-bottom:100px}}.bk-seo__title{margin:0}.bk-seo__text{margin-top:40px;color:#87604f}",""]),e.exports=r},575:function(e,t,o){"use strict";o(530)},576:function(e,t,o){var r=o(12)(!1);r.push([e.i,".bk-category__title{font-size:60px;line-height:100%}.bk-categories__toggle,.bk-category__item{font-size:20px;line-height:120%}.bk-categories{padding:12px 16px 0;border-bottom:1px solid #d7c7b5;position:-webkit-sticky;position:sticky;background-color:#f5ebdc;top:80px;max-height:47px;overflow:hidden;z-index:1}.bk-categories .bk-content-wrapper{display:flex;grid-gap:12px 24px;gap:12px 24px;flex-shrink:0;white-space:nowrap;flex-wrap:wrap;position:relative;padding-right:95px}@media(max-width:767px){.bk-categories .bk-content-wrapper{overflow-x:auto;flex-wrap:nowrap;padding-right:0}}.bk-categories .bk-content-wrapper::-webkit-scrollbar{display:none}@media(max-width:767px){.bk-categories{top:60px;max-height:none}}.bk-categories-is-full{max-height:none}.bk-categories-is-full .bk-categories__toggle{color:#87604f}.bk-category__item{text-decoration:none;color:#87604f;padding-bottom:8px}.bk-category__item.nuxt-link-exact-active{color:#d62300;border-bottom:3px solid #d62300}@media(max-width:767px){.bk-category__item{font-size:18px;line-height:22px}}.bk-categories__toggle{color:#87604f;position:absolute;right:0;top:0;width:95px;color:#d62300;display:flex;align-items:center;justify-content:center;cursor:pointer}.bk-categories__toggle svg{margin-left:10px;height:18px;width:10px;transform:rotate(-90deg)}@media(max-width:767px){.bk-categories__toggle{display:none}}.bk-category__title{font-weight:700;margin-top:32px}@media(max-width:767px){.bk-category__title{font-size:32px;line-height:110%;padding:0 16px}}.bk-dishes{margin-top:60px;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:60px 32px;gap:60px 32px;border-bottom:1px solid #d7c7b5;padding-bottom:15px}@media(max-width:767px){.bk-dishes{margin-top:16px;display:block}}",""]),e.exports=r},579:function(e,t,o){"use strict";o.r(t);var r=o(26),n=(o(50),o(39),o(28),o(56),o(213)),c=o(89),l=o.n(c),d={props:["banners"],data:function(){return{options:{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{spaceBetween:16,slidesPerView:"auto"},768:{slidesPerView:1,spaceBetween:0,centeredSlides:!0}}},activeSlide:0}},components:{Arrow:l.a},directives:{swiper:n.directive},methods:{selectSlide:function(e){var t=this.promotionSwiper;this.activeSlide=e,t.slideTo(e)},slideChange:function(){var e=this.promotionSwiper;this.activeSlide=e.activeIndex}},watch:{"$route.path":{handler:function(){var e=this.$gtm,t=this.$route,o=this.$store,r=this.banners,n=o.getters["menu/categories"].find((function(e){return t.params.id==e.id}));e.sendEvent({event:"gtm-ee-event",eventCategory:"mainpage",eventAction:"banner show",eventLabel:"Баннеры на главной".concat(null!=n&&n.name?". ".concat(n.name):""),eventNonInteraction:!0,additionalFields:{ecommerce:{promoView:{promotions:r.map((function(e,t){return{id:e.path||e.slug,name:null==n?void 0:n.name,position:t}}))}}}})},immediate:!0}}},m=(o(571),o(1)),x=Object(m.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"swiper",rawName:"v-swiper",value:e.options,expression:"options"}],staticClass:"bk-promotions",attrs:{"instance-name":"promotionSwiper"},on:{"slide-change":e.slideChange}},[o("div",{staticClass:"bk-promotions__wrapper swiper-wrapper"},e._l(e.banners,(function(t){return o("a",{key:t.id,staticClass:"bk-promotions__slide swiper-slide",attrs:{href:t.path}},[o("picture",[o("source",{attrs:{srcSet:t.previewImage&&t.previewImage.desktop.webp.default,type:"image/webp",media:"(max-width: 767px)"}}),e._v(" "),o("source",{attrs:{srcSet:t.previewImage&&t.previewImage.desktop.default.default,media:"(max-width: 767px)"}}),e._v(" "),o("source",{attrs:{srcSet:t.previewLargeImage&&t.previewLargeImage.desktop.webp.default,type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:t.previewLargeImage&&t.previewLargeImage.desktop.default.default,alt:t.slug}})])])})),0),e._v(" "),o("div",{staticClass:"bk-content-wrapper"},[o("div",{staticClass:"bk-promotions__pagination"},e._l(e.banners,(function(t,r){return o("div",{key:t.id,staticClass:"bk-promotions__page swiper-pagination",class:{"bk-promotions__page--active":e.activeSlide===r},on:{click:function(t){return e.selectSlide(r)}}})})),0),e._v(" "),o("div",{staticClass:"bk-promotions__navigation"},[o("div",{staticClass:"bk-promotions__arrow bk-promotions__arrow--left",on:{click:function(t){return e.promotionSwiper.slidePrev()}}},[o("arrow")],1),e._v(" "),o("div",{staticClass:"bk-promotions__arrow bk-promotions__arrow--right",on:{click:function(t){return e.promotionSwiper.slideNext()}}},[o("arrow")],1)])])])}),[],!1,null,null,null).exports,_=o(306),h={data:function(){return{defaultDescription:"Ежедневно в рестораны БУРГЕР КИНГ во всем мире приходит более одиннадцати миллионов\nпосетителей. И неудивительно: ведь наши рестораны известны вкусом фирменных блюд и\nотличным соотношением цены и качества.<br/><br/>\n\nОснованный в 1954 году, БУРГЕР КИНГ занимает второе\nпо величине место в мире среди сетей ресторанов быстрого питания, специализирующихся на\nгамбургерах. Оригинальный бургер «Воппер», ставка на ингредиенты высшего качества,\nфирменные рецепты и комфорт для посещения всей семьей — вот то, что уже пятьдесят с лишним\nлет успешной работы является отличительной чертой нашего бренда.<br/><br/>\n\nМы готовы работать со всеми, кто готов в долгосрочной перспективе выполнять стандарты\nдоставки: Доставка 30 минут, «Трехточечная» (10 минут на прибытие в ресторан, 20 минут\nдоставка до адресата, 20 минут возврат в ресторан оборудования), мед книжки у курьеров.<br/><br/>\n\nВы нам интересны в любом случае: если вы можете доставлять в нескольких городах или только\nв одном городе. Готовы рассматривать долгосрочные контракты с таксопарками."}}},f=(o(573),Object(m.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bk-seo"},[o("h2",{staticClass:"bk-seo__title"},[e._v("Отличная еда на первом месте")]),e._v(" "),o("p",{staticClass:"bk-seo__text",domProps:{innerHTML:e._s(e.defaultDescription)}})])}),[],!1,null,null,null).exports),k={asyncData:function(e){return e.$axios.get("/api-web-front/api/v1/actions/main").then((function(e){return{banners:e.data.items}}))},data:function(){return{isFullCategories:!1,banners:[]}},computed:{firstCategory:function(){var e=Object(r.a)(this.categories,1)[0];return e},categories:function(){var e=this.$store.getters["menu/fullCategories"];return e},otherCategories:function(){return this.categories.slice(1)}},beforeMount:function(){var e=this.$store,t=this.$modal;e.state.ordering.currentDishOrder&&t("dish",{}),e.dispatch("menu/getCoupons"),e.dispatch("menu/getCategories"),e.dispatch("menu/getPrices")},components:{Promotions:x,ReceiveInfo:_.a,Arrow:l.a,SeoText:f},watch:{"$store.state.receives.address":function(){this.$store.dispatch("menu/getCoupons")}}},w=(o(575),Object(m.a)(k,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.$isMobile?o("receive-info"):e._e(),e._v(" "),o("promotions",{attrs:{banners:e.banners}}),e._v(" "),o("div",{ref:"categoriesElement",staticClass:"bk-categories",class:{"bk-categories-is-full":e.isFullCategories}},[o("div",{staticClass:"bk-content-wrapper"},[e.firstCategory?o("nuxt-link",{staticClass:"bk-category__item",attrs:{to:{name:"index"}}},[e._v("\n        "+e._s(e.firstCategory.name)+"\n      ")]):e._e(),e._v(" "),e._l(e.otherCategories,(function(t){return o("nuxt-link",{key:t.id,staticClass:"bk-category__item",attrs:{to:{name:"index-category-id",params:{id:t.id}}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),e._v(" "),o("div",{staticClass:"bk-categories__toggle",on:{click:function(t){e.isFullCategories=!e.isFullCategories}}},[e._v("\n        "+e._s(e.isFullCategories?"Меньше":"Еще")+"\n        "),o("arrow")],1)],2)]),e._v(" "),o("nuxt-child",{attrs:{categoriesRef:e.$refs.categoriesElement}}),e._v(" "),o("seo-text")],1)}),[],!1,null,null,null));t.default=w.exports}}]);