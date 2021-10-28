__NUXT_JSONP__("/blog/vue/15", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{article:{slug:"15",title:"[Nuxt.js] vuex-persistedstate 적용하기",author:"신용준",date:"2021-10-27",toc:[{id:as,depth:E,text:at},{id:au,depth:E,text:av},{id:aw,depth:E,text:ax},{id:Y,depth:E,text:Y},{id:ay,depth:E,text:az}],body:{type:"root",children:[{type:b,tag:C,props:{},children:[{type:a,value:"SPA프로젝트는 새로고침을 할 경우 vuex의 store에 들고 있던 값들이 모두 초기화 되어버리는 상황이 발생하게 됩니다.\nvuex-persistedstate는 localstorage나 cookie를 이용하여 이러한 불편함을 해결해줍니다."}]},{type:a,value:h},{type:b,tag:F,props:{id:as},children:[{type:b,tag:G,props:{ariaHidden:D,href:"#%ED%8C%A8%ED%82%A4%EC%A7%80-%EC%84%A4%EC%B9%98",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:at}]},{type:a,value:h},{type:b,tag:C,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"npm install vuex-persistedstate -D"}]},{type:a,value:h},{type:b,tag:y,props:{},children:[{type:a,value:"npm install js-cookie cookie"}]},{type:a,value:" : cookie를 사용하기 위해서 설치가 필요합니다."}]},{type:a,value:h},{type:b,tag:F,props:{id:au},children:[{type:b,tag:G,props:{ariaHidden:D,href:"#plugin-%EC%83%9D%EC%84%B1",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:av}]},{type:a,value:h},{type:b,tag:A,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"plugins\u002FpersistedState.js"}]},{type:b,tag:M,props:{className:[N,af]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'vuex-persistedstate'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"*"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:"as"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'js-cookie'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'cookie'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n \n"},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" store"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" req "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n    key"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'codenewborn'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:"\u002F\u002F cookie의 key값입니다."}]},{type:a,value:"\n    paths"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'example'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:"\u002F\u002F 유지가 필요한 store를 담습니다."}]},{type:a,value:"\n    storage"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,ab,s]},children:[{type:a,value:"getItem"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,i,S]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"process"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"server"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:" parsedCookies "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:" cookie"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,U,s,w]},children:[{type:a,value:"parse"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"req"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"headers"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,i,S]},children:[{type:a,value:an}]},{type:a,value:" parsedCookies"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,S]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,i,S]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,U,s,w]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,ab,s]},children:[{type:a,value:"setItem"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,g]},children:[{type:a,value:Q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,U,s,w]},children:[{type:a,value:"set"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" expires"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:"365"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" secure"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:"false"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,ab,s]},children:[{type:a,value:"removeItem"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,U,s,w]},children:[{type:a,value:"remove"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"store"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:F,props:{id:aw},children:[{type:b,tag:G,props:{ariaHidden:D,href:"#plugin-%EB%93%B1%EB%A1%9D",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ax}]},{type:a,value:h},{type:b,tag:A,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:M,props:{className:[N,af]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,ao,g]},children:[{type:a,value:ap}]},{type:a,value:"\n  plugins"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,ao,g]},children:[{type:a,value:ap}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"src"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'~\u002Fplugins\u002FpersistedState.js'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" ssr"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,ao,g]},children:[{type:a,value:ap}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:F,props:{id:Y},children:[{type:b,tag:G,props:{ariaHidden:D,href:"#%EC%98%88%EC%A0%9C",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:Y}]},{type:a,value:h},{type:b,tag:C,props:{},children:[{type:a,value:"아래는 테스트를 위해 만든 예제입니다."}]},{type:a,value:h},{type:b,tag:A,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"store\u002Fexample.js"}]},{type:b,tag:M,props:{className:[N,af]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ab,s]},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n  val"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:"0"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:" mutations "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n    state"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"val"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"++"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n  state"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n  mutations\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:A,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"pages\u002Fexample.vue"}]},{type:b,tag:M,props:{className:[N,"language-html"]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aI]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,aJ]},children:[{type:b,tag:c,props:{className:[d,e,aK]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:"example"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:aL}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aI]},children:[{type:a,value:"@click.prevent"}]},{type:b,tag:c,props:{className:[d,aJ]},children:[{type:b,tag:c,props:{className:[d,e,aK]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:"{{ $store.state.example.val }}"},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,q]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i,S]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n  methods"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"$store"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,U,s,w]},children:[{type:a,value:"commit"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"example\u002Fincrement\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:C,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"increment버튼"}]},{type:a,value:"을 클릭해 "},{type:b,tag:y,props:{},children:[{type:a,value:"example.val"}]},{type:a,value:"의 값을 증가시킨 후\n화면을 새로고침 했을 때 값이 유지되는것을 확인할 수 있습니다."}]},{type:a,value:h},{type:b,tag:F,props:{id:ay},children:[{type:b,tag:G,props:{ariaHidden:D,href:"#%EB%B2%84%EC%A0%84-%EC%A0%95%EB%B3%B4",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:az}]},{type:a,value:h},{type:b,tag:A,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"package.json"}]},{type:b,tag:M,props:{className:[N,"language-json"]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n  ...\n  "},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"\"dependencies\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"\"cookie\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"^0.4.1\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"\"js-cookie\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"^3.0.1\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"\"devDependencies\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"\"vuex-persistedstate\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"^4.1.0\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]}]}]},dir:"\u002Fvue",path:"\u002Fvue\u002F15",extension:".md",createdAt:aN,updatedAt:aN}}],fetch:{"data-v-cb593ac8:0":{directory_list:["java","react","vue"]}},mutations:[]}}("text","element","span","token","punctuation"," ","operator","\n","keyword","{","}","tag",":",",","(",")","module","\n  ","function","string",";",".","property-access","\u003E","code","\n    ","div","key","p","true",2,"h2","a",-1,"icon","icon-link","nuxt-content-highlight","filename","pre","line-numbers","parameter","arrow","=\u003E","\n      ","control-flow","=","method","\u003C","\u003C\u002F","property","예제","maybe-class-name","Cookies","export","default","function-variable","\n        ","increment","\"","language-js","import","imports","from","[","]","\n          ","const","return","spread","...","\n\n","script","패키지-설치","패키지 설치","plugin-생성","plugin 생성","plugin-등록","plugin 등록","버전-정보","버전 정보","createPersistedState","cookie","comment"," value","number","boolean","state","template","attr-name","attr-value","attr-equals","button","\n    ...\n    ","2021-10-28T08:02:55.931Z")));