## OF@TEIN++ Playground: Players Discussion

* Date: December, 21 2020 
* Time: 5:30 – 7:00 PM KST
* Meeting Place: Online (via Skype)
Link: https://join.skype.com/V4L03Dw93ZXW

### Participants:

*	GIST: 		Dr. Muhammad Usman, Muhammad Ahmad Rathore, Shahzeb
* Chula:  Prof. Chaodit, Natt, Kittipat,  Chanthan Hel
*	UM/ID: 		Dr. Aris Cahyadi Risdianto, Satis Kumar


### Link for meeting minutes and slides
https://drive.google.com/drive/folders/1DJb0FrCh1p2YKMbW3pF77LDiPYvj0sZo?usp=sharing

###  Github repo. 

* OFTEIN Multi Tenant Portal
This repository runs automated build to create docker images for Multi Tenant Portal Frontend and Backend Apps.
url: https://github.com/OFTEIN-NET/OFTEIN-MultiTenantPortal

* Github repo for front-end maintained by Usman, url: https://github.com/smartx-usman/multi-tenant-portal-frontend

* Github repo for back-end  mantained by Natt/Kittitpat, url: https://github.com/NattVi/OFTEIN-PlusPlus/tree/master/Demo

## Discussion Topics

1. Multi tenant portal : 
  (1) create script/docker compose to run both back-end and front-end together... 
  (2) deploy both in one server (Chula server or Google Cloud instance)... 
  (3) test check the cluster status and create pod from the frond-end, not back-end

1. Worker node integration progress and issues: Myanmar, Bhutan, Vietnam, India??

1. Other topics (optional): Kubeflow, intelligence path services, and other services.


## 1.1, 1.2 - Multi tenant portal
* edit api spec for pod creation - Kittipat
  - [PUT] to create a pod from yaml, userid, cluster
  - [GET] list pod from specific cluster

* finalize and update cluster name list ([Chula, UM, Gist]) - Kittipat

* cooperate token from Gist site - Natt
* create monthly report - Kittipat/ Natt
* follow contract - Pattarasak

* review https://github.com/OFTEIN-NET/OFTEIN-MultiTenantPortal/pull/10/files# - Kittipat


## 1.3 - Multi tenant portal : (3) test check the cluster status and create pod from the frond-end, not back-end

* Add functionality to create pods from frontend application 

* Update calls to backend application APIs to get deployed Pods and cluster info 

* Assist the test deployment of frontend application into Google cloud / VM with Chula team 


### 2 - Worker node integration progress and issues:


### 3 -Other topics: Kubeflow

* Setup: 
  - Create Cluster on gist-OpenStack Machine
  - Deploying with minikube on a single node (Next Multinode using worker nodes)
  - Installed KubeFlow

* MNIST Experiment
  - Launch Kubeflow Dashboard
  - Creatre Note Book on Kubeflow Assign resources
  - Running the MNIST on jupyter notebook

* Next Steps
  - Deploy the Model and test
  - dataset: Measurement/Monitoring Visibility




