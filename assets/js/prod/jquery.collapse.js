!function(t,e){function n(e,n){n=n||{};var i=this,o=n.query||"> :even";t.extend(i,{$el:e,options:n,sections:[],isAccordion:n.accordion||!1,db:n.persist?jQueryCollapseStorage(e.get(0).id):!1}),i.states=i.db?i.db.read():[],i.$el.find(o).each(function(){new jQueryCollapseSection(t(this),i)}),function(e){i.$el.on("click","[data-collapse-summary] "+(e.options.clickQuery||""),t.proxy(i.handleClick,e)),i.$el.bind("toggle close open",t.proxy(i.handleEvent,e))}(i)}function i(e,n){n.options.clickQuery||e.wrapInner('<a href="#"/>'),t.extend(this,{isOpen:!1,$summary:e.attr("data-collapse-summary",""),$details:e.next(),options:n.options,parent:n}),n.sections.push(this);var i=n.states[this._index()];0===i?this.close(!0):this.$summary.is(".open")||1===i?this.open(!0):this.close(!0)}n.prototype={handleClick:function(e,n){e.preventDefault(),n=n||"toggle";for(var i=this.sections,o=i.length;o--;)if(t.contains(i[o].$summary[0],e.target)){i[o][n]();break}},handleEvent:function(t){return t.target==this.$el.get(0)?this[t.type]():void this.handleClick(t,t.type)},open:function(t){this._change("open",t)},close:function(t){this._change("close",t)},toggle:function(t){this._change("toggle",t)},_change:function(e,n){return isFinite(n)?this.sections[n][e]():void t.each(this.sections,function(t,n){n[e]()})}},i.prototype={toggle:function(){this.isOpen?this.close():this.open()},close:function(t){this._changeState("close",t)},open:function(e){var n=this;n.options.accordion&&!e&&t.each(n.parent.sections,function(t,e){e.close()}),n._changeState("open",e)},_index:function(){return t.inArray(this,this.parent.sections)},_changeState:function(e,n){var i=this;i.isOpen="open"==e,t.isFunction(i.options[e])&&!n?i.options[e].apply(i.$details):i.$details[i.isOpen?"show":"hide"](),i.$summary.toggleClass("open","close"!==e),i.$details.attr("aria-hidden","close"===e),i.$summary.attr("aria-expanded","open"===e),i.$summary.trigger("open"===e?"opened":"closed",i),i.parent.db&&i.parent.db.write(i._index(),i.isOpen)}},t.fn.extend({collapse:function(e,i){var o=i?t("body").find("[data-collapse]"):t(this);return o.each(function(){var o=i?{}:e,s=t(this).attr("data-collapse")||"";t.each(s.split(" "),function(t,e){e&&(o[e]=!0)}),new n(t(this),o)})}}),e.jQueryCollapse=n,e.jQueryCollapseSection=i,t(function(){t.fn.collapse(!1,!0)})}(window.jQuery,window),function(t){function e(e){var i;try{i=window.localStorage||t.fn.collapse.cookieStorage}catch(o){i=!1}return i?new n(e,i):!1}function n(t,e){this.id=t,this.db=e,this.data=[]}var i="jQuery-Collapse";n.prototype={write:function(e,n){var o=this;o.data[e]=n?1:0,t.each(o.data,function(t){"undefined"==typeof o.data[t]&&(o.data[t]=0)});var s=this._getDataObject();s[this.id]=this.data,this.db.setItem(i,JSON.stringify(s))},read:function(){var t=this._getDataObject();return t[this.id]||[]},_getDataObject:function(){var t=this.db.getItem(i);return t?JSON.parse(t):{}}},jQueryCollapseStorage=e}(jQuery),function(t){var e={expires:function(){var t=new Date;return t.setDate(t.getDate()+1)}(),setItem:function(t,e){document.cookie=t+"="+e+"; expires="+this.expires+"; path=/"},getItem:function(e){e+="=";var n="";return t.each(document.cookie.split(";"),function(t,i){for(;" "==i.charAt(0);)i=i.substring(1,i.length);0===i.indexOf(e)&&(n=i.substring(e.length,i.length))}),n}};t.fn.collapse.cookieStorage=e}(jQuery);