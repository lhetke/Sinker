!function(){for(var t,n=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],e=i.length,o=window.console=window.console||{};e--;)t=i[e],o[t]||(o[t]=n)}(),function($,t,n,i){var e=function(i,e){this.elem=i,this.$elem=$(i),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$win=$(t),this.sections={},this.didScroll=!1,this.$doc=$(n),this.docHeight=this.$doc.height()};e.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=$.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",$.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",$.proxy(this.getPositions,this)),this},adjustNav:function(t,n){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),n.addClass(t.config.currentClass)},bindInterval:function(){var t=this,n;t.$win.on("scroll.onePageNav",function(){t.didScroll=!0}),t.t=setInterval(function(){n=t.$doc.height(),t.didScroll&&(t.didScroll=!1,t.scrollChange()),n!==t.docHeight&&(t.docHeight=n,t.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var t=this,n,i,e;t.$nav.each(function(){n=t.getHash($(this)),e=$("#"+n),e.length&&(i=e.offset().top,t.sections[n]=Math.round(i))})},getSection:function(t){var n=null,i=Math.round(this.$win.height()*this.config.scrollThreshold);for(var e in this.sections)this.sections[e]-i<t&&(n=e);return n},handleClick:function(n){var i=this,e=$(n.currentTarget),o=e.parent(),s="#"+i.getHash(e);o.hasClass(i.config.currentClass)||(i.config.begin&&i.config.begin(),i.adjustNav(i,o),i.unbindInterval(),i.scrollTo(s,function(){i.config.changeHash&&(t.location.hash=s),i.bindInterval(),i.config.end&&i.config.end()})),n.preventDefault()},scrollChange:function(){var t=this.$win.scrollTop(),n=this.getSection(t),i;null!==n&&(i=this.$elem.find('a[href$="#'+n+'"]').parent(),i.hasClass(this.config.currentClass)||(this.adjustNav(this,i),this.config.scrollChange&&this.config.scrollChange(i)))},scrollTo:function(t,n){var i=$(t).offset().top;$("html, body").animate({scrollTop:i},this.config.scrollSpeed,this.config.easing,n)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},e.defaults=e.prototype.defaults,$.fn.onePageNav=function(t){return this.each(function(){new e(this,t).init()})}}(jQuery,window,document),$.scrollTo=$.fn.scrollTo=function(t,n,i){return this instanceof $?(i=$.extend({},{gap:{x:0,y:0},animation:{easing:"swing",duration:600,complete:$.noop,step:$.noop}},i),this.each(function(){var e=$(this);e.stop().animate({scrollLeft:isNaN(Number(t))?$(n).offset().left+i.gap.x:t,scrollTop:isNaN(Number(n))?$(n).offset().top+i.gap.y:n},i.animation)})):$.fn.scrollTo.apply($("html, body"),arguments)};