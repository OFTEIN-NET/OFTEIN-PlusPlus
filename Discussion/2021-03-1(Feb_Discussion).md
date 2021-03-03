## OF@TEIN++ Playground: Players & Student-fellows Discussion

* Date: March, 01 20201
* Time: 5:30 – 7:00 PM KST
* Meeting Place: Online (via Skype)
Link: https://join.skype.com/V4L03Dw93ZXW

### Participants:

*	GIST: 		Dr. Muhammad Usman, Muhammad Ahmad Rathore, Shahzeb, Talia
* Chula:    Natt, Kittipat,  Chanthan Hel, Khamxay
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
  (1) Demo for Front-end Portal: Provide mechanism for authentication and authorization of PODs..
  (2) Demo for Back-end Portal:
  (3) Future tasks

1.  KubeFlow deployment Results and future plan.

1. Action items for documentation of Final report


## 1.1 - Multi tenant portal: Demo for Front-End
* Multi-tenant portal (back-end) is now Deployed  in the Chula site. 
* Front-end will be mainly the one in the Public Cloud. Deployment of Back-end in the Chula Tower
https://ofteinplusplus.main.202.28.193.102.xip.io/#
* For the Front-end Demo mainly these items were demonstrated by Dr. Usman

  * Authentication: First Multi-Tenant Portal Login page is shown with Redeisgned user Interface with three options of login capability (from social network Authentication provider).
  * Dashboard for the user interface specific to the person is displayed. 
  * Dashboard: Menu items are functional (Cluster status, List Workload, New Workload, Logout)
  * Dashboard: Information for Kubernetes Clusters shows running status. 
  * Dashboard: Deployed workload Section now display Pods, Deployment and services. 
  * Dashboard: Created New Workload Section (Pod, Deployment, Service), where user can select YAML file and upload file for deployment
  * Added Delete functionality for the Deployed Workloads
 
## 1.2- Multi tenant portal :Demo for Back-end
* Update on Deployment V2, linked with the front-end task
* Authorization: Earlier every new user has to be added by Admin manually. In this version user ID is added to back-end.
* If the user is new back-end can notice
  
## 1.3 - Future tasks for Multi-tenant Portal

Work for Multi_tennant Portal
 * Check with back-end if returned user is authenticated in the back-end
 * Extend the cluster to Show quota information and remaining capacity. 
 * Services will be displayed once information is received from back-end
 * Work on the authorization part for the new user. Create a mechanism for Admin to check the user ID.

## 2- Sites Discussion:  Results from KubeFlow based ML job deployment 
* Results for Deployed Kubeflow based ML job using Measurement Data generated from SmartX Boxes
* Problem Statement: Network Flow time-series forecasting using Regression based deep learning techniques on the deployed cloud-native boxes
* Describe the Data prepration process
* Discuss the results: Comparing the four algorithms (LSTM, CNN, Bi-LSTM, GRU)
* Discuss the limitation and future work

## 3- Action items for documentation of Final report
 * Every Site will generate report from the technical Work 
 * Template for report will be shared to all.
 * Report submission by Mid of May (In case of Project extension till June 2021), otherwise report submission by End of March 2021.






