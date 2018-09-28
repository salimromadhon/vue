var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var o=/\blang(?:uage)?-([\w-]+)\b/i,t=0,O=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,O.util.encode(e.content),e.alias):"Array"===O.util.type(e)?e.map(O.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,a){var t=O.util.type(e);switch(a=a||{},t){case"Object":if(a[O.util.objId(e)])return a[O.util.objId(e)];var n={};for(var r in a[O.util.objId(e)]=n,e)e.hasOwnProperty(r)&&(n[r]=O.util.clone(e[r],a));return n;case"Array":if(a[O.util.objId(e)])return a[O.util.objId(e)];n=[];return a[O.util.objId(e)]=n,e.forEach(function(e,t){n[t]=O.util.clone(e,a)}),n}return e}},languages:{extend:function(e,t){var a=O.util.clone(O.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||O.languages)[a];if(2==arguments.length){for(var i in t=e)t.hasOwnProperty(i)&&(r[i]=t[i]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var i in t)t.hasOwnProperty(i)&&(s[i]=t[i]);s[l]=r[l]}return O.languages.DFS(O.languages,function(e,t){t===n[a]&&e!=a&&(this[e]=s)}),n[a]=s},DFS:function(e,t,a,n){for(var r in n=n||{},e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],a||r),"Object"!==O.util.type(e[r])||n[O.util.objId(e[r])]?"Array"!==O.util.type(e[r])||n[O.util.objId(e[r])]||(n[O.util.objId(e[r])]=!0,O.languages.DFS(e[r],t,r,n)):(n[O.util.objId(e[r])]=!0,O.languages.DFS(e[r],t,null,n)))}},plugins:{},highlightAll:function(e,t){O.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};O.hooks.run("before-highlightall",n);for(var r,i=n.elements||e.querySelectorAll(n.selector),s=0;r=i[s++];)O.highlightElement(r,!0===t,n.callback)},highlightElement:function(e,t,a){for(var n,r,i=e;i&&!o.test(i.className);)i=i.parentNode;i&&(n=(i.className.match(o)||[,""])[1].toLowerCase(),r=O.languages[n]),e.className=e.className.replace(o,"").replace(/\s+/g," ")+" language-"+n,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(o,"").replace(/\s+/g," ")+" language-"+n));var s={element:e,language:n,grammar:r,code:e.textContent};if(O.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(O.hooks.run("before-highlight",s),s.element.textContent=s.code,O.hooks.run("after-highlight",s)),void O.hooks.run("complete",s);if(O.hooks.run("before-highlight",s),t&&_self.Worker){var l=new Worker(O.filename);l.onmessage=function(e){s.highlightedCode=e.data,O.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(s.element),O.hooks.run("after-highlight",s),O.hooks.run("complete",s)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=O.highlight(s.code,s.grammar,s.language),O.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(e),O.hooks.run("after-highlight",s),O.hooks.run("complete",s)},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return O.hooks.run("before-tokenize",n),n.tokens=O.tokenize(n.code,n.grammar),O.hooks.run("after-tokenize",n),s.stringify(O.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,r,i,s){var l=O.Token;for(var o in a)if(a.hasOwnProperty(o)&&a[o]){if(o==s)return;var u=a[o];u="Array"===O.util.type(u)?u:[u];for(var g=0;g<u.length;++g){var c=u[g],d=c.inside,p=!!c.lookbehind,m=!!c.greedy,h=0,f=c.alias;if(m&&!c.pattern.global){var y=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,y+"g")}c=c.pattern||c;for(var b=n,k=r;b<t.length;k+=t[b].length,++b){var v=t[b];if(t.length>e.length)return;if(!(v instanceof l)){if(m&&b!=t.length-1){if(c.lastIndex=k,!(S=c.exec(e)))break;for(var P=S.index+(p?S[1].length:0),w=S.index+S[0].length,F=b,x=k,A=t.length;F<A&&(x<w||!t[F].type&&!t[F-1].greedy);++F)(x+=t[F].length)<=P&&(++b,k=x);if(t[b]instanceof l)continue;j=F-b,v=e.slice(k,x),S.index-=k}else{c.lastIndex=0;var S=c.exec(v),j=1}if(S){p&&(h=S[1]?S[1].length:0);w=(P=S.index+h)+(S=S[0].slice(h)).length;var _=v.slice(0,P),N=v.slice(w),C=[b,j];_&&(++b,k+=_.length,C.push(_));var E=new l(o,d?O.tokenize(S,d):S,f,S,m);if(C.push(E),N&&C.push(N),Array.prototype.splice.apply(t,C),1!=j&&O.matchGrammar(e,t,a,b,k,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,t,a){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return O.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var a=O.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=O.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}}},s=O.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(s.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===O.util.type(t))return t.map(function(e){return s.stringify(e,a,t)}).join("");var n={type:t.type,content:s.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if(t.alias){var r="Array"===O.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,r)}O.hooks.run("wrap",n);var i=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!_self.document)return _self.addEventListener&&(O.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;_self.postMessage(O.highlight(n,O.languages[a],a)),r&&_self.close()},!1)),_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(O.filename=e.src,O.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(O.highlightAll):window.setTimeout(O.highlightAll,16):document.addEventListener("DOMContentLoaded",O.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),Prism.languages.javascript["template-string"].inside.interpolation.inside.rest=Prism.languages.javascript,Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var t,a=e.getAttribute("data-src"),n=e,r=/\blang(?:uage)?-([\w-]+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(t=(e.className.match(r)||[,""])[1]),!t){var i=(a.match(/\.(\w+)$/)||[,""])[1];t=o[i]||i}var s=document.createElement("code");s.className="language-"+t,e.textContent="",s.textContent="Loadingâ€¦",e.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,Prism.highlightElement(s)):400<=l.status?s.textContent="âœ– Error "+l.status+" while fetching file: "+l.statusText:s.textContent="âœ– Error: File does not exist or is empty")},l.send(null)}),Prism.plugins.toolbar&&Prism.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight));