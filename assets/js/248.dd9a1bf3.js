(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1211:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"jira"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jira"}},[e._v("#")]),e._v(" Jira")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.atlassian.com/software/jira",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jira"),r("OutboundLink")],1),e._v(" is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Jira/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Issue")]),e._v(" "),r("ul",[r("li",[e._v("Create a new issue")]),e._v(" "),r("li",[e._v("Update an issue")]),e._v(" "),r("li",[e._v("Get an issue")]),e._v(" "),r("li",[e._v("Get all issues")]),e._v(" "),r("li",[e._v("Get issue changelog")]),e._v(" "),r("li",[e._v("Create an email notification for an issue and add it to the mail queue")]),e._v(" "),r("li",[e._v("Return either all transitions or a transition that can be performed by the user on an issue, based on the issue's status")]),e._v(" "),r("li",[e._v("Delete an issue")])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a new issue in Jira. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/459",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following two nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Jira")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(723),alt:"A workflow with the Jira node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-jira-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-jira-node"}},[e._v("#")]),e._v(" 2. Jira node")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Jira node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Jira/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select your project from the dropdown list for the "),r("em",[e._v("Project")]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select an issue type from the dropdown list for the "),r("em",[e._v("Issue Type")]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the summary of the issue in the "),r("em",[e._v("Summary")]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])]),e._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),r("h3",{attrs:{id:"how-to-fetch-issues-for-a-specific-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-fetch-issues-for-a-specific-project"}},[e._v("#")]),e._v(" How to fetch issues for a specific project?")]),e._v(" "),r("p",[e._v("The 'Get All' operation returns all the issues from Jira. To fetch issues for a particular project, you need to use JQL (Jira Query Language).")]),e._v(" "),r("p",[e._v("For example, if you want to receive all the issues of a project named "),r("code",[e._v("n8n")]),e._v(", follow the steps mentioned below.")]),e._v(" "),r("ul",[r("li",[e._v("Select 'Get All' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Return All")])]),e._v(" to true.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Option")])]),e._v(" and select 'JQL'.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("project=n8n")]),e._v(" in the "),r("em",[r("strong",[e._v("JQL")])]),e._v(" field.")])]),e._v(" "),r("p",[e._v("This query will fetch all the issues in the project named "),r("code",[e._v("n8n")]),e._v(". Enter the name of your project instead of "),r("code",[e._v("n8n")]),e._v(" to fetch all the issues for your project.")]),e._v(" "),r("p",[e._v("You can refer to the "),r("a",{attrs:{href:"https://www.atlassian.com/software/jira/guides/expand-jira/jql",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),r("OutboundLink")],1),e._v(" about JQL to learn more about it.")]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Custom Incident Response Workflows with n8n 🚨"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports},723:function(e,t,a){e.exports=a.p+"assets/img/workflow.e4078086.png"}}]);