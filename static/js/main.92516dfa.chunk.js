(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),i=a.n(r),s=(a(24),a(25),a(34)),o=a(36),l=a(35),p=a(5),m=a.n(p),u=a(6),h=a(7),f=a(8),v=a(12),E=a(9),d=a(13),b=(a(28),function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),n.a.createElement("button",{className:"form__button"},"Search"))}),_=a(33),g=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes&&e.recipes.map(function(e){return n.a.createElement("div",{key:e.title,className:"col-md-4",style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipe__text"},n.a.createElement("h5",{className:"recipes__title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),n.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",n.a.createElement("span",null,e.publisher))),n.a.createElement("button",{className:"recipe_buttons"},n.a.createElement(_.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe"))))})))},w="cc066a48599ff5cd3c3c06699f0cf0c3",N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getRecipe=function(){var e=Object(u.a)(m.a.mark(function e(t){var c,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat(w,"&q=").concat(c,"&count=10 "));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a.setState({recipes:r.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe Search")),n.a.createElement(b,{getRecipe:this.getRecipe}),n.a.createElement(g,{recipes:this.state.recipes}))}}]),t}(c.Component),y="cc066a48599ff5cd3c3c06699f0cf0c3",j="https://cors-anywhere.herokuapp.com/",k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=Object(u.a)(m.a.mark(function e(){var t,c,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("".concat(j,"https://www.food2fork.com/api/search?key=").concat(y,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),a.setState({activeRecipe:n.recipes[0]}),console.log(a.state.activeRecipe);case 10:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return n.a.createElement("div",{className:"container"},0!==this.state.activeRecipe.length&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("h3",{className:"active-recipe__title"},e.title),n.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher: ",n.a.createElement("span",null,e.publisher)),n.a.createElement("p",{className:"active-recipe__website"},n.a.createElement("span",null,n.a.createElement("a",{href:e.publisher_url},e.publisher_url))),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(_.a,{to:"/"},"Go Home"))))}}]),t}(n.a.Component),O=function(){return n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement(l.a,{path:"/",component:N,exact:!0}),n.a.createElement(l.a,{path:"/recipe/:id",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.92516dfa.chunk.js.map