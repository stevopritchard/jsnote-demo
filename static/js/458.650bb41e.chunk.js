(this["webpackJsonpjsnote-demo"]=this["webpackJsonpjsnote-demo"]||[]).push([[458],{628:function(e,n){!function(e){var n=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,i=/\)|\((?![^|()\n]+\))/.source;function t(e,t){return RegExp(e.replace(/<MOD>/g,(function(){return"(?:"+n+")"})).replace(/<PAR>/g,(function(){return"(?:"+i+")"})),t||"")}var o={css:{pattern:/\{[^{}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},a=e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:t(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:t(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:o},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:t(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:t(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:o},punctuation:/^[*#]+/}},table:{pattern:t(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:t(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:o},punctuation:/\||^\./}},inline:{pattern:t(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:t(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:t(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:t(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:t(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:t(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:t(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:t(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:t(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:o},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:t(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:t(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:t(/(^")<MOD>+/.source),lookbehind:!0,inside:o},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:t(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:t(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:t(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:o},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),r=a.phrase.inside,s={inline:r.inline,link:r.link,image:r.image,footnote:r.footnote,acronym:r.acronym,mark:r.mark};a.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=r.inline.inside;d.bold.inside=s,d.italic.inside=s,d.inserted.inside=s,d.deleted.inside=s,d.span.inside=s;var l=r.table.inside;l.inline=s.inline,l.link=s.link,l.image=s.image,l.footnote=s.footnote,l.acronym=s.acronym,l.mark=s.mark}(Prism)}}]);
//# sourceMappingURL=458.650bb41e.chunk.js.map