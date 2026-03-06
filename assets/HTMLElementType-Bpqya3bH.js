function p(l,n,r,t,u){const e=l[n],o=u||n;return e==null?null:e&&e.nodeType!==1?new Error(`Invalid ${t} \`${o}\` supplied to \`${r}\`. Expected an HTMLElement.`):null}export{p as H};
