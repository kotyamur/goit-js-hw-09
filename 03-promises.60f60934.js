function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const{elements:{delay:o,step:n,amount:l}}=t.currentTarget;let i=Number(o.value);const r=Number(n.value),s=Number(l.value);for(let t=1;t<=s;t++)e(t,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),i+=r}));
//# sourceMappingURL=03-promises.60f60934.js.map
