(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1319:function(e,t,o){"use strict";o.r(t);var i=o(25),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"mautic-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mautic-trigger"}},[e._v("#")]),e._v(" Mautic Trigger")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.mautic.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mautic"),i("OutboundLink")],1),e._v(" is an open-source marketing automation software that helps online businesses automate their repetitive marketing tasks such as lead generation, contact scoring, contact segmentation, and marketing campaigns.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),i("p",[e._v("You can find authentication information for this node "),i("RouterLink",{attrs:{to:"/nodes/credentials/Mautic/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"example-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),i("p",[e._v("This workflow allows you to receive updates when a form is submitted in Mautic using the Mautic Trigger node and send an SMS confirmation to the submitter. You can also find the "),i("a",{attrs:{href:"https://n8n.io/workflows/721",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),i("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following node.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:""}},[e._v("Mautic Trigger")])]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[e._v("Twilio")])],1)]),e._v(" "),i("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(937),alt:"A workflow with the Mautic Trigger node"}})]),e._v(" "),i("h3",{attrs:{id:"_1-mautic-trigger-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-mautic-trigger-node"}},[e._v("#")]),e._v(" 1. Mautic Trigger node")]),e._v(" "),i("p",[e._v("The Mautic Trigger node will trigger the workflow when a Mautic form is submitted.")]),e._v(" "),i("ol",[i("li",[e._v("First of all, you'll have to enter credentials for the Mautic Trigger node. You can find out how to do that "),i("RouterLink",{attrs:{to:"/nodes/credentials/Mautic/"}},[e._v("here")]),e._v(".")],1),e._v(" "),i("li",[e._v("Select 'Form Submit Event' from the "),i("em",[i("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Click on "),i("em",[i("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),i("p",[e._v("In the screenshot below, you will notice that the node returns the data that was submitted to the Mautic form. This output is passed on to the next nodes in the workflow.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(938),alt:"Using the Mautic Trigger node to trigger the workflow"}})]),e._v(" "),i("h3",{attrs:{id:"_2-twilio-node-send-sms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-twilio-node-send-sms"}},[e._v("#")]),e._v(" 2. Twilio node (send: sms)")]),e._v(" "),i("p",[e._v("This node sends a registration confirmation SMS to the users who filled out the Mautic form. We get the phone number of the submitter from the previous node.")]),e._v(" "),i("ol",[i("li",[e._v("First of all, you'll have to enter credentials for the Twilio node. You can find out how to do that "),i("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),i("div",{pre:!0},[i("ol",{pre:!0,attrs:{start:"3"}},[i("li",[e._v("Enter the Twilio phone number in the "),i("em",[i("strong",[e._v("From")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Click on the gears icon next to the "),i("em",[i("strong",[e._v("To")])]),e._v(" field and click on "),i("em",[i("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),i("li",[e._v("Select the following in the "),i("em",[i("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Mautic Trigger > Output Data > JSON > mautic.form_on_submit > [item: 0] > submission > results > phone_number. You can also add the following expression: "),i("code",[e._v('{{$node["Mautic Trigger"].json["mautic.form_on_submit"][0]["submission"]["results"]["phone_number"]}}')]),e._v(".")]),e._v(" "),i("li",[e._v("Click on the gears icon next to the "),i("em",[i("strong",[e._v("Message")])]),e._v(" field and click on "),i("em",[i("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),i("li",[e._v("Enter the following message in the "),i("em",[i("strong",[e._v("Expression")])]),e._v(" field.")])]),e._v(" "),i("div",{pre:!0,attrs:{class:"language- extra-class"}},[i("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[i("code",[e._v('Hey, {{$node["Mautic Trigger"].json["mautic.form_on_submit"][0]["submission"]["results"]["first_name"]}} 👋\nThank you for signing up for the Webinar - Getting Started with n8n. The webinar will start at 1800 CEST on 31st October 2020.\nSee you there!\n')])])]),i("ol",{pre:!0,attrs:{start:"8"}},[i("li",[e._v("Click on "),i("em",[i("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),i("p",[e._v("In the screenshot below, you will notice that the node sends an SMS to the submitter whose name and phone number are returned by the Mautic Trigger node.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(939),alt:"Using the Twilio node to send an SMS"}})])])}),[],!1,null,null,null);t.default=n.exports},937:function(e,t,o){e.exports=o.p+"assets/img/workflow.9d7f2d50.png"},938:function(e,t,o){e.exports=o.p+"assets/img/MauticTrigger_node.53617833.png"},939:function(e,t,o){e.exports=o.p+"assets/img/Twilio_node.bffa808d.png"}}]);