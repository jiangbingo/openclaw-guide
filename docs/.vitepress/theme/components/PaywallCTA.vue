<template>
  <div class="paywall-cta">
    <div class="paywall-content">
      <h3>🎯 需要详细指导？</h3>
      <p>这部分内容涉及具体配置，需要专业指导才能顺利完成。</p>
      <ul>
        <li>✅ 完整的安装配置指导</li>
        <li>✅ 针对你的环境解决问题</li>
        <li>✅ 后续使用技术支持</li>
      </ul>
    </div>

    <div class="paywall-action">
      <img src="/images/xianyu-qr.jpg" alt="咸鱼扫码咨询" class="qr-code" />
      <p class="price">💰 服务价格：¥39/次</p>
      <a href="#" class="cta-button" @click.prevent="handleClick">扫码咸鱼咨询</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  alert('请扫描上方二维码，通过咸鱼联系我获取服务。\n\n你也可以直接在咸鱼搜索：OpenClaw 安装指导')
}
</script>

<style scoped>
/* 样式已在 custom.css 中定义 */
</style>
