!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;var n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor=o(),n=setInterval((function(){var t=o();console.log(t),document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.a5dc00d7.js.map
