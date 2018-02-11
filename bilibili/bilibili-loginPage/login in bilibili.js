var ele_pass = document.querySelector(".loginInSd");
var ele_progress = document.querySelector(".vali_pass_inner_progress");
var begin_classname = ele_progress.className;
var regxs = [];
regxs.push(/[^a-zA-Z0-9_]/g);
regxs.push(/[a-zA-Z]/g);
regxs.push(/[0-9]/g);
 
ele_pass.onkeyup = function () {
  var val = this.value;
  var len = val.length;
  var sec = 0;
  if (len >= 6) { // 至少六个字符
    for (var i = 0; i < regxs.length; i++) {
      if (val.match(regxs[i])) {
        sec++;
      }
    }
  }
  var result = (sec / regxs.length) * 100;
  ele_progress.style.width = result + "%";
  if(result > 0 && result <= 50){
    ele_progress.setAttribute("class",begin_classname + " error");
  }else if (result > 50 && result < 100) {
    ele_progress.setAttribute("class",begin_classname + " middle");
  } else if (result == 100) {
    ele_progress.setAttribute("class",begin_classname + " strong");
  }
 
}