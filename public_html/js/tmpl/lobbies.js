define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var lobbies=__fest_context;__fest_buf+=("<div class=\"new-lobby-box\"><div class=\"new-lobby-box__error js-create-error\">Lobby already exists!</div><div class=\"new-lobby-box__header\">NEW LOBBY</div><form class=\"new-lobby-box__form\"><input class=\"new-lobby-box__input\" placeholder=\"Lobby name\" required=\"required\" autofocus=\"\"/><input class=\"new-lobby-box__submit\" type=\"submit\" value=\"CREATE\"/></form><a href=\"\/#lobbies\" class=\"button-back\">BACK</a></div><div class=\"lobby-box\"><div class=\"lobby-box__header\">AVAILABLE LOBBIES</div><div class=\"lobby-box__outer-table\"><div class=\"lobby-box__inside-table\"><table class=\"lobby-table\"><thead><tr><th>NAME</th><th>PLAYERS</th><th></th></tr></thead>");var i,top,__fest_iterator0;try{__fest_iterator0=lobbies || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(i in __fest_iterator0){top=__fest_iterator0[i];__fest_buf+=("<tr><td class=\"lobby-table__name\">");try{__fest_buf+=(__fest_escapeHTML(lobbies[i].name))}catch(e){__fest_log_error(e.message + "27");}__fest_buf+=("</td><td>");try{__fest_buf+=(__fest_escapeHTML(lobbies[i].count))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("\/");try{__fest_buf+=(__fest_escapeHTML(lobbies[i].maxCount))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("</td><td><a href=\"#\" class=\"lobby-table__join\">JOIN</a></td></tr>");}__fest_buf+=("</table></div></div><div class=\"lobby-box__refresh\"><a href=\"#\" class=\"lobby-box__refresh_link js-refresh\">REFRESH</a></div><div class=\"lobby-box__create\"><a href=\"#\" class=\"lobby-box__create_link\">CREATE LOBBY</a></div><a href=\"#\" class=\"button-back js-back-main\">BACK</a></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });