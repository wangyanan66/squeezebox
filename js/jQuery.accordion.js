(function($){
  $accordion = function(o){
    var defaluts = {
       imageData:['fq1.jpg','fq2.jpg','fq3.jpg','fq4.jpg','fq5.jpg'],
       container:'#box li',
       hoverWidth:800,
       otherWidth:100,
       leaveWidth:240,
       overEvent:'mouseover',
       outEvent:'mouseout',
       box:'#box'
    };
    //循环一下把传入的参数赋值给defaluts，不穿的话默认是以上内容
    for( var key in o){
      defaluts[key] = o[key];
    }
    //循坏一下，图片通过北京图片的方式给到每一个li
    for(var i = 0; i < $(defaluts.container).length; i++){
      var url = './img/' + defaluts.imageData[i];
      $(defaluts.container).eq(i).css('background-image','url('+url+')');
    }
    //注册进入事件，自身的宽度改变大些，同时其他的兄弟元素变小
    $(defaluts.container).on(defaluts.overEvent,function(){
      $(this).stop().animate({'width':defaluts.hoverWidth}).siblings().stop().animate({'width':defaluts.otherWidth});
    })
    //注册离开事件，所有的li均变一致
    $(defaluts.box).on(defaluts.outEvent,function(){
      $(defaluts.container).stop().animate({'width':defaluts.leaveWidth});
    })
  }
})(window.jQuery)