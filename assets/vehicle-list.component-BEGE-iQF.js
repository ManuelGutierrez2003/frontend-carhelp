import{h as p,_ as o,o as n,d as r,a,b as h,w as m,r as d,t as l,e as f,F as g}from"./index-pPxVuryp.js";class V{getAll(){return p.get("/clients")}}const b={props:{vehicle:null}},x={class:"card-container-horizontal"},y=["src"],M={class:"cards"};function S(t,e,c,_,i,u){const s=d("pv-card");return n(),r("div",x,[a("img",{src:c.vehicle.image,alt:"vehicle image"},null,8,y),a("div",M,[h(s,{class:"bc"},{content:m(()=>[a("p",null,"Plate: "+l(c.vehicle.plate),1),a("p",null,"Vehicle brand: "+l(c.vehicle.brand),1),a("p",null,"Model: "+l(c.vehicle.model),1),a("p",null,"Year of Manufacture: "+l(c.vehicle.year),1)]),_:1})])])}const $=o(b,[["render",S]]);class w{constructor(e){this.plate=e.plate,this.brand=e.brand,this.model=e.model,this.year=e.year,this.color=e.color,this.image=e.image}}const B={name:"vehicle-list-content",components:{VehicleCard:$,Vehicle:w},data(){return{vehicles:[],erros:[],vehicleService:new V}},created(){this.getVehicles()},methods:{getVehicles(){this.vehicleService.getAll().then(t=>{this.vehicles=t.data.flatMap(e=>e.vehicle),console.log(t.data.flatMap(e=>e.vehicle))}).catch(t=>{this.errors.push(t)})}}};function C(t,e,c,_,i,u){const s=d("vehicle-card");return n(!0),r(g,null,f(i.vehicles,v=>(n(),r("div",null,[h(s,{vehicle:v},null,8,["vehicle"])]))),256)}const A=o(B,[["render",C]]);export{A as default};
