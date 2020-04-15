(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{256:function(t,e,a){"use strict";a.r(e);var i=a(28),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hpe-simplivity-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hpe-simplivity-configuration"}},[t._v("#")]),t._v(" HPE SimpliVity configuration")]),t._v(" "),a("p",[t._v("To take advantage of functionality that is specific to HPE SimpliVity (as opposed to core VMware functionality), you need to\nidentify the IP address of each OmniStack appliance in your HPE SimpliVity cluster. In the "),a("code",[t._v("group_vars/all/vars.yml")]),t._v("\nconfiguration file, add an array of addresses using the "),a("code",[t._v("simplivity_appliances")]),t._v(" variable as shown in the following example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("simplivity_appliances:\n- 10.10.173.109\n- 10.10.173.110\n- 10.10.173.111\n")])])]),a("p",[t._v("If you do not configure this variable, or if the list is empty, you will not be able to take advantage of functionality,\ndescribed in the remainder of this section, that is specific to HPE SimpliVity. You are only required to have one entry\nin this list, but HPE recommends that you add multiple entries for the purposes of high availability.")]),t._v(" "),a("h2",{attrs:{id:"automatic-provisioning-of-datastores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-provisioning-of-datastores"}},[t._v("#")]),t._v(" Automatic provisioning of datastores")]),t._v(" "),a("p",[t._v("Instead of manually creating a datastore for the VMs before starting your deployment, you can  use the playbooks\nto provision a datastore for you with a particular size. This functionality requires that you configure\nthe "),a("code",[t._v("simplivity_appliances")]),t._v(" list as described in the previous section.")]),t._v(" "),a("p",[t._v("If a datastore does not already exist corresponding to the "),a("code",[t._v("datastore")]),t._v(" variable, the playbooks will create a\ndatastore with this name. If the "),a("code",[t._v("datastore_size")]),t._v(" variable is specified, the datastore will be created with that size,\notherwise it will default to 1024 GiB.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datastore")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The datastores for storing VMs. For example, ['Rancher_HPE']")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datastore_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Optional size of datastore, specified in GiB. Defaults to 1024 GiB.")])])])]),t._v(" "),a("p",[t._v("You can take advantage of this functionality when provisioning persistent volumes for Container Storage\nInterface (CSI). For more information, see the section on "),a("a",{attrs:{href:"../storage/csi"}},[t._v("Container Storage Interface")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);