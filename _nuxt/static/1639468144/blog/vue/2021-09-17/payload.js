__NUXT_JSONP__("/blog/vue/2021-09-17", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{article:{slug:M,title:"[Vue.js] input number only 스크립트",author:"신용준",date:M,toc:[],body:{type:"root",children:[{type:b,tag:"p",props:{},children:[{type:b,tag:N,props:{},children:[{type:a,value:"\u003Cinput type=\"number\"\u003E"}]},{type:a,value:"를 사용할 때 숫자가 아닌 문자가 화면에 남는것이 싫다면 아래의 함수로 해결할 수 있습니다."}]},{type:a,value:q},{type:b,tag:C,props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:"pre",props:{className:["language-html","line-numbers"]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:"input"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"v-model"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"num"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"@keypress"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e,F]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"isNumber($event)"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:q},{type:b,tag:c,props:{className:[d,n,P]},children:[{type:a,value:"export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,P]},children:[{type:a,value:"default"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,n,A]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n      num"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,R,"nil"]},children:[{type:a,value:R}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"\n  methods"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,"function-variable",u]},children:[{type:a,value:"isNumber"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n      e "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:" e "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"dom","variable"]},children:[{type:a,value:"window"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"event"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"var"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"keyCode"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,n,A]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"31"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"48"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"||"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"57"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"!=="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"46"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,X,u,l]},children:[{type:a,value:"preventDefault"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,A]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,X,u,l]},children:[{type:a,value:"replace"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"regex"]},children:[{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,"regex-source","language-regex"]},children:[{type:b,tag:c,props:{className:[d,aa,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"anchor",u]},children:[{type:a,value:"^"}]},{type:a,value:"0"},{type:b,tag:c,props:{className:[d,"quantifier",t]},children:[{type:a,value:"+"}]},{type:b,tag:c,props:{className:[d,aa,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"''"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F 왼쪽 0 제거 ex) 012345 =\u003E 12345"}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,n,A]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q}]}]}]}]},dir:"\u002Fvue",path:"\u002Fvue\u002F2021-09-17",extension:".md",createdAt:ab,updatedAt:ab}}],fetch:{"data-v-798f31a1:0":{directory_list:["java","javascript","react","vue"]}},mutations:[]}}("text","element","span","token","punctuation"," ","operator","tag","(",")",".","property-access","\u003E","keyword","{","}","\n","=","\"","number","function","\u003C","\n  ","\n    ",":",";","control-flow","\n      ","div","attr-name","attr-value","attr-equals","\u003C\u002F","script",",","e"," charCode "," e","2021-09-17","code","template","module","return","null","?","which","charCode ","&&","\n        e","method","target","value","regex-delimiter","\u002F","group","2021-12-14T07:47:48.408Z")));