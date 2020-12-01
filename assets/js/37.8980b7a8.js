(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1195:function(t,e,o){"use strict";o.r(e);var n=o(25),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"google-contacts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-contacts"}},[t._v("#")]),t._v(" Google Contacts")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://contacts.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Contacts"),n("OutboundLink")],1),t._v(" is Google's contact management tool that is available in its free email service Gmail, as a standalone service, and as a part of Google's business-oriented suite of web apps Google Apps.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("Contact")]),t._v(" "),n("ul",[n("li",[t._v("Create a contact")]),t._v(" "),n("li",[t._v("Delete a contact")]),t._v(" "),n("li",[t._v("Get a contact")]),t._v(" "),n("li",[t._v("Retrieve all contacts")]),t._v(" "),n("li",[t._v("Update a contact")])])]),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to create, update, and get a contact from Google Contacts. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/637",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("Google Contacts")])])]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(686),alt:"A workflow with the Google Contacts node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),n("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),n("h3",{attrs:{id:"_2-google-contacts-node-create-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-contacts-node-create-contact"}},[t._v("#")]),t._v(" 2. Google Contacts node (create: contact)")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Google Contacts node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Enter the family name in the "),n("em",[n("strong",[t._v("Family Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the given name in the "),n("em",[n("strong",[t._v("Given Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[n("img",{attrs:{src:o(687),alt:"Using the Google Contacts node to create a contact"}})]),t._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-google-contacts1-node-update-contact"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-google-contacts1-node-update-contact"}},[t._v("#")]),t._v(" 3. Google Contacts1 node (update: contact)")]),t._v(" "),n("ol",[n("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),n("li",[t._v("Select 'Update' from the "),n("em",[n("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Contact ID")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Google Contacts > Output Data > JSON > contactId. You can also add the following expression: "),n("code",[t._v('{{$node["Google Contacts"].json["contactId"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("*")]),t._v(" from the "),n("em",[n("strong",[t._v("Fields")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Add Field")])]),t._v(" button and select "),n("em",[n("strong",[t._v("Company")])]),t._v(".")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Add Company")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Toggle the value to true for the "),n("em",[n("strong",[t._v("Current")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the company's domain in the "),n("em",[n("strong",[t._v("Domain")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the company's name in the "),n("em",[n("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the title in the "),n("em",[n("strong",[t._v("Title")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:o(688),alt:"Using the Google Contact node to update the contact"}})]),t._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_4-google-contacts2-node-get-contact"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-google-contacts2-node-get-contact"}},[t._v("#")]),t._v(" 4. Google Contacts2 node (get: contact)")]),t._v(" "),n("ol",[n("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),n("li",[t._v("Select 'Get' from the "),n("em",[n("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Contact ID")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Google Contacts > Output Data > JSON > contactId. You can also add the following expression: "),n("code",[t._v('{{$node["Google Contacts"].json["contactId"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Select 'Organizations' from the "),n("em",[n("strong",[t._v("Fields")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:o(689),alt:"Using the Google Contacts node to get the contact"}})])])}),[],!1,null,null,null);e.default=a.exports},686:function(t,e,o){t.exports=o.p+"assets/img/workflow.6a5d7522.png"},687:function(t,e,o){t.exports=o.p+"assets/img/GoogleContacts_node.bf78da37.png"},688:function(t,e,o){t.exports=o.p+"assets/img/GoogleContacts1_node.59d625a2.png"},689:function(t,e,o){t.exports=o.p+"assets/img/GoogleContacts2_node.f82a6add.png"}}]);