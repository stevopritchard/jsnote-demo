(this["webpackJsonpjsnote-demo"]=this["webpackJsonpjsnote-demo"]||[]).push([[381],{551:function(e,n){!function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,t){return"(?:"+n[+t]+")"}))}function t(e,t,a){return RegExp(n(e,t),a||"")}var a=RegExp("\\b(?:"+"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within".trim().replace(/ /g,"|")+")\\b"),i=n("<<0>>(?:\\s*\\.\\s*<<0>>)*",["\\b[A-Za-z_]\\w*\\b"]),r={keyword:a,punctuation:/[<>()?,.:[\]]/},s='"(?:\\\\.|[^\\\\"])*"';e.languages.qsharp=e.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:t("(^|[^$\\\\])<<0>>",[s]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:t("(\\b(?:as|open)\\s+)<<0>>(?=\\s*(?:;|as\\b))",[i]),lookbehind:!0,inside:r},{pattern:t("(\\bnamespace\\s+)<<0>>(?=\\s*\\{)",[i]),lookbehind:!0,inside:r}],keyword:a,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bor\b|\bnot\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),e.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var o=function(e,n){for(var t=0;t<2;t++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}(n('\\{(?:[^"{}]|<<0>>|<<self>>)*\\}',[s]));e.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:t('\\$"(?:\\\\.|<<0>>|[^\\\\"{])*"',[o]),greedy:!0,inside:{interpolation:{pattern:t("((?:^|[^\\\\])(?:\\\\\\\\)*)<<0>>",[o]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:e.languages.qsharp}}},string:/[\s\S]+/}}})}(Prism),Prism.languages.qs=Prism.languages.qsharp}}]);
//# sourceMappingURL=381.a5cf785d.chunk.js.map