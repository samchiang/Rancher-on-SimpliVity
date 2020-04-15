(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{349:function(e,r,a){"use strict";a.r(r);var t=a(33),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"initial-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-deployment"}},[e._v("#")]),e._v(" Initial deployment")]),e._v(" "),a("h2",{attrs:{id:"run-site-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-site-yml"}},[e._v("#")]),e._v(" Run site.yml")]),e._v(" "),a("p",[e._v("Run the\nplaybook "),a("code",[e._v("site.yml")]),e._v(" to perform the initial admin and user cluster deployment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n$ ansible-playbook -i hosts site.yml --vault-password-file .vault_pass\n")])])]),a("p",[e._v("The playbook should take approximately twenty minutes, depending on your exact configuration.")]),e._v(" "),a("p",[e._v("Artifacts\ngenerated during the installation are stored in the folder determined by the "),a("code",[e._v("install_dir")]),e._v(" variable, specified in the\nfile "),a("code",[e._v("group_vars/all/private.yml")]),e._v(". The default location is the "),a("code",[e._v(".svtrancher")]),e._v(" folder in your home directory.")]),e._v(" "),a("p",[e._v("Files generated include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("kube_config_rancher-cluster.yml")]),e._v(" - the "),a("code",[e._v("kubeconfig")]),e._v(" file that provides access to the admin cluster")]),e._v(" "),a("li",[a("code",[e._v("rke-up.log")]),e._v(" - the log file from the installation of the admin cluster")]),e._v(" "),a("li",[a("code",[e._v("rancher-cluster.yml")]),e._v(" - the admin cluster definition file")])]),e._v(" "),a("h2",{attrs:{id:"playbooks-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-overview"}},[e._v("#")]),e._v(" Playbooks overview")]),e._v(" "),a("p",[e._v("The following section\nprovides an summary of the tasks carried out when running the "),a("code",[e._v("site.yml")]),e._v(" playbook.")]),e._v(" "),a("p",[e._v("The main entry point "),a("code",[e._v("site.yml")]),e._v(" is a wraper for a number of playbooks that perform the deployment in stages:")]),e._v(" "),a("ul",[a("li",[e._v("playbooks/prepare.yml")]),e._v(" "),a("li",[e._v("playbooks/provision.yml")]),e._v(" "),a("li",[e._v("playbooks/configure.yml")]),e._v(" "),a("li",[e._v("playbooks/ranchercluster.yml")]),e._v(" "),a("li",[e._v("playbooks/rancherserver.yml")]),e._v(" "),a("li",[e._v("playbooks/1stlogin.yml")]),e._v(" "),a("li",[e._v("playbooks/ucluster.yml")]),e._v(" "),a("li",[e._v("playbooks/csi.yml")])]),e._v(" "),a("h3",{attrs:{id:"prepare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("prepare")]),e._v(" stage performs some initial setup on the Ansible controller:")]),e._v(" "),a("ul",[a("li",[e._v("Configures proxy if required and installs the required packages on the Ansible box")]),e._v(" "),a("li",[e._v("Verifies that required files have been downloaded to staging area")]),e._v(" "),a("li",[e._v("Installs client tools such as Helm, and CLIs for Rancher, RKE, "),a("code",[e._v("kubectl")])]),e._v(" "),a("li",[e._v("Creates required artifacts in vCenter including VM folders, resource pools")]),e._v(" "),a("li",[e._v("Populates "),a("code",[e._v("/etc/hosts")])])]),e._v(" "),a("p",[e._v("It also performs datastore configuration:")]),e._v(" "),a("ul",[a("li",[e._v("Connect to HPE SimpliVity")]),e._v(" "),a("li",[e._v("Create datastore if it does not already exist")])]),e._v(" "),a("h3",{attrs:{id:"provision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provision"}},[e._v("#")]),e._v(" Provision")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("provision")]),e._v(" stage performs the following tasks:")]),e._v(" "),a("ul",[a("li",[e._v("Provision Support (DHCP) VM")]),e._v(" "),a("li",[e._v("Provision Loadbalancer VMs")]),e._v(" "),a("li",[e._v("Provision Rancher admin server VMs")]),e._v(" "),a("li",[e._v("Update package manager on all provisioned VMs")])]),e._v(" "),a("h3",{attrs:{id:"configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[e._v("#")]),e._v(" Configure")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("configure")]),e._v(" stage configures the admin server VMs, DHCP VM and loadbalancer VMs.")]),e._v(" "),a("ul",[a("li",[e._v("Create DRS anti-affinity rules for Rancher admin server VMs and load balancer VMs")]),e._v(" "),a("li",[e._v("Configure the Rancher admin server VMs\n"),a("ul",[a("li",[e._v("Install required packages, configure firewall and open ports")]),e._v(" "),a("li",[e._v("Install and configure Docker")])])]),e._v(" "),a("li",[e._v("Configure support node (DHCP)\n"),a("ul",[a("li",[e._v("Install required packages, configure firewall and open ports")]),e._v(" "),a("li",[e._v("Install and configure DHCP")])])]),e._v(" "),a("li",[e._v("Configure load balancer\n"),a("ul",[a("li",[e._v("Install required packages, configure firewall and open ports")]),e._v(" "),a("li",[e._v("Install and configure "),a("code",[e._v("nginx")])])])])]),e._v(" "),a("h3",{attrs:{id:"rancher-admin-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher-admin-cluster"}},[e._v("#")]),e._v(" Rancher admin cluster")]),e._v(" "),a("p",[e._v("The Rancher admin cluster is a Kubernetes cluster, deployed using RKE. The cluster configuration is stored in the file\n"),a("code",[e._v("rancher-cluster.yml")]),e._v(" in the installation directory.")]),e._v(" "),a("h3",{attrs:{id:"rancher-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher-server"}},[e._v("#")]),e._v(" Rancher server")]),e._v(" "),a("p",[e._v("The Rancher server software is installed using Helm on top of the Rancher admin cluster.")]),e._v(" "),a("p",[e._v("For self-signed certs, "),a("code",[e._v("cert-manager")]),e._v(" software is installed.  "),a("code",[e._v("cert-manager")]),e._v(" is a Kubernetes add-on to automate the\nmanagement and issuance of TLS certificates from various issuing sources. It ensures certificates are valid and\nup to date periodically, and attempt to renew certificates at an appropriate time before expiry.\nFor more information, see\n"),a("a",{attrs:{href:"https://github.com/jetstack/cert-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/jetstack/cert-manager"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For user-supplied certs, a Kubernetes secret is created from the supplied certs.")]),e._v(" "),a("h3",{attrs:{id:"first-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-login"}},[e._v("#")]),e._v(" First login")]),e._v(" "),a("p",[e._v("In this stage, a number of first-time log in operations are performed, including changing the admin password of the Rancher server and creating an API token.")]),e._v(" "),a("h3",{attrs:{id:"user-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster"}},[e._v("#")]),e._v(" User cluster")]),e._v(" "),a("ul",[a("li",[e._v("Create cloud credentials")]),e._v(" "),a("li",[e._v("Create node template, from user (or the default admin) template using configuration specified in "),a("code",[e._v("user-template")]),e._v(" variable in the "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" file")]),e._v(" "),a("li",[e._v("Deploy the user cluster with the Rancher API, using the node template and the configuration in the "),a("code",[e._v("cluster.yml.j2")]),e._v(" Jinga template file.")])]),e._v(" "),a("p",[e._v("In the current release, the user cluster deploys with a "),a("code",[e._v("kubernetesVersion")]),e._v(" of  "),a("code",[e._v("v1.17.2-rancher1-2")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"enable-csi-for-user-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-csi-for-user-cluster"}},[e._v("#")]),e._v(" Enable CSI for user cluster")]),e._v(" "),a("ul",[a("li",[e._v("Create a datastore named "),a("code",[e._v("csi_datastore_name")]),e._v(" of size "),a("code",[e._v("csi_datastore_size")])]),e._v(" "),a("li",[e._v("Retrieve the "),a("code",[e._v("kubeconfig")]),e._v(" for user cluster and store it in installation directory")]),e._v(" "),a("li",[e._v("Configure vSphere CSI driver")]),e._v(" "),a("li",[e._v("Create storage class named "),a("code",[e._v("csi_storageclass_name")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);