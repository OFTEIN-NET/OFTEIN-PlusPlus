## OF@TEIN++ Playground: Players Discussion

* Date: November, 16 2020 
* Time: 5:30 – 7:00 PM KST
* Meeting Place: Online (via Skype)

### Participants:

*	GIST: 		Dr. Muhammad Usman, Muhammad Ahmad Rathore, Shahzeb
*	UM/ID: 		Dr. Aris Cahyadi Risdianto, Satis Kumar
* NCU/NCKU: Dr. PangWei
*	CHULA: 		Natt Visavarungroj, Kittipat


### Link for meeting minutes and slides
https://drive.google.com/drive/folders/1DJb0FrCh1p2YKMbW3pF77LDiPYvj0sZo?usp=sharing

## Discussion Topics


1. Discussion from Last Meeting (Ambassadors and Players meeting on 2020/11/04)
1. Action Items
1. Linking the front-end and back-end,
1. Share the kubectl token between Chula, GIST, and UM 
1. Github repo. 
1.  API Server for Multi Tenant Portal



## 1 - Discussion from last Ambassadors and Players Meeting

* For multi-portal deployment we will temporarily use Chula Site as host.

* Provide proper naming for the Project and modules (e.g. demo).

* Main concern is how to pass information from front-end and link it with the back-end.

* As part of Integrated design it is suggested that both Sites update the design of “Multi-tenant Portal Design” and incorporate the changes. Alternatively add own design.

* For front-end access a domain name is required.

* OF@TEIN++ banner will be finalized.

### 2 - Action Items

- [X] Ahmad, Satis, natt work on generating the token following the guideline steps and then share the respective tokens. 
    - [X] Chula Site
    - [X] Um Site
    - [X] GISt Site
- [ ] Aris, Usman and Kittitpat can work on arranging the code in the repository.
- [X] Deploy and test the back-end service following the public cloud demo.
- [X] In the Repo each Sites upload their development in seperate places with proper naming
- [ ] Make a mechanism to Display the status Connection for the cluster and regularly check. Optional:" get only active cluster. Gather other neccessary informations
- [ ] Merge the two Repos and share the merge results (Usman)
- [ ] For running clusters use one physical machine with three VM's(UM)

### 2.1 - Individual discussion

* Natt/Kittitpat
Describes the guidelines on token generation process. Demonstrate creating and deploying nginx in the UM Cluster. From the back-end pods can be deployed or deleted.On the Google Cloud Plaform back-end API is tested and service settings are configured. 

*Dr. Aris
Referred to the Action items. 

Dr. Usman/ Ahmad
Refeered to the Action items. GIst site will generate the tokens and share with the Chula team.
Satis
 Demonstrate and Describes the token generating Process in details.

## 3 - Linking/Integrating the front-end and back-end

- Should start by checking the connection status of Cluster from the back-end with a specific message. 
- Make a mechanism to Display the status Connection for the cluster and regularly check. Gather other neccessary informations
- In the Yaml descriptors add the back-end add labels to identify the authentication of Pods. 
- In the OF@TEIN++ github repo code backend and frontend app have been updated.


## 4 - Share the kubectl token between Chula, GIST, and UM 

Guidelines for sharing the token has been updated at the given link
https://github.com/NattVi/OFTEIN-PlusPlus/tree/master/ProcedureFederation(Backend)

Sites at Chula, UM and GIST have have ganerated and shared the tokens with Natt. 


## 5 - Github repo. 

* OFTEIN Multi Tenant Portal
This repository runs automated build to create docker images for Multi Tenant Portal Frontend and Backend Apps.
url: https://github.com/OFTEIN-NET/OFTEIN-MultiTenantPortal

*Github repo for front-end maintained by Usman, url: https://github.com/smartx-usman/multi-tenant-portal-frontend

* Github repo for back-end  mantained by Natt/Kittitpat, url: https://github.com/NattVi/OFTEIN-PlusPlus/tree/master/Demo


# API Server for Multi Tenant Portal
* https://oftein-f5oec474zq-as.a.run.app/demo/list
* https://oftein-f5oec474zq-as.a.run.app/demo/delete
* https://oftein-f5oec474zq-as.a.run.app/demo/create





