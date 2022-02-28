<template>
  <div class="p-container">
    <div class="p-bar">
      <div class="p-bar-value"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressLinear'
}
</script>

<style scoped>
.p-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
}
.p-bar {
  height: 4px;
  background-color: rgba(5, 114, 206, 0.2);
  width: 100%;
  overflow: hidden;
}

.p-bar-value {
  width: 100%;
  height: 100%;
  background-color: rgb(5, 114, 206);
  animation: indeterminate 1s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminate {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}
</style>
