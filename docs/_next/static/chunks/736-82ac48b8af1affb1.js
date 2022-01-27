(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{9008:function(a,b,c){a.exports=c(5443)},7402:function(){"use strict";const a={byUuid:"byUuid",byName:"byName",byNameExact:"byNameExact",byCodec:"byCodec",byCodexExact:"byCodecExact",byCountry:"byCountry",byCountryExact:"byCountryExact",byCountryCodeExact:"byCountryCodeExact",byState:"byState",byStateExact:"byStateExact",byLanguage:"byLanguage",byLanguageExact:"byLanguageExact",byTag:"byTag",byTagExact:"byTagExact"};(class{constructor(b,c=!0){if(this.appName=b,this.hideBroken=c,this.baseUrl=void 0,this.fetchConfig={method:"GET",redirect:"follow"},!b)throw new Error("appName is required");this.fetchConfig.headers={"user-agent":this.appName}}async resolveBaseUrl(d={}){if("undefined"!=typeof window)return[{ip:"45.77.62.161",name:"fr1.api.radio-browser.info"}];const e=await fetch("http://all.api.radio-browser.info/json/servers",d);if(e.ok)return await e.json();throw e}setBaseUrl(f){this.baseUrl=f}getBaseUrl(){return this.baseUrl}async getCountries(g,h,i){return this.runRequest(this.buildRequest("countries",g,h),i)}async getCountryCodes(j,k,l){return j=j?`${j.toUpperCase()}`:"",this.runRequest(this.buildRequest("countrycodes",j,k),l)}async getCodecs(m,n){return this.runRequest(this.buildRequest("codecs","",m),n)}async getCountryStates(o,p,q){return this.runRequest(this.buildRequest("states",o,p),q)}async getLanguages(r,s,t){return this.runRequest(this.buildRequest("languages",r,s),t)}async getTags(u,v,w){return u=u?u.toLowerCase():"",this.runRequest(this.buildRequest("tags",u,v),w)}async getStationsBy(x,y,z,A,B=!1){if(!a[x])throw new Error(`search type does not exist: ${x}`);y=y?y.toLowerCase():"";const C=await this.runRequest(this.buildRequest(`stations/${x.toLowerCase()}`,y,z),A);return this.normalizeStations(C,B)}normalizeStations(D,E=!1){const F=[],G={};for(const H of D){if(E){const I=`${H.name.toLowerCase().trim()}${H.url.toLowerCase().trim()}`;if(G[I])continue;G[I]=!0}const J={changeId:H.changeuuid,id:H.stationuuid,name:H.name,url:H.url,urlResolved:H.url_resolved,homepage:H.homepage,favicon:H.favicon,country:H.country,countryCode:H.countrycode,state:H.state,votes:H.votes,codec:H.codec,bitrate:H.bitrate,clickCount:H.clickcount,clickTrend:H.clicktrend,hls:Boolean(H.hls),lastCheckOk:Boolean(H.lastcheckok),lastChangeTime:new Date(H.lastchangetime),lastCheckOkTime:new Date(H.lastcheckoktime),clickTimestamp:new Date(H.clicktimestamp),lastLocalCheckTime:new Date(H.lastlocalchecktime),language:H.language.split(","),lastCheckTime:new Date(H.lastchecktime),tags:[...new Set(H.tags.split(","))].filter(a=>a.length>0&&a.length<10)};F.push(J)}return F}async getAllStations(K,L,M=!1){const N=await this.runRequest(this.buildRequest("stations","",K),L);return this.normalizeStations(N,M)}async searchStations(O,P,Q=!1){const R=await this.runRequest(this.buildRequest("stations/search",void 0,O),P);return this.normalizeStations(R,Q)}async getStationsByClicks(S,T){return this.resolveGetStations("topclick",S,T)}async getStationsByVotes(U,V){return this.resolveGetStations("topvote",U,V)}async getStationsByRecentClicks(W,X){return this.resolveGetStations("lastclick",W,X)}async sendStationClick(Y,Z){return this.runRequest(this.buildRequest("url",Y,void 0,!1),Z)}async voteForStation($,_){return this.runRequest(this.buildRequest("vote",$),_)}async getStationsById(aa,ba){const ca=aa.join(","),da=await this.runRequest(this.buildRequest(`stations/byuuid?uuids=${ca}`,void 0,void 0,!1),ba);return this.normalizeStations(da)}async getStationByUrl(ea,fa){const ga=await this.runRequest(this.buildRequest(`stations/byurl/${ea}`,void 0,void 0,!1),fa);return this.normalizeStations(ga)}async resolveGetStations(ha,ia,ja){const ka=ia?`/${ia}`:"",la=await this.runRequest(this.buildRequest(`stations/${ha}${ka}`,void 0,void 0,!1),ja);return this.normalizeStations(la)}buildRequest(ma,na,oa,pa=!0){na=na?`/${encodeURIComponent(na)}`:"";let qa;oa&&("tagList"in(qa={...oa})&&Array.isArray(qa.tagList)&&(qa.tagList=[...qa.tagList]),pa&& void 0===qa.hideBroken&&(qa.hideBroken=this.hideBroken));const ra=qa?this.createQueryParams(qa):"";return`${ma}${na}${ra}`}async runRequest(sa,ta={}){const ua={...this.fetchConfig,...ta,headers:{...this.fetchConfig.headers,...ta.headers}};if(!this.baseUrl){const va=await this.resolveBaseUrl(),wa=Math.floor(Math.random()*va.length);this.baseUrl=`https://${va[wa].name}`}const xa=await fetch(`${this.baseUrl}/json/${sa}`,ua);if(xa.ok)return xa.json();throw xa}createQueryParams(ya){let za="";if(ya)for(const[Aa,Ba]of Object.entries(ya))za+=`&${Aa}=${encodeURIComponent(Ba)}`;return za?`?${za.slice(1).toLowerCase()}`:""}}).version="5.0.0"},7884:function(a,b,c){"use strict";b.default=i;var d,e=(d=c(7294))&&d.__esModule?d:{"default":d},f=c(8122),g=c(9035),h=e.default.useInsertionEffect||e.default.useLayoutEffect;function i(a){var b=(0,f.useStyleRegistry)();return b?"undefined"==typeof window?(b.add(a),null):(h(function(){return b.add(a),function(){b.remove(a)}},[a.id,String(a.dynamic)]),null):null}i.dynamic=function(a){return a.map(function(a){var b=a[0],c=a[1];return(0,g.computeId)(b,c)}).join(" ")}},5988:function(a,b,c){a.exports=c(7884)},821:function(a,b,c){"use strict";var d=c(7294),e=function(){},f=e(),g=Object,h=function(a){return a===f},i=function(a){return"function"==typeof a},j=function(a,b){return g.assign({},a,b)},k="undefined",l=function(){return typeof window!=k},m=new WeakMap(),n=0,o=function(a){var b,c,d=typeof a,e=a&&a.constructor,f=e==Date;if(g(a)!==a||f||e==RegExp)b=f?a.toJSON():"symbol"==d?a.toString():"string"==d?JSON.stringify(a):""+a;else{if(b=m.get(a))return b;if(b=++n+"~",m.set(a,b),e==Array){for(c=0,b="@";c<a.length;c++)b+=o(a[c])+",";m.set(a,b)}if(e==g){b="#";for(var i=g.keys(a).sort();!h(c=i.pop());)h(a[c])||(b+=c+":"+o(a[c])+",");m.set(a,b)}}return b},p=!0,q=l(),r=typeof document!=k,s=q&&window.addEventListener?window.addEventListener.bind(window):e,t=r?document.addEventListener.bind(document):e,u=q&&window.removeEventListener?window.removeEventListener.bind(window):e,v=r?document.removeEventListener.bind(document):e,w={isOnline:function(){return p},isVisible:function(){var a=r&&document.visibilityState;return!!h(a)||"hidden"!==a}},x={initFocus:function(a){return t("visibilitychange",a),s("focus",a),function(){v("visibilitychange",a),u("focus",a)}},initReconnect:function(a){var b=function(){p=!0,a()},c=function(){p=!1};return s("online",b),s("offline",c),function(){u("online",b),u("offline",c)}}},y=!l()||"Deno"in window,z=y?d.useEffect:d.useLayoutEffect,A="undefined"!=typeof navigator&&navigator.connection,B=!y&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),C=function(a){if(i(a))try{a=a()}catch(b){a=""}var c=[].concat(a);return[a="string"==typeof a?a:(Array.isArray(a)?a.length:a)?o(a):"",c,a?"$err$"+a:"",a?"$req$"+a:""]},D=new WeakMap(),E=function(a,b,c,d,e,f){for(var g=D.get(a),h=g[0],i=g[1],j=g[4],k=g[5],l=h[b],m=i[b]||[],n=0;n<m.length;++n)m[n](c,d,e);return f&&(delete j[b],delete k[b],l&&l[0])?l[0](2).then(function(){return a.get(b)}):a.get(b)},F=0,G=function(){return++F},H=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return(function(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d.throw(a))}catch(b){f(b)}}function i(a){var b;a.done?e(a.value):((b=a.value)instanceof c?b:new c(function(a){a(b)})).then(g,h)}i((d=d.apply(a,b||[])).next())})})(void 0,void 0,void 0,function(){var b,c,d,e,g,h,j,k,l,m,n,o,p,q;return(function(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),"throw":h(1),"return":h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw new TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}})(this,function(r){switch(r.label){case 0:if(b=a[0],c=a[1],d=!1!==a[3],e=a[2],h=(g=C(c))[0],j=g[2],!h)return[2];if(l=(k=D.get(b))[2],m=k[3],a.length<3)return[2,E(b,h,b.get(h),b.get(j),f,d)];if(p=l[h]=G(),m[h]=0,i(e))try{e=e(b.get(h))}catch(s){o=s}if(!(e&&i(e.then)))return[3,2];return[4,e.catch(function(a){o=a})];case 1:if(n=r.sent(),p!==l[h]){if(o)throw o;return[2,n]}return[3,3];case 2:n=e,r.label=3;case 3:return o||b.set(h,n),b.set(j,o),m[h]=G(),[4,E(b,h,n,o,f,d)];case 4:if(q=r.sent(),o)throw o;return[2,q]}})})},I=function(a,b){for(var c in a)a[c][0]&&a[c][0](b)},J=function(a,b){if(!D.has(a)){var c=j(x,b),d={},g=H.bind(f,a),h=e;if(D.set(a,[d,{},{},{},{},{},g]),!y){var i=c.initFocus(I.bind(f,d,0)),k=c.initReconnect(I.bind(f,d,1));h=function(){i&&i(),k&&k(),D.delete(a)}}return[a,g,h]}return[a,D.get(a)[6]]},K=J(new Map()),L=K[0],M=j({onLoadingSlow:e,onSuccess:e,onError:e,onErrorRetry:function(a,b,c,d,e){if(w.isVisible()){var f=c.errorRetryCount,g=e.retryCount,i=~~((Math.random()+0.5)*(1<<(g<8?g:8)))*c.errorRetryInterval;!h(f)&&g>f||setTimeout(d,i,e)}},onDiscarded:e,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:B?10e3:5000,focusThrottleInterval:5000,dedupingInterval:2000,loadingTimeout:B?5000:3000,compare:function(a,b){return o(a)==o(b)},isPaused:function(){return!1},cache:L,mutate:K[1],fallback:{}},w),N=function(a,b){var c=j(a,b);if(b){var d=a.use,e=a.fallback,f=b.use,g=b.fallback;d&&f&&(c.use=d.concat(f)),e&&g&&(c.fallback=j(e,g))}return c},O=(0,d.createContext)({});g.defineProperty(function(a){var b=a.value,c=N((0,d.useContext)(O),b),e=b&&b.provider,g=(0,d.useState)(function(){return e?J(e(c.cache||L),b):f})[0];return g&&(c.cache=g[0],c.mutate=g[1]),z(function(){return g?g[2]:f},[]),(0,d.createElement)(O.Provider,j(a,{value:c}))},"default",{value:M})}}])