## OF@TEIN++ Playground: Players Discussion

* Date: January, 25 20201
* Time: 5:30 – 7:00 PM KST
* Meeting Place: Online (via Skype)
Link: https://join.skype.com/V4L03Dw93ZXW

### Participants:

*	GIST: 		Dr. Muhammad Usman, Muhammad Ahmad Rathore, Shahzeb
* Chula:    Natt, Kittipat,  Chanthan Hel
*	UM/ID: 		Dr. Aris Cahyadi Risdianto, Satis Kumar, Choi Meng Hui


### Link for Ambassadors and Players meeting minutes and slides
https://drive.google.com/drive/folders/1k4oVeRtjCu0GSivlOCAlD5qyq5LO7hZJ?usp=sharing
###  Github repo. 
	
* OFTEIN Multi Tenant Portal
This repository runs automated build to create docker images for Multi Tenant Portal Frontend and Backend Apps.
url: https://github.com/OFTEIN-NET/OFTEIN-MultiTenantPortal

* Github repo for front-end maintained by Usman, url: https://github.com/smartx-usman/multi-tenant-portal-frontend

* Github repo for back-end  mantained by Natt/Kittitpat, url: https://github.com/NattVi/OFTEIN-PlusPlus/tree/master/Demo

## Discussion Topics

1. Multi-tenant portal : 
  (1) Provide mechanism for authentication and authorization of PODs..
  (2) Authorization binding to authenticate individual user...
  (3) Consistent naming for cluster and control the application deployment in automated way

1.  KubeFlow deployment on GPU enabled computing machines.

1. Brief discussion on Student-fellows Progress.


## 1.1 - Multi tenant portal (Back-end)
* For Multi-tenant portal the Plan is to Deploy back-end in the Chula site. Front-end will be mainly the one in the Public Cloud. 
* Deployment of Back-end in the Chula Tower
https://ofteinplusplus.main.202.28.193.102.xip.io/#
* Received token and CA from each site for Creating Kubernetes Service / User Account restricted to one Namespace, 
## 1.2- Multi tenant portal : (Front-End)
* Front front-end call back end API querying authorization database.
* Authentication part buildup through social login.
* Created mechanism to make new docker image on changes.

* Future: Connect Front-end and Back-end. 

## 2- Sites Discussion:  KubeFlow deployment on GPU enabled computing machines.
* Deploy job and Run the experiment using GPU enabled nodes and make it available.
* Learning and Understanding the NVIDIA® DGX-1 based GPU machine in GIST AI Cluster. 
* Plan :  Leveraging the exisiting surface how we can
  - Deploy GPU enabled job in our existing cluster.
  - Define scripts/configruation for anyone to deploy on other cluster
  
## 3- Brief discussion on Student-fellows Progress.
### Shah Zeb (GIST): 
* Interconnecting Working Node (producer and Visiblity Center (consumer) using kafka based transfer mechanism.
* Look into KubeMetrics and directly fetch metrics.

### Chanthan (CHULA): 
* Learn Machine learning algorithm. Try to set features.
* Reconnect worker node with the Cluster Cluster.
* Discuss about process of reconnecting with the Cluster. 

### Meng (UM): 
*  Preparing Docker environment for service deployment and   demo of RPKI/BGP.
* Two VM setup in the UM Tower 2. 
* Researching on methods to deploy Qugga containers oin the Kubernetes environment.
* This research will be later used in service deployment.
* Local environment for Knowledge Transfer.
* Working on methods to deploy Quagga containers in the Kubernetes environment. 





