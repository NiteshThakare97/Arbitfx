!function(e,t){"use strict";var s,n=function(e,t){var n=e.find(".bdt-search-container"),a=e.find(".bdt-ajax-search");let r;if(a.length){var l=t(a).find(".bdt-search-result"),c=t(a).data("settings"),i=t(n).data("settings"),d=t(a).attr("anchor-target");d="yes"===d?"_blank":"_self",clearTimeout(s),i&&i.element_connect&&t(i.element_selector).hide(),t(a).on("keyup keypress",(function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1})),a.find(".bdt-search-input").keyup((function(){r=t(this).val(),s=setTimeout((function(){t(a).addClass("bdt-search-loading"),jQuery.ajax({url:window.ElementPackConfig.ajaxurl,type:"post",data:{action:"element_pack_search",s:r,settings:c},success:function(e){if((e=t.parseJSON(e)).results.length>0)if(r.length>=3){var s='<div class="bdt-search-result-inner">\n                          <h3 class="bdt-search-result-header">SEARCH RESULT<i class="ep-icon-close bdt-search-result-close-btn"></i></h3>\n                          <ul class="bdt-list bdt-list-divider">';for(let t=0;t<e.results.length;t++){const n=e.results[t];s+=`<li class="bdt-search-item" data-url="${n.url}">\n                            <a href="${n.url}" target="${d}">\n                            <div class="bdt-search-title">${n.title}</div>\n                            <div class="bdt-search-text">${n.text}</div>\n                            </a>\n                          </li>`}s+=`</ul><a class="bdt-search-more">${window.ElementPackConfig.search.more_result}</a></div>`,l.html(s),l.show(),t(".bdt-search-result-close-btn").on("click",(function(e){t(".bdt-search-result").hide(),t(".bdt-search-input").val("")})),t(a).removeClass("bdt-search-loading"),t(".bdt-search-more").on("click",(function(e){e.preventDefault(),t(a).submit()}))}else l.hide();else if(r.length>3){var n=`<div class="bdt-search-result-inner">\n                                  <h3 class="bdt-search-result-header">${window.ElementPackConfig.search.search_result}<i class="ep-icon-close bdt-search-result-close-btn"></i></h3>\n                                  <div class="bdt-search-text">${r} ${window.ElementPackConfig.search.not_found}</div>\n                                </div>`;l.html(n),l.show(),t(".bdt-search-result-close-btn").on("click",(function(e){t(".bdt-search-result").hide(),t(".bdt-search-input").val("")})),t(a).removeClass("bdt-search-loading"),i&&i.element_connect&&(l.hide(),setTimeout((function(){t(i.element_selector).show()}),1500))}else l.hide(),t(a).removeClass("bdt-search-loading")}})}),450)}))}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-search.default",n)}))}(jQuery,window.elementorFrontend);