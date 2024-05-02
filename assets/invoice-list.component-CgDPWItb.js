var $=Object.defineProperty;var I=(t,e,i)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var u=(t,e,i)=>(I(t,typeof e!="symbol"?e+"":e,i),i);import{h as c,_,C as f,o,d as r,e as h,F as p,a as n,t as d,b as S,r as C}from"./index-pPxVuryp.js";class m{constructor(){u(this,"resourceEndpoint","/clients")}getAll(){return c.get("/clients")}getById(e){return c.get(`/clients/${e}`)}create(e){return c.post("/clients",e)}update(e,i){return c.put(`/clients/${e}`,i)}delete(e){return c.delete(`/clients/${e}`)}findByName(e){return c.get(`/clients?name=${e}`)}getVehiclesByClientId(e){return fetch(`http:localhost:3000${this.resourceEndpoint}/${e}/vehicles`).then(i=>i.json()).catch(i=>console.error(i))}}const b={name:"invoice-card",data(){return{invoices:[],clients:[],errors:[],invoiceServices:new m,clientService:new f}},created(){this.getInvoices(),this.getClients()},methods:{getInvoices(){this.invoiceServices.getAll().then(t=>{this.invoices=t.data.flatMap(e=>e.invoices),console.log(t.data.flatMap(e=>e.invoices))})},getClients(){this.invoiceServices.getAll().then(t=>{this.clients=t.data,console.log(t.data)}).catch(t=>{this.errors.push(t)})},preview(t,e){this.$router.push({name:"preview-invoice",params:{clientId:t,numberId:e}})}}},w=n("p",null,"Paid",-1),y=["onClick"];function k(t,e,i,g,v,a){return o(!0),r(p,null,h(v.clients,l=>(o(),r("div",null,[(o(!0),r(p,null,h(l.invoices,s=>(o(),r("div",{key:s.number,class:"invoice-card-content"},[n("p",null,d(s.number),1),n("p",null,d(s.issue_date),1),n("p",null,"S/."+d(s.total),1),w,n("button",{onClick:F=>a.preview(l.id,s.number)},"Ver",8,y)]))),128))]))),256)}const A=_(b,[["render",k]]),B={name:"invoice-list",components:{InvoiceCard:A},data(){return{invoices:[],errors:[],invoiceServices:new m}},created(){this.getInvoices()},methods:{getInvoices(){this.invoiceServices.getAll().then(t=>{this.invoices=t.data.flatMap(e=>e.invoices),console.log(t.data.flatMap(e=>e.invoices))})},addInvoice(){this.$router.push("/add-invoice")}}},x={class:"container-invoice-list"},M=n("div",{class:"title-invoice-list"},[n("h1",null,"Invoice List")],-1),V={class:"content-invoice-list"},D={class:"add-event"},E=n("div",{class:"content-search"},[n("div",{class:"search-list"},[n("p",null,"Invoice ID"),n("p",null,"Invoice Date"),n("p",null,"Amount"),n("p",null,"Status"),n("input",{type:"text",placeholder:"Type"})])],-1),L={class:"view-list"};function N(t,e,i,g,v,a){const l=C("invoice-card");return o(),r("div",x,[M,n("div",V,[n("div",D,[n("button",{onClick:e[0]||(e[0]=s=>a.addInvoice())},"Add")]),E,n("div",L,[S(l)])])])}const T=_(B,[["render",N]]);export{T as default};
