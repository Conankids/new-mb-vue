<template>
  <li class="small clear" v-waves.block="true">
    <div class="global-padding">
      <a :href="`/mb/article/article/${item.blogid}.html`">
        <div class="stream-box">
          <div class="stream-img">
            <div v-if="item.elite==1" class="elite">
              <img src="../../style/images/elite.png">
            </div>
            <img
              :data-background-size="`auto ${60/75}rem`"
              v-lazy="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/230/h/230/q/100`"
              :src="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/50/h/50/q/30`"
            />
            <div v-if="item.video==1" class="video">
              <i class="icon icon-video"></i>
            </div>
          </div>
          <div class="stream-right">
            <div class="stream-title ft14">{{ item.title }}</div>
            <div class="stream-discount red">
              <!--红色价格 特色描述-->
              <span v-if="item.format" class="red ft-12">
                    <span class="ft16">{{ item.format.middle_left }}</span>
                    <span class="ft12 ml10">{{ item.format.middle_right }}</span>
                  </span>
              <span v-else-if="item.feature" class="red ft-12">{{ item.feature }}</span>
              <template v-else>
                <span v-if="item.productinfo && item.productinfo.price" class="ft16">￥{{ item.productinfo.price }}</span>
                <span v-if="item.productinfo && item.productinfo.discount && item.productinfo.discount>0"
                      class="ml10 ft12">{{ item.productinfo.discount }}折</span>
              </template>
            </div>
            <div class="stream-mall gray ft12">
              <span v-if="item.format">{{ item.format.bottom_left }}</span>
              <span v-else-if="item.productinfo && item.productinfo.mall" class="mall">{{ item.productinfo.mall
                }}</span>
              <span v-else-if="item.author" class="author">{{ item.author }}</span>
              <span class="time fr">{{ item.addtime }}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </li>
</template>

<script>

	export default {
		props: {
			item: {
				type: Object
			}
		},
		data: function () {
			return {}
		},
	}
</script>
