!function(){var e,t,n,r="function"==typeof jQuery;function o(e,t){var n=Array.from(e.querySelectorAll(t));return e.matches&&e.matches(t)&&n.splice(0,0,e),n}function i(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}}function a(e){return parseFloat(getComputedStyle(e,null).height.replace("px",""))}function l(e){return parseFloat(getComputedStyle(e,null).width.replace("px",""))}function s(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function c(e){if(!e)return-1;var t=0;do{t++}while(e=e.previousElementSibling);return t}function d(e){var t=[],n={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return"*"===(e=void 0===e?"*":e.toLowerCase())?t=Object.values(n):e in n&&t.push(n[e]),!(!t.length||!navigator.userAgent.match(new RegExp(t.join("|"),"i")))}r&&(e=jQuery),t=e?e("html").hasClass("is-builder"):document.querySelector("html").classList.contains("is-builder"),Element.prototype.parents=function(e){for(var t=[],n=this,r=void 0!==e;null!==(n=n.parentElement);)n.nodeType===Node.ELEMENT_NODE&&(r&&!n.matches(e)||t.push(n));return t},Element.prototype.footerReveal=function(){var e=this.previousElementSibling,t=!!document.documentMode;function n(){!t&&this.offsetHeight<=window.outerHeight?(this.style.zIndex="-999",this.style.position="fixed",this.style.bottom="0",this.style.width=e.offsetWidth,e.style.marginBottom=this.offsetHeight):(this.style.zIndex="",this.style.position="",this.style.bottom="",this.style.width="",e.style.marginBottom="")}return n(),window.addEventListener("resize",(function(){n()})),window.addEventListener("load",(function(){n()})),this},n="smartresize",window[n]=function(e){var t,r,o,i,a=new CustomEvent(n);return e?this.addEventListener("resize",(t=e,function(){var e=this,n=arguments;function a(){o||t.apply(e,n),i=null}i?clearTimeout(i):o&&t.apply(e,n),i=setTimeout(a,r||100)})):this.dispatchEvent(a)};var u=function(){var e=document.createElement("div"),t=document.querySelector("body");e.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;"),t.appendChild(e);var n=parseInt(window.innerHeight/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);return t.removeChild(e),r==n}();if(s((function(){function n(e){e.style.height=9*l(e.parentNode)/16+"px"}function s(e){setTimeout((function(){o(e,".mbr-parallax-background").forEach((function(e){jarallax&&(jarallax(e,{speed:.6}),e.style.position="relative")}))}),0)}if(document.querySelector("html").classList.add(d()?"mobile":"desktop"),window.addEventListener("scroll",(function(){document.querySelectorAll(".mbr-navbar--sticky").forEach((function(e){var t=window.scrollTop>10?"add":"remove";e.classList[t]("mbr-navbar--stuck"),e.classList.contains(".mbr-navbar--open")||e.classList[t]("mbr-navbar--short")}))})),d()&&navigator.userAgent.match(/Chrome/i)?function(e,t){var n=[e,e];n[t>e?0:1]=t,window.smartresize((function(){var e=window.innerHeight;n.indexOf(e)<0&&(e=n[window.innerWidth>e?1:0]),document.querySelector(".mbr-section--full-height").style.height=e+"px"}))}(window.innerWidth,window.innerHeight):u||(window.smartresize((function(){document.querySelector(".mbr-section--full-height").style.height=window.innerHeight+"px"})),e(document).on("add.cards",(function(e){document.querySelector("html").classList.contains("mbr-site-loaded")&&o(e.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}))),window.addEventListener("smartresize",(function(){document.querySelectorAll(".mbr-section--16by9").forEach(n)})),r&&e(document).on("add.cards changeParameter.cards",(function(e){var t=o(e.target,".mbr-section--16by9");t.length?t.forEach((function(e){e.setAttribute("data-16by9","true"),n(e)})):o(e.target,"[data-16by9]").forEach((function(e){e.styles.height="",e.removeAttribute("data-16by9")}))})),"undefined"!=typeof jarallax&&!d()){if(window.addEventListener("update.parallax",(function(e){setTimeout((function(){if(e){var e=document.querySelector(".mbr-parallax-background");e.jarallax("coverImage"),e.jarallax("clipContainer"),e.jarallax("onScroll")}}),0)})),t){if(!r)return;e(document).on("add.cards",(function(t){s(t.target),e(window).trigger("update.parallax")})),e(document).on("changeParameter.cards",(function(t,n,r,o){if("bg"===n)switch(i=t.target,jarallax&&jarallax(i,"destroy"),i.style.position="",e(t.target).find(".mbr-background-video-preview").remove(),e(t.target).find(".mbr-background-video").remove(),o){case"type":!0===r.parallax&&s(t.target);break;case"value":"image"===r.type&&!0===r.parallax&&s(t.target);break;case"parallax":!0===r.parallax&&s(t.target)}var i;e(window).trigger("update.parallax")}))}else s(document.body);window.addEventListener("shown.bs.tab",(function(){window.dispatchEvent(new CustomEvent("update.parallax"))}))}var c,m,f=0,h=null,p=!d();function g(e){o(e,"[data-bg-video]").forEach((function(e){var n=e.getAttribute("data-bg-video");if(n){var r=n.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),o=e.querySelector(".mbr-background-video-preview")||document.createElement("div");if(o.classList.add("mbr-background-video-preview"),o.style.display="none",o.style.backgroundSize="cover",o.style.backgroundPosition="center",e.querySelector(".mbr-background-video-preview")||e.childNodes[0].before(o),r&&(/youtu\.?be/g.test(r[3])||/vimeo/g.test(r[3]))){if(r&&/youtu\.?be/g.test(r[3])){var i="http"+("https:"===location.protocol?"s":"")+":";i+="//img.youtube.com/vi/"+r[6]+"/maxresdefault.jpg";var a=new Image;a.onload=function(){if(120===(a.naturalWidth||a.width)){var n=a.src.split("/").pop();switch(n){case"maxresdefault.jpg":a.src=a.src.replace(n,"sddefault.jpg");break;case"sddefault.jpg":a.src=a.src.replace(n,"hqdefault.jpg");break;default:t&&(o.style.backgroundImage='url("images/no-video.jpg")',o.style.display="block")}}else o.style.backgroundImage='url("'+a.src+'")',o.style.display="block";e.querySelector(".mbr-background-video")&&e.querySelector(".mbr-background-video").remove();var i=document.createElement("div");i.classList.add("mbr-background-video");e.childNodes[1].before(i);var l={height:a.naturalHeight,width:a.naturalWidth,scale:a.naturalHeight/a.naturalWidth},s={height:i.parentNode.clientHeight,width:i.parentNode.clientWidth,scale:i.parentNode.clientHeight/i.parentNode.clientWidth},c={height:l.height<s.height?l.height:s.height,width:l.width>s.width?l.width:s.width};c.height/c.width!=l.scale&&(c.height=c.width*l.scale);var d={height:c.height,width:c.width,modestbranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1},u=new YouTubePlayer(i,d);i.style.pointerEvents="none",i.style.width=c.width+"px",i.style.marginLeft="-"+(c.width-s.width)/2+"px",i.parentNode.style.overflow="hidden",i.style.minHeight="100vh",i.style.minWidth="177.77vh",u.load(r[6],!0),u.play(),u.mute()},a.setAttribute("src",i)}else if(r&&/vimeo/g.test(r[3])){var l=new XMLHttpRequest;l.open("GET","https://vimeo.com/api/v2/video/"+r[6]+".json",!0),l.onreadystatechange=function(){if(4===this.readyState)if(this.status>=200&&this.status<400){var e=JSON.parse(this.responseText);o.style.backgroundImage='url("'+e[0].thumbnail_large+'")',o.style.display="block"}else t&&(o.style.backgroundImage='url("images/no-video.jpg")',o.style.display="block")},l.send(),l=null,e.querySelector(".mbr-background-video")&&e.querySelector(".mbr-background-video").remove();var s=document.createElement("div");s.classList.add("mbr-background-video");e.childNodes[1].before(s);var c={id:n,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0},d=new Vimeo.Player(s,c),u=d.element.parentNode;u.style.overflow="hidden",d.element.style.pointerEvents="none",d.element.style.marginLeft="-"+(d.element.scrollWidth-u.scrollWidth)/2+"px",d.element.style.minHeight="100vh",d.element.style.minWidth="177.77vh"}}else t&&(o.style.backgroundImage='url("images/video-placeholder.jpg")',o.style.display="block")}}))}if(window.addEventListener("scroll",(function(){m&&clearTimeout(m);var e=document.documentElement.scrollTop,t=e<=f||p;if(f=e,h){var n=e>h.breakPoint;t?n!=h.fixed&&(p?(h.fixed=n,h.elm.classList.toggle("is-fixed")):m=setTimeout((function(){h.fixed=n,h.elm.classList.toggle("is-fixed")}),40)):(h.fixed=!1,h.elm.classList.remove("is-fixed"))}})),r&&e(document).on("add.cards delete.cards",(function(e){c&&clearTimeout(c),c=setTimeout((function(){h&&(h.fixed=!1,h.elm.classList.remove("is-fixed"));var e=document.querySelector(".mbr-fixed-top");e&&(h={breakPoint:i(e).top+3*a(e),fixed:!1,elm:e},e.dispatchEvent(new CustomEvent("scroll")))}),650)})),window.smartresize((function(){document.querySelectorAll(".mbr-embedded-video").forEach((function(e){e.style.height=(l(e)*parseInt(e.getAttribute("height")||315)/parseInt(e.getAttribute("width")||560)).toFixed()+"px"}))})),r&&e(document).on("add.cards",(function(e){document.querySelector("html").classList.contains("mbr-site-loaded")&&o(e.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))})),t){if(!r)return;e(document).on("add.cards",(function(e){g(e.target)}))}else g(document.body);t&&e(document).on("changeParameter.cards",(function(e,t,n,r){if("bg"===t)switch(r){case"type":case"value":"video"===n.type&&g(e.target)}})),t||Array.from(document.body.children).filter((function(e){return!e.matches("style, script")})).forEach((function(t){t.dispatchEvent(new CustomEvent("add.cards")),r&&e(t).trigger("add.cards")})),document.querySelector("html").classList.add("mbr-site-loaded"),window.dispatchEvent(new CustomEvent("resize")),window.dispatchEvent(new CustomEvent("scroll")),t||document.addEventListener("click",(function(e){try{var t=e.target;if(t.parents().some((function(e){e.classList.contains("carousel")})))return;do{if(t.hash){var n=/#bottom|#top/g.test(t.hash);document.querySelector(n?"body":t.hash).forEach((function(n){e.preventDefault();var r=t.parents().some((function(e){return e.classList.contains("navbar-fixed-top")}))?60:0,o="#bottom"==t.hash?a(n)-window.innerHeight:i(n).top-r;n.classList.contains("panel-collapse")||n.classList.contains("tab-pane")||window.scrollTo({top:o,left:0,behavior:"smooth"})}));break}}while(t=t.parentNode)}catch(e){}})),document.querySelectorAll(".cols-same-height .mbr-figure").forEach((function(e){var t=e.querySelector("img"),n=e.parentNode,r=t.width,o=t.height;function i(){if(t.style.width="",t.style.maxWidth="",t.style.marginLeft="",o&&r){var i=o/r;e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0";var s=a(n)/l(n);if(s>i){var c=100*(s-i)/i;t.style.width=c+100+"%",t.style.maxWidth=c+100+"%",t.style.marginLeft=-c/2+"%"}}}t.addEventListener("load",(function(){r=t.width,o=t.height,i()}),{once:!0}),window.addEventListener("resize",i),i()}))})),t||(r&&e.fn.socialLikes&&e(document).on("add.cards",(function(e){o(e.target,".mbr-social-likes").forEach((function(e){e.addEventListener("counter.social-likes",(function(e,t,n){n>999&&e.target.querySelectorAll(".social-likes__counter").forEach((function(e){e.innerHTML=Math.floor(n/1e3)+"k"}))})),e.socialLikes({initHtml:!1})}))})),r&&e(document).on("add.cards",(function(e){e.target.classList.contains("mbr-reveal")&&e.target.footerReveal()})),s((function(){if(!d()&&document.querySelectorAll("input[name=animation]").length){document.querySelectorAll("input[name=animation]").forEach((function(e){e.remove()}));var e=Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info"));function t(){var t=window.innerHeight,n=document.documentElement.scrollTop||document.body.scrollTop,r=n+t-100;e.forEach((function(e){var t=e,o=t.offsetHeight,i=function(e){var t=0;do{t+=e.offsetTop||0,e=e.offsetParent}while(e);return t}(t);(i+o>=n&&i-50<=r||function(e){if(e.parents(".carousel-item").some((function(e){return"none"!==getComputedStyle(e,null).display})))return!1;var t=e.parents(".carousel-item").parentNode;if(!t)return!1;if(t.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(t.getAttribute("data-visible")>1){var n=t.getAttribute("data-visible");return!(!e.parents().some((function(e){return e.matches(".cloneditem-"+(n-1))}))||!e.parents(".cloneditem-"+(n-1)).some((function(e){return e.getAttribute("data-cloned-index")>=n})))||(e.classList.remove("animate__animated animate__delay-1s hidden"),!1)}return!0}(e))&&e.classList.contains("hidden")&&(e.classList.remove("hidden"),e.classList.add("animate__fadeInUp"),e.classList.add("animate__delay-1s"),e.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){e.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")}),{once:!0}))}))}(e=(e=e.filter((function(e){if(!e.parents().filter((function(e){if(e.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop"))return!0})).length)return!0}))).filter((function(e){if(!e.parents().filter((function(t){return t.matches("form")&&!e.matches("li")})).length)return!0}))).forEach((function(e){e.classList.add("hidden"),e.classList.add("animate__animated"),e.classList.add("animate__delay-1s")})),window.addEventListener("scroll",t),window.addEventListener("resize",t),window.dispatchEvent(new CustomEvent("scroll"))}}))),s((function(){if(document.querySelectorAll(".mbr-arrow-up").length){var e=document.querySelector("#scrollToTop");e.style.display="none",window.addEventListener("scroll",(function(){var t;window.scrollY>window.innerHeight?((t=e).style.display="block",function e(){var n=parseFloat(t.style.opacity);(n+=.1)>1||(t.style.opacity=n,requestAnimationFrame(e))}()):function(e){!function t(){(e.style.opacity-=.1)<0?e.style.display="none":requestAnimationFrame(t)}()}(e)})),e.addEventListener("click",(function(){return window.scrollTo({top:0,left:0,behavior:"smooth"}),!1}))}})),!t){var m=document.querySelector(".mbr-arrow");m&&m.addEventListener("click",(function(e){var t=e.target.closest("section").nextElementSibling;t.classList.contains("engine")&&(t=t.closest("section").nextElementSibling),window.scrollTo(0,i(t).top)}))}if(document.querySelectorAll("nav.navbar").length){var f=a(document.querySelector("nav.navbar"));document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=f+"px")}if(!t&&(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&e(document).on("add.cards",(function(e){var t=e.target;if(t.classList.contains("mbr-fullscreen")){var n=function(){t.style.height="auto",t.offsetHeight<=window.innerHeight&&(t.style.height="1px")};window.addEventListener("load",n),window.addEventListener("resize",n)}(t.classList.contains("mbr-slider")||t.classList.contains("mbr-gallery"))&&(t.querySelectorAll(".carousel-indicators").forEach((function(e){e.classList.add("ie-fix"),e.querySelectorAll("li").forEach((function(e){e.style.display="inline-block",e.style.width="30px"}))})),t.classList.contains("mbr-slider")&&t.querySelectorAll(".full-screen .slider-fullscreen-image").forEach((function(e){e.style.height="1px"})))})),s((function(){if(!t){var e=function(e){n(e.target)},n=function(t){var n=t.parents("section")[0].querySelector("iframe"),r=n.getAttribute("src");if(t.parents("section").forEach((function(e){e.style.zIndex="5000"})),-1!==r.indexOf("youtu")&&n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==r.indexOf("vimeo")){var o=new Vimeo.Player(n);o.play()}var i=t.parents("section")[0],a=i.querySelector(i.querySelector("[data-modal]").getAttribute("data-modal"));a.style.display="table",a.addEventListener("click",(function(){-1!==r.indexOf("youtu")&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==r.indexOf("vimeo")&&o.pause(),a.style.display="none",a.removeEventListener("click",e),i.style.zIndex="0"}))};document.querySelectorAll(".modalWindow-video > iframe").forEach((function(e){var t=e.getAttribute("data-src");e.removeAttribute("data-src");var n=t.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==t.indexOf("youtu")?e.setAttribute("src","https://youtube.com/embed/"+n[6]+"?rel=0&enablejsapi=1"):-1!==t.indexOf("vimeo")&&e.setAttribute("src","https://player.vimeo.com/video/"+n[6]+"?autoplay=0&loop=0")})),document.querySelector("[data-modal]")&&document.querySelector("[data-modal]").addEventListener("click",e)}})),!t){const e=document.querySelectorAll(".dropdown-toggle.show"),t=document.querySelectorAll(".dropdown-menu.show");if(e.forEach((e=>{e.classList.remove("show"),e.ariaExpanded="false"})),t.forEach((e=>e.classList.remove("show"))),!d()){var h=document.querySelector("section.menu");if(h){var p=window.innerWidth;h.querySelector(".navbar").classList.contains("collapsed")||p>991&&(h.querySelectorAll("ul.navbar-nav li.dropdown").forEach((function(e){e.addEventListener("mouseover",(function(){if(e.classList.contains("open")){e.querySelector("a").dispatchEvent(new CustomEvent("click"))}})),e.addEventListener("mouseout",(function(){if(e.classList.contains("open")){e.querySelector("a").dispatchEvent(new CustomEvent("click"))}}))})),h.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach((function(e){e.addEventListener("mouseover",(function(){if(e.classList.contains("open")){e.querySelector("a").dispatchEvent(new CustomEvent("click"))}})),e.addEventListener("mouseout",(function(){if(e.classList.contains("open")){e.querySelector("a").dispatchEvent(new CustomEvent("click"))}}))})))}}}function g(e){var t=e,n=t.getAttribute("id")+"-carousel",r=t.getAttribute("data-bs-version")&&t.getAttribute("data-bs-version").startsWith("5");t.querySelectorAll(".carousel").forEach((function(e){e.setAttribute("id",n)})),t.querySelector(".carousel-controls")&&t.querySelectorAll(".carousel-controls").forEach((function(e){e.querySelectorAll("a").forEach((function(e){e.setAttribute("href","#"+n),r?e.setAttribute("data-bs-target","#"+n):e.setAttribute("data-target","#"+n)}))})),t.querySelectorAll(".carousel-indicators > li").forEach((function(e){r?e.setAttribute("data-bs-target","#"+n):e.setAttribute("data-target","#"+n)})),function(e){var t=e.querySelector(".carousel-item"),n=e.querySelector(".carousel-indicators > li");t.classList.add("active"),n&&n.classList.add("active")}(t)}if(t||(void 0===window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach((function(e){var t,n,r;e.getAttribute("data-isinit")||(g(e),n=(t=e).querySelectorAll(".carousel-item").length,r=t.querySelector(".carousel-inner").getAttribute("data-visible"),n<r&&(r=n),t.querySelectorAll(".carousel-inner").forEach((function(e){e.setAttribute("class","carousel-inner slides"+r)})),t.querySelectorAll(".clonedCol").forEach((function(e){e.remove()})),t.querySelectorAll(".carousel-item .col-md-12").forEach((function(e){r<2?e.setAttribute("class","col-md-12"):"5"==r?e.setAttribute("class","col-md-12 col-lg-15"):e.setAttribute("class","col-md-12 col-lg-"+12/r)})),t.querySelectorAll(".carousel-item .row").forEach((function(e){e.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")})),t.querySelectorAll(".carousel-item").forEach((function(e){for(var t=e,n=1;n<r;n++){(t=t.nextElementSibling)||(t=e.parentNode.children[0]===e?e.nextElementSibling:e.parentNode.children[0]);var o=c(t),i=t.querySelector(".col-md-12").cloneNode(!0);i.classList.add("cloneditem-"+n),i.classList.add("clonedCol"),i.setAttribute("data-cloned-index",o),e.children[0].appendChild(i)}})))}))),void 0===window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach((function(e){e.classList.add("popup-btn")}))),void 0===window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach((function(e){g(e)}))),void 0===window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,s((function(){0!=document.querySelectorAll(".accordionStyles").length&&document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach((function(e){e.classList.contains("collapsed")||e.classList.add("collapsed")}))})),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".accordionStyles").getAttribute("id"),n=e.closest(".card").querySelector(".panel-collapse"),r=e.querySelector("span.sign")?e.querySelector("span.sign"):e.querySelector("span.mbr-iconfont");if(n.classList.contains("collapsing")&&(-1!=t.indexOf("toggle")||-1!=t.indexOf("accordion"))&&(e.classList.contains("collapsed")?(r.classList.remove("mbri-arrow-up"),r.classList.add("mbri-arrow-down")):(r.classList.remove("mbri-arrow-down"),r.classList.add("mbri-arrow-up")),-1!=t.indexOf("accordion"))){var o=e.closest(".accordionStyles");Array.from(o.children).filter((function(e){return e.querySelector("span.sign")!==r})).forEach((function(e){var t=e.querySelector("span.sign")?e.querySelector("span.sign"):e.querySelector("span.mbr-iconfont");t.classList.remove("mbri-arrow-up"),t.classList.add("mbri-arrow-down")}))}}))}))),0!=document.querySelectorAll(".mbr-slider.carousel").length&&document.querySelectorAll(".mbr-slider.carousel").forEach((function(t){var n=t,o=n.querySelectorAll(".carousel-control"),i=n.querySelectorAll(".carousel-indicators li"),a=function(e){!function(e){e.stopPropagation(),e.preventDefault()}(e)};n.addEventListener("slide.bs.carousel",(function(){o.forEach((function(e){e.addEventListener("click",a)})),i.forEach((function(e){e.addEventListener("click",a)})),r&&e(n).carousel({keyboard:!1})})),n.addEventListener("slid.bs.carousel",(function(){o.forEach((function(e){e.removeEventListener("click",a)})),i.forEach((function(e){e.removeEventListener("click",a)})),r&&e(n).carousel({keyboard:!0}),n.querySelectorAll(".carousel-item.active").length>1&&(n.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),n.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))}))}))),t){if(!r)return;e(document).on("add.cards",(function(t){if(e(t.target).find(".form-with-styler").length){var n=e(t.target).find(".form-with-styler");e(n).find('select:not("[multiple]")').each((function(){e(this).styler&&e(this).styler()})),e(n).find("input[type=number]").each((function(){e(this).styler&&(e(this).styler(),e(this).parent().parent().removeClass("form-control"))})),e(n).find("input[type=date]").each((function(){e(this).datetimepicker&&e(this).datetimepicker({format:"Y-m-d",timepicker:!1})})),e(n).find("input[type=time]").each((function(){e(this).datetimepicker&&e(this).datetimepicker({format:"H:i",datepicker:!1})}))}}))}function v(e,t,n){var r=e.closest(".card"),o=r.parentElement.classList;r.getAttribute("style")||r.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;"),o.contains("row")&&(o.remove("row"),o.add("media-container-row")),e.querySelectorAll(".svg-gradient > *").forEach((function(e){e.setAttribute("id",t)}));var i=e.cloneNode(!0);Array.from(e.children).forEach((function(e){if("SVG"!==e.tagName)return e.remove()})),e.setAttribute("data-pie",`{ ${function(e){var t="",n=e.querySelector("svg linearGradient");if(n){for(var r=[],o=Array.from(n.children),i=0;i<o.length;i++)r.push(`"${o[i].getAttribute("stop-color")}"`);t=`"lineargradient": [${r}],`,Array.from(e.querySelectorAll("svg")).some((function(e){return e.classList.contains("svg-gradient")}))||e.querySelectorAll("svg").forEach((function(e){e.classList.add("svg-gradient")}))}return t}(e.closest("section"))} "percent": ${n}, "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#${t})", "fontSize": "1.3rem", "number": false }`),Array.from(i.children).forEach((function(t){switch(!0){case t.matches("p"):t.innerText=n+"%",e.appendChild(t);break;case t.matches("svg"):break;default:e.appendChild(t)}}))}function y(e){var t=e.closest("section").getAttribute("id")+"-svg-gradient",n=+e.getAttribute("data-goal");v(e,t,n)}document.querySelectorAll('input[type="range"]').forEach((function(e){e.addEventListener("change",(function(e){e.target.parents(".form-group").forEach((function(t){t.querySelector(".value").innerHTML=e.target.value}))}))})),t?e(document).on("add.cards changeParameter.cards",(function(e,t){"undefined"!=typeof CircularProgressBar&&new CircularProgressBar("pie_progress"),t?function(e,t){if(e.classList.contains("circle-progress-section")&&t.includes("progress")&&"progressCount"!=t)if(t.includes("Color"))e.querySelectorAll(".pie_progress").forEach((function(t){var n=e.getAttribute("id")+"-svg-gradient",r=+t.getAttribute("data-goal");v(t,n,r)}));else{var n=e.getAttribute("id")+"-svg-gradient",r=e.querySelector("."+t),o=+r.getAttribute("data-goal");v(r,n,o)}}(e.target,t):e.target.querySelectorAll(".pie_progress").length&&e.target.querySelectorAll(".pie_progress").forEach((function(e){y(e)}))})):document.querySelectorAll(".pie_progress").length&&("undefined"!=typeof CircularProgressBar&&new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach((function(e){y(e)})))}(),function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(e){}if(!document.getElementById("top-1")){var e=document.createElement("section");e.id="top-1",e.style="display: none",e.innerHTML='<a href="https://mobirise.in">Mobirise Easy Site Maker</a> Mobirise v5.4.6',document.body.insertBefore(e,document.body.childNodes[0])}}();