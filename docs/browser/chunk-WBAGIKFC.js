import{b as O,d as F,f as L,j as N,k as B,l as H,n as G}from"./chunk-XU4IID5H.js";import{$ as g,$a as I,Ca as E,Ga as P,M as S,Ma as m,Na as D,Oa as e,Pa as t,Qa as p,Ra as A,Sa as c,Ta as f,Y as _,Ya as o,Z as k,Za as h,_ as u,_a as v,ab as b,bb as w,cb as y,gb as T,sa as C,tb as j,ua as r,ub as J,wb as V,ya as M}from"./chunk-SQQYPUGC.js";var x=class l{posts=[{id:"1",image:"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Quos eaque et sequi aspernatur ad.",author:"Otha Dicki",status:"draft",date:"May 2, 2025",commentAuthors:["Miss Albina Beer","Dr. Jordane Heathcote DDS","John Doe","Jane Smith","Alex Johnson"]},{id:"2",image:"https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Necessitatibus saepe laudantium eum impedit.",author:"Otha Dicki",status:"published",date:"Oct 21, 2024",commentAuthors:["Chandler Rohan","Danika Shanahan","John Doe","Jane Smith","Alex Johnson"]},{id:"3",image:"https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Eum quae dolore.",author:"Otha Dicki",status:"published",date:"Jan 29, 2025",commentAuthors:["Maverick Cronin","Mr. Tyreek Padberg Sr.","John Doe","Jane Smith","Alex Johnson"]},{id:"4",image:"https://images.pexels.com/photos/4050296/pexels-photo-4050296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Quae sequi quia et illum.",author:"Otha Dicki",status:"draft",date:"Apr 30, 2025",commentAuthors:["Jevon Romaguera MD","Miss Josianne Bayer Jr.","John Doe","Jane Smith","Alex Johnson"]},{id:"5",image:"https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Itaque cumque dolor earum.",author:"Otha Dicki",status:"published",date:"Nov 24, 2024",commentAuthors:["Mr. Gus Greenfelder","Mr. Henderson Reichert","John Doe","Jane Smith","Alex Johnson"]},{id:"6",image:"https://images.pexels.com/photos/4050437/pexels-photo-4050437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"Adipisci laboriosam delectus voluptas alias incidunt.",author:"Camila Schinner DVM",status:"published",date:"Nov 25, 2024",commentAuthors:["Orville Hoeger","Rosemary Klein","John Doe"]}];constructor(){}getPosts(){return this.posts}getPost(s){return this.posts.find(i=>i.id===s)}static \u0275fac=function(i){return new(i||l)};static \u0275prov=S({token:l,factory:l.\u0275fac,providedIn:"root"})};var R=(l,s)=>({"bg-orange-500/20 text-orange-500":l,"bg-green-500/20 text-green-500":s});function K(l,s){if(l&1&&(e(0,"tr",38)(1,"td",21),p(2,"input",39),t(),e(3,"td",21)(4,"div",40),p(5,"img",41),t()(),e(6,"td",21),o(7),t(),e(8,"td",21),o(9),t(),e(10,"td",21)(11,"span",42),o(12),t()(),e(13,"td",21),o(14),t(),e(15,"td",21)(16,"div")(17,"div"),o(18),t(),e(19,"div",43),o(20,"Show 5 more"),t()()(),e(21,"td",21)(22,"div",44)(23,"button",45),u(),e(24,"svg",13),p(25,"path",46)(26,"path",47),t()(),g(),e(27,"button",45),u(),e(28,"svg",13),p(29,"path",48),t()()()()()),l&2){let i=s.$implicit;r(5),m("src",i.image,C)("alt",i.title),r(2),h(i.title),r(2),h(i.author),r(2),m("ngClass",T(8,R,i.status==="draft",i.status==="published")),r(),v(" ",i.status," "),r(2),h(i.date),r(4),h(i.commentAuthors[0])}}function U(l,s){if(l&1){let i=A();e(0,"button",49),c("click",function(){let a=_(i).$implicit,d=f();return k(d.goToPage(a))}),o(1),t()}if(l&2){let i=s.$implicit,n=f();D("bg-orange-500",n.currentPage===i)("text-white",n.currentPage===i)("bg-[#242426]",n.currentPage!==i),r(),v(" ",i," ")}}var Q=class l{constructor(s){this.postService=s}posts=[];filteredPosts=[];paginatedPosts=[];searchQuery="";currentPage=1;itemsPerPage=10;sortDirection="asc";sortField="";visiblePages=[];ngOnInit(){this.posts=this.postService.getPosts(),this.filteredPosts=[...this.posts],this.updatePaginatedPosts()}filterPosts(){this.filteredPosts=this.posts.filter(s=>s.title.toLowerCase().includes(this.searchQuery.toLowerCase())||s.author.toLowerCase().includes(this.searchQuery.toLowerCase())),this.currentPage=1,this.updatePaginatedPosts()}sortBy(s){this.sortField===s?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortField=s,this.sortDirection="asc"),this.filteredPosts.sort((i,n)=>{let a=i[s],d=n[s];return this.sortDirection==="asc"?a>d?1:-1:a<d?1:-1}),this.updatePaginatedPosts()}getStartIndex(){return(this.currentPage-1)*this.itemsPerPage+1}getEndIndex(){return Math.min(this.currentPage*this.itemsPerPage,this.filteredPosts.length)}updatePaginatedPosts(){let s=(this.currentPage-1)*this.itemsPerPage,i=s+this.itemsPerPage;this.paginatedPosts=this.filteredPosts.slice(s,i),this.updateVisiblePages()}updateVisiblePages(){let s=Math.ceil(this.filteredPosts.length/this.itemsPerPage),i=5,n=Math.max(1,this.currentPage-Math.floor(i/2)),a=Math.min(s,n+i-1);a-n+1<i&&(n=Math.max(1,a-i+1)),this.visiblePages=Array.from({length:a-n+1},(d,q)=>n+q)}nextPage(){this.currentPage*this.itemsPerPage<this.filteredPosts.length&&(this.currentPage++,this.updatePaginatedPosts())}previousPage(){this.currentPage>1&&(this.currentPage--,this.updatePaginatedPosts())}goToPage(s){this.currentPage=s,this.updatePaginatedPosts()}static \u0275fac=function(i){return new(i||l)(M(x))};static \u0275cmp=E({type:l,selectors:[["app-posts"]],decls:69,vars:13,consts:[[1,"sm:p-4","lg:p-6"],[1,"flex","items-center","justify-between","mb-6"],[1,"flex","items-center","space-x-2"],[1,"text-2xl","font-bold","text-white"],[1,"bg-orange-500","hover:bg-orange-600","text-white","px-4","py-2","rounded-lg","text-sm","font-medium"],[1,"bg-[#171717]","rounded-lg","mb-6"],[1,"p-4","flex","justify-end"],[1,"flex","items-center","space-x-3","w-64"],[1,"relative","flex-1"],["type","text","placeholder","Search",1,"bg-[#242426]","text-white","text-sm","rounded-md","px-3","py-2","pl-8","w-full","focus:outline-none","focus:ring-1","focus:ring-gray-500",3,"ngModelChange","ngModel"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-4","w-4","text-gray-400","absolute","left-2.5","top-2.5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],[1,"bg-[#242426]","hover:bg-gray-600","text-white","p-2","rounded"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"],[1,"overflow-x-auto"],[1,"w-full"],[1,"text-left","text-xs","font-medium","text-gray-400","bg-[#242426]","uppercase","tracking-wider"],[1,"p-4","w-8"],["type","checkbox",1,"rounded","bg-[#242426]","border-[#242426]","text-[#242426]","focus:ring-[#242426]"],[1,"p-4","w-16"],[1,"p-4"],[1,"flex","items-center","space-x-1",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 9l-7 7-7-7"],[1,"divide-y","divide-gray-700"],["class","hover:bg-[#242426] text-white",4,"ngFor","ngForOf"],[1,"bg-[#171717]","rounded-lg","mt-6"],[1,"p-4","flex","flex-col","gap-4","border-t","border-gray-700"],[1,"flex","flex-col","sm:flex-row","sm:items-center","justify-between","gap-4"],[1,"text-sm","text-gray-400","order-2","sm:order-1"],[1,"flex","items-center","space-x-2","order-1","sm:order-2"],[1,"bg-[#242426]","border-0","text-white","rounded-md","px-3","py-2","text-sm","focus:ring-1","focus:ring-gray-500","w-full","sm:w-auto",3,"ngModelChange","change","ngModel"],[3,"value"],[1,"flex","flex-wrap","items-center","justify-center","sm:justify-end","gap-2"],[1,"bg-[#242426]","text-white","px-3","py-2","rounded-md","text-sm","disabled:opacity-50","disabled:cursor-not-allowed","min-w-[80px]",3,"click","disabled"],[1,"flex","flex-wrap","items-center","gap-1"],["class","px-3 py-2 rounded-md text-sm min-w-[40px]",3,"bg-orange-500","text-white","bg-[#242426]","click",4,"ngFor","ngForOf"],[1,"hover:bg-[#242426]","text-white"],["type","checkbox",1,"rounded","bg-[#242426]","border-gray-600","text-orange-500","focus:ring-orange-500"],[1,"h-10","w-10","rounded","bg-gray-700","overflow-hidden"],[1,"h-full","w-full","object-cover",3,"src","alt"],[1,"px-2","py-1","rounded","text-xs","font-medium",3,"ngClass"],[1,"text-xs","text-gray-400"],[1,"flex","space-x-2"],[1,"text-gray-400","hover:text-orange-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"],[1,"px-3","py-2","rounded-md","text-sm","min-w-[40px]",3,"click"]],template:function(i,n){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),o(4,"Posts"),t()(),e(5,"button",4),o(6," New post "),t()(),e(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"input",9),y("ngModelChange",function(d){return w(n.searchQuery,d)||(n.searchQuery=d),d}),c("ngModelChange",function(){return n.filterPosts()}),t(),u(),e(12,"svg",10),p(13,"path",11),t()(),g(),e(14,"button",12),u(),e(15,"svg",13),p(16,"path",14),t()()()(),g(),e(17,"div",15)(18,"table",16)(19,"thead")(20,"tr",17)(21,"th",18),p(22,"input",19),t(),e(23,"th",20),o(24,"Image"),t(),e(25,"th",21)(26,"button",22),c("click",function(){return n.sortBy("title")}),e(27,"span"),o(28,"Title"),t(),u(),e(29,"svg",23),p(30,"path",24),t()()(),g(),e(31,"th",21)(32,"button",22),c("click",function(){return n.sortBy("author")}),e(33,"span"),o(34,"Author"),t(),u(),e(35,"svg",23),p(36,"path",24),t()()(),g(),e(37,"th",21),o(38,"Status"),t(),e(39,"th",21),o(40,"Published Date"),t(),e(41,"th",21),o(42,"Comment Authors"),t(),e(43,"th",21),o(44,"Actions"),t()()(),e(45,"tbody",25),P(46,K,30,11,"tr",26),t()()()(),e(47,"div",27)(48,"div",28)(49,"div",29)(50,"div",30),o(51),t(),e(52,"div",31)(53,"select",32),y("ngModelChange",function(d){return w(n.itemsPerPage,d)||(n.itemsPerPage=d),d}),c("change",function(){return n.updatePaginatedPosts()}),e(54,"option",33),o(55,"10 per page"),t(),e(56,"option",33),o(57,"25 per page"),t(),e(58,"option",33),o(59,"50 per page"),t(),e(60,"option",33),o(61,"100 per page"),t()()()(),e(62,"div",34)(63,"button",35),c("click",function(){return n.previousPage()}),o(64," Previous "),t(),e(65,"div",36),P(66,U,2,7,"button",37),t(),e(67,"button",35),c("click",function(){return n.nextPage()}),o(68," Next "),t()()()()()),i&2&&(r(11),b("ngModel",n.searchQuery),r(35),m("ngForOf",n.paginatedPosts),r(5),I(" Showing ",n.getStartIndex()," to ",n.getEndIndex()," of ",n.filteredPosts.length," results "),r(2),b("ngModel",n.itemsPerPage),r(),m("value",10),r(2),m("value",25),r(2),m("value",50),r(2),m("value",100),r(3),m("disabled",n.currentPage===1),r(3),m("ngForOf",n.visiblePages),r(),m("disabled",n.currentPage*n.itemsPerPage>=n.filteredPosts.length))},dependencies:[V,j,J,G,B,H,O,N,F,L],encapsulation:2})};export{Q as PostsComponent};
