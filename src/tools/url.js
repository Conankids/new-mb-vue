
export default {
  getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var search = window.location.href.split('?')[1];
    if(search){
      var r = search.match(reg);
      if (r != null) return unescape(r[2]);
    }
    return null;
  }
}
