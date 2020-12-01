(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1157:function(e,t,a){"use strict";a.r(t);var o=a(25),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"activecampaign"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activecampaign"}},[e._v("#")]),e._v(" ActiveCampaign")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.activecampaign.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActiveCampaign"),o("OutboundLink")],1),e._v(" is a cloud software platform for small-to-mid-sized business. The company offers software for customer experience automation, which combines the email marketing, marketing automation, sales automation, and CRM categories.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/ActiveCampaign/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Contact")]),e._v(" "),o("ul",[o("li",[e._v("Create a contact")]),e._v(" "),o("li",[e._v("Delete a contact")]),e._v(" "),o("li",[e._v("Get data of a contact")]),e._v(" "),o("li",[e._v("Get data of all contacts")]),e._v(" "),o("li",[e._v("Update a contact")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Deal")]),e._v(" "),o("ul",[o("li",[e._v("Create a deal")]),e._v(" "),o("li",[e._v("Delete a deal")]),e._v(" "),o("li",[e._v("Get data of a deal")]),e._v(" "),o("li",[e._v("Get data of all deals")]),e._v(" "),o("li",[e._v("Update a deal")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Connection")]),e._v(" "),o("ul",[o("li",[e._v("Create a connection")]),e._v(" "),o("li",[e._v("Delete a connection")]),e._v(" "),o("li",[e._v("Get data of a connection")]),e._v(" "),o("li",[e._v("Get data of all connections")]),e._v(" "),o("li",[e._v("Update a connection")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("E-commerce Order")]),e._v(" "),o("ul",[o("li",[e._v("Create an order")]),e._v(" "),o("li",[e._v("Delete an order")]),e._v(" "),o("li",[e._v("Get data of an order")]),e._v(" "),o("li",[e._v("Get data of all orders")]),e._v(" "),o("li",[e._v("Update an order")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("E-commerce Customer")]),e._v(" "),o("ul",[o("li",[e._v("Create an e-commerce customer")]),e._v(" "),o("li",[e._v("Delete an e-commerce customer")]),e._v(" "),o("li",[e._v("Get data of an e-commerce customer")]),e._v(" "),o("li",[e._v("Get data of all e-commerce customers")]),e._v(" "),o("li",[e._v("Update an e-commerce customer")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("E-commerce Order Products")]),e._v(" "),o("ul",[o("li",[e._v("Get data of all order products")]),e._v(" "),o("li",[e._v("Get data of an ordered product")]),e._v(" "),o("li",[e._v("Get data of an order's product")])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create a contact in ActiveCampaign. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/412",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following two nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("ActiveCampaign")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(600),alt:"A workflow with the ActiveCampaign node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-activecampaign-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-activecampaign-node"}},[e._v("#")]),e._v(" 2. ActiveCampaign node")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the ActiveCampaign node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/ActiveCampaign/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Enter the email of the contact in the "),o("em",[e._v("Email")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Toggle the "),o("em",[e._v("Update if exists")]),e._v(" option to yes.")]),e._v(" "),o("li",[e._v("Under the "),o("em",[e._v("Additional Fields")]),e._v(" section, click on the "),o("em",[e._v("Add Field")]),e._v(" button and select "),o("em",[e._v("First Name")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter the first name of the contact in the "),o("em",[e._v("First Name")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("Add Field")]),e._v(" again and select "),o("em",[e._v("Last Name")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter the last name of the contact in the "),o("em",[e._v("Last name")]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])])])}),[],!1,null,null,null);t.default=i.exports},600:function(e,t,a){e.exports=a.p+"assets/img/workflow.19ad3624.png"}}]);