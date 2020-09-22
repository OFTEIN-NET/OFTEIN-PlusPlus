## OF@TEIN++ Playground: Players Discussion
* Date: September, 11 2020 
* Time: 5:30 – 6:30 PM KST
* Meeting Place: Online (via Skype)

### Participants:
*	GIST: 		Dr. Muhammad Usman, Muhammad Ahmad Rathore
*	UM/ID: 		Dr. Aris Cahyadi Risdianto, Satis Kumar
*	CHULA: 		Natt Visavarungroj, Kittipat

### Link for meeting minutes and slides
https://drive.google.com/drive/folders/1DJb0FrCh1p2YKMbW3pF77LDiPYvj0sZo?usp=sharing

### Action Items
*No	Task	Responsible	Status*
- [ ]	Draw and share software diagram with components that will work as implementation guidelines for the Project till April 2021. All players will contribute in the component development.	(Usman, Ahmad)	
- [ ]	Create a Github repository for [OF@TEIN++ project](https://github.com/OFTEIN-NET/OFTEIN-PlusPlus), where project-related discussion(s) will be maintained.  (Ahmad)
- [ ] Check simplified version of Rancher which is open source	(Kittipat, Natt)	
- [ ] Add contribution on concept diagram (left hand side ).	(UM/NCKU,NCU/Aris)
- [ ] In next meeting Ahmad, Usman will make diagram for GIST tower internal details in a separate slide. 	(Ahmad, Usman)
- [ ] From next month meeting every Tower Site will report plan and present result of playground Infrastructure. 	(All Players)
- [ ] Each tower is responsible for generating Daily visibility reports on the status/visibility of Edge Cluster and end-boxes. 	(All Players)

### Individual Discussion(s)
**Usman**
*	For multi-tenant portal it was suggested to apply OpenID connect, where one ID can be used to login at multiple clusters
*	There would be frontend (dashboard)/backend implementation for the portal. Design should be generic where all the implementation code is available on the GitHub.
*	Pod’s call are created through APIs

**Kittitpat**
*	Rancher software has a mechanism of multi-cluster support. Rancher Dashboard can create Pods through API calls. We may review Rancher to consider as candidate for our Project.

**Ahmad**
*	Besides multi-tennat portal as main tasks, we are interested in knowing the Playground resource status (nodes, pods, system metrics and application status) on regular basis from all sites. These measurements need to be stored in database, where it can be manipulated for analytics purposed.


