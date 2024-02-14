"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[783],{3599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(5893),i=a(1151);const r={title:"scenarios"},s="Use cases",o={id:"gers/scenarios",title:"scenarios",description:"Live traffic data provider",source:"@site/docs/gers/scenarios.mdx",sourceDirName:"gers",slug:"/gers/scenarios",permalink:"/gers/scenarios",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"scenarios"},sidebar:"gers",previous:{title:"Global Entity Reference System",permalink:"/gers/"},next:{title:"terminology",permalink:"/gers/terminology"}},c={},d=[{value:"Live traffic data provider",id:"live-traffic-data-provider",level:2},{value:"Place enrichment",id:"place-enrichment",level:2},{value:"Scenario",id:"scenario",level:4}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-cases",children:"Use cases"}),"\n",(0,n.jsx)(t.h2,{id:"live-traffic-data-provider",children:"Live traffic data provider"}),"\n",(0,n.jsx)(t.p,{children:"A company providing live traffic data operates by ingesting sensor data and then conflating, cleaning, and calculating traffic density for a variety of locations through proprietary methods. Ultimately, they provide a data feed of live traffic conditions that customers subscribe to for a monthly access fee."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Before GERS + Overture"}),": This company maintains a version of the OpenStreetMap road network to which they associate their traffic density information. The data-feed product is made of GeoJSON features, each with a LineString geometry representing a segment of the road (from OSM) and properties including a timestamp and traffic information along that section of the road. Using OSM is preferred because the geometries in the data feed will match road segment geometries for any customer using OSM. However, a more computationally expensive geospatial match operation is required to associate the traffic information with the road network."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"With GERS + Overture"}),": The company uses the Overture road network internally. When they associate their traffic information with a road segment, they can publish the data feed with a GERS ID that represents the given road segment. Consumers that are also using Overture can then match this data by ",(0,n.jsx)(t.code,{children:"GERS ID"})," to the Overture road segment, not needing to perform any geospatial computation. Additionally, even the geometry of the road segment could be omitted from the feed, since the ID will match for any customer also using the Overture road network."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"What if the company has proprietary (better) road segment data extracted from their sensor network that they do not / cannot share?"})}),"\n",(0,n.jsxs)(t.p,{children:["Because these road segments are not shared with Overture, they cannot be assigned a ",(0,n.jsx)(t.code,{children:"GERS ID"}),". The ID is of little value to these segments because they do not exist in other datasets, so conflating or matching them is meaningless."]}),"\n",(0,n.jsxs)(t.p,{children:["However, by sharing ",(0,n.jsx)(t.em,{children:"just the new road segment"})," geometries with Overture (not the entire proprietary traffic feed), Overture will add it to the Overture corpus and generate GERS IDs accordingly. The Overture road network will be improved and 100% of the company's data feed can become GERS-enabled."]}),"\n",(0,n.jsx)(t.h2,{id:"place-enrichment",children:"Place enrichment"}),"\n",(0,n.jsx)(t.p,{children:"Venues \u2013 both private and public \u2013 are often an atomic unit in data environments. For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Businesses organize customer records based on home addresses."}),"\n",(0,n.jsx)(t.li,{children:"Municipalities map property information and status by parcel identifiers."}),"\n",(0,n.jsx)(t.li,{children:"Insurance companies use various building identifiers to organize policy information."}),"\n",(0,n.jsx)(t.li,{children:"Retailers organize and analyze market opportunities and challenges through their own competitive retail outlets."}),"\n",(0,n.jsx)(t.li,{children:"Delivery companies optimize services by destination address."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Despite these common use cases, location is under-utilized as an organizing mechanism for data, applications, and analytics. Addresses are often inconsistent, messy, or simply wrong. Coordinate pairs are precise but often inaccurate and can be difficult to cluster correctly. GIS infrastructure on the whole is often out of reach for many teams or is maintained by a small, specialty group at the fringes of the organization."}),"\n",(0,n.jsx)(t.p,{children:"If location data can be associated with easy-to-use standard identifiers, data owners and consumers can use locations as a common denominator data element that facilitates joins, enrichment, and data sharing. GERS has the opportunity to make location a connector as valuable as phone numbers or email addresses, unlocking the incredible value of complex GIS data that is currently beyond the reach of most teams."}),"\n",(0,n.jsx)(t.h4,{id:"scenario",children:"Scenario"}),"\n",(0,n.jsx)(t.p,{children:"A data analyst at a pet-focused retail company is evaluating a metropolitan area in order to understand supply and demand, relative to their offerings, in the region. In their environment they have 1st party customer data organized by delivery address, addresses for their own retail locations, and a list of potential store locations provided by their real estate team. Their data infrastructure team has staged an Overture dataset in their environment, which they use as a foundational ground truth for the region. The company's executive team has asked the data analyst to review the potential store locations, recommend the most valuable sites for new stores, and model the expected market impact if they opened a new store at each site."}),"\n",(0,n.jsx)(t.p,{children:"The data analyst plans on using Overture's GERS to quickly onboard necessary external data for their analysis."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"They match customer residences and store locations to GERS by conflating street addresses with venues in their local Overture basemap."}),"\n",(0,n.jsx)(t.li,{children:"They request retail foot traffic data and residential demographic data from external vendors, specifying the data should be organized by GERS ID."}),"\n",(0,n.jsxs)(t.li,{children:["The external data vendors maintain a version of their data products keyed off ",(0,n.jsx)(t.code,{children:"GERS ID"})," (matched via a conflation pipeline that accounts for street address, business name, and coordinate pair), which they provide to the requesting analyst."]}),"\n",(0,n.jsx)(t.li,{children:"The analyst is able to quickly ingest and join the external datasets in their own environment, without relying on their data infrastructure team, thanks to the simplicity of joining using consistent GERS identifiers."}),"\n",(0,n.jsx)(t.li,{children:"The analyst performs their work, taking into account their current customer base, market potential, competitive footprint, and more."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This is ad-hoc enrichment; enrichment that occurs within the confines of a single project. However, there are many datasets this company may choose to continually subscribe to which will be managed by the data ops or infrastructure teams. GERS has significant benefits in this scenario as well as it reduces the time to usage, allows for easy updates (vendors simply ship diff files keyed to GERS ID), and facilitates the sharing of data both internally and externally."})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);