(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1204:function(e,t,o){"use strict";o.r(t);var n=o(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"humantic-ai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#humantic-ai"}},[e._v("#")]),e._v(" Humantic AI")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://humantic.ai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Humantic AI"),n("OutboundLink")],1),e._v(" provides AI-driven behavior and personality assessment of a candidate.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/HumanticAi/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Profile")]),e._v(" "),n("ul",[n("li",[e._v("Create a profile")]),e._v(" "),n("li",[e._v("Get a profile")]),e._v(" "),n("li",[e._v("Update a profile")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get a profile using the Humantic AI node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/784",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Humantic AI")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(708),alt:"A workflow with the Humantic AI node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-humantic-ai-node-create-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-humantic-ai-node-create-profile"}},[e._v("#")]),e._v(" 2. Humantic AI node (create: profile)")]),e._v(" "),n("p",[e._v("This node will create a new profile for a candidate in Humantic AI. We will create a new profile using the LinkedIn URL of a candidate.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Humantic AI node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/HumanticAi/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the LinkedIn URL of the candidate in the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new profile using the LinkedIn URL of the candidate.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(709),alt:"Using the Humantic AI node to create a new profile"}})]),e._v(" "),n("h3",{attrs:{id:"_3-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request-node-get"}},[e._v("#")]),e._v(" 3. HTTP Request node (GET)")]),e._v(" "),n("p",[e._v("This node will fetch the resume of the candidate from a URL that we specify. We will pass on this resume to the next node in the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Enter the URL of the candidate's resume in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'File' from the "),n("em",[n("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node fetches the resume of the candidate from the URL we specified.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(710),alt:"Using the HTTP Request node to fetch a resume"}})]),e._v(" "),n("h3",{attrs:{id:"_4-humantic-ai1-node-update-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-humantic-ai1-node-update-profile"}},[e._v("#")]),e._v(" 4. Humantic AI1 node (update: profile)")]),e._v(" "),n("p",[e._v("This node will update the information of the candidate that we created using the Humantic AI node. We will add the candidate's resume that we fetched in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Humantic AI node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Humantic AI > Output Data > JSON > results > userid. You can also add the following expression: "),n("code",[e._v('{{$node["Humantic AI"].json["results"]["userid"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Send Resume")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the information of the candidate that we created using the Humantic AI node. Here, the node has added the resume of the candidate.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(711),alt:"Using the Humantic AI node to add resume to the candidate's profile"}})]),e._v(" "),n("h3",{attrs:{id:"_5-humantic-ai2-node-get-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-humantic-ai2-node-get-profile"}},[e._v("#")]),e._v(" 5. Humantic AI2 node (get: profile)")]),e._v(" "),n("p",[e._v("This node will return the "),n("code",[e._v("Hiring")]),e._v(" persona for the candidate that we created using the Humantic AI node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Humantic AI > Output Data > JSON > results > userid. You can also add the following expression: "),n("code",[e._v('{{$node["Humantic AI"].json["results"]["userid"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Hiring' from the "),n("em",[n("strong",[e._v("Persona")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the "),n("code",[e._v("Hiring")]),e._v(" persona for the candidate that we created using the Humantic AI node (column headers are not visible in the screenshot since we've scrolled down to show the data).")]),e._v(" "),n("p",[n("img",{attrs:{src:o(712),alt:"Using the Humantic AI node to get the information of the candidate"}})])])}),[],!1,null,null,null);t.default=a.exports},708:function(e,t,o){e.exports=o.p+"assets/img/workflow.96684b2b.png"},709:function(e,t,o){e.exports=o.p+"assets/img/HumanticAi_node.8da76909.png"},710:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.8297ac93.png"},711:function(e,t,o){e.exports=o.p+"assets/img/HumanticAi1_node.1ff8b960.png"},712:function(e,t,o){e.exports=o.p+"assets/img/HumanticAi2_node.b13e7b2e.png"}}]);