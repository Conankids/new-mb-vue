<style>
  .mask-cover {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.02), rgba(35, 35, 35, 0.69));
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.02), rgba(35, 35, 35, 0.69));
    background: -ms-linear-gradient(top, rgba(255, 255, 255, 0.02), rgba(35, 35, 35, 0.69));
    background: -o-linear-gradient(top, rgba(255, 255, 255, 0.02), rgba(35, 35, 35, 0.69));
    background: linear-gradient(top, rgba(255, 255, 255, 0.02), rgba(35, 35, 35, 0.69));
  }
</style>
<script type="text/javascript">

  if (!window.URL) window.URL = {}
  window.URL['login'] = window.URL['uid'] = "<?php echo $_SESSION['uid'];?>";
  window.URL['ioid'] = "<?php echo $_SESSION['uid'] . '&' . md5('news' . $_SESSION['uid']);?>";
  window.URL['user-face'] = "<?php echo Common::getFace(Yii::app()->session['uid']);?>/230x230";
</script>