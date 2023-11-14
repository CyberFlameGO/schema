"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[472],{2991:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),r=n(6010),o=n(3438),s=n(9960),i=n(3919),l=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return a.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},n)}function d(e){let{href:t,icon:n,title:o,description:s}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:o},n," ",o),s&&a.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:s},s))}function u(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const s=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},s.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}},5859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(2991);const o={},s="Transportation",i={unversionedId:"themes/transportation/index",id:"themes/transportation/index",title:"Transportation",description:"Overture's Transportation theme schema describes the infrastructure and",source:"@site/docs/themes/transportation/index.mdx",sourceDirName:"themes/transportation",slug:"/themes/transportation/",permalink:"/themes/transportation/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Places",permalink:"/themes/places/place"},next:{title:"Shape and Connectivity",permalink:"/themes/transportation/shape-connectivity"}},l={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Schema Reference",id:"schema-reference",level:2},{value:"Status and Next Steps",id:"status-and-next-steps",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transportation"},"Transportation"),(0,r.kt)("p",null,"Overture's Transportation theme schema describes the infrastructure and\nconventions of how people and objects travel around the world. Transportation\ndata includes highways, footways, cycleways, railways, ferry routes, and public\ntransportation."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Some common use cases for which data in Overture's Transportation theme schema\nmay be used include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mapping.")," Rendering a map of connected roads and paths."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Routing.")," Calculating optimal routes from place to place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Navigation.")," Generating granular instructions on the maneuvers needed to\nfollow a route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Analytics.")," Transportation-related analysis including traffic safety\nanalysis and disaster planning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geocoding.")," Getting the coordinates of street intersections (geocodes); or\nthe street intersection near specific coordinates (reverse geocodes).")),(0,r.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shape and Connectivity.")," The Transportation theme schema captures the shape\nand connectivity of the transportation network using Segment and Connector\nfeatures. The schema design allows the segmentation process to promote shape\nstability and ultimately GERS ID stability.")),(0,r.kt)("p",null,(0,r.kt)("p",null,"Read more about these concepts on the ",(0,r.kt)("a",{parentName:"p",href:"shape-connectivity"},"Shape and Connectivity"),"\npage."))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scoped and Rule-Based Properties.")," The Transportation theme schema allows property values\nto be specified for granular scopes at the sub-feature level. For example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A speed limit on a road segment might be scoped to apply only to part of the\nroad geometry using Geometric Scoping."),(0,r.kt)("li",{parentName:"ul"},"The directionality of a segment, controlling the direction or directions in\nwhich traffic can flow along the segment geometry, may be specified to change\nat different times of day using Temporal Scoping."),(0,r.kt)("li",{parentName:"ul"},"The categories of people and vehicles who are allowed to travel on a segment\ncan be controlled using Subjective Scoping."),(0,r.kt)("li",{parentName:"ul"},"A real-world attribute that varies under changing environmental conditions can\nbe modeled using Environmental Scoping.")),(0,r.kt)("p",null,(0,r.kt)("p",null,"Read more about these concepts on the ",(0,r.kt)("a",{parentName:"p",href:"scoping-rules"},"Scoped and Rule-Based Properties"),"\npage."))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Roads.")," The Transportation theme schema models any kind of road, street, or\npath, including dedicated walking and cycling paths, as ",(0,r.kt)("inlineCode",{parentName:"p"},"road")," segments. Roads\nare currently the most developed part of the Transportation schema.")),(0,r.kt)("p",null,(0,r.kt)("p",null,"Read more about roads on the ",(0,r.kt)("a",{parentName:"p",href:"roads"},"Roads")," page."))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Travel Modes.")," The Transportation theme supports a fuzzy concept called\ntravel mode which can be used as a way of controlling the scope of scoped\nand rule-based properties.")),(0,r.kt)("p",null,(0,r.kt)("p",null,"Read more about the travel modes concept and how travel modes interact\nwith other scoping properties on the ",(0,r.kt)("a",{parentName:"p",href:"travel-modes"},"Travel Modes")," page.")))),(0,r.kt)("h2",{id:"schema-reference"},"Schema Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/transportation/connector"},"View schema for the Connector feature type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/transportation/segment"},"View schema for the Segment feature type"))),(0,r.kt)("h2",{id:"status-and-next-steps"},"Status and Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the initial ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.4.0")," schema release, we focused most of our efforts on\ndefining core transportations concepts and applying these concepts to roads."),(0,r.kt)("li",{parentName:"ul"},"In future releases, we hope to work through our backlog of known issues and\nideally start work on railways and waterways and, ideally, the public\ntransportation network."),(0,r.kt)("li",{parentName:"ul"},"We would value your input on the Transportation schema! Please consider\nsharing feedback as indicated in the schema ",(0,r.kt)("a",{parentName:"li",href:"/"},"Introduction"),".")))}u.isMDXComponent=!0}}]);