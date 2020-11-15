
<h1>
<p align="center">
<strong> OFTEIN++ Backend Federation </strong>
<p align="center">
</h1> 

<h3>
<p align="center">
<strong> Proposed Design Architect </strong>
<p align="center">
</h3> 
 
<p align="center">
  <img width="863" height="563" src="/Demo/proposed pics.PNG"/>
</p>


&nbsp;  In our design, we need kubernetes token (please read instruction about K8S token) to launch workloads on the clusters 


<h3>
<p align="center">
<strong> Getting Token.yml file  </strong>
</p>
</h3>
 
&nbsp; In order to get K8S Token 

$ kubectl config view 

this command will show K8S token (example .yml below)

<strong> Note : the token.yml contains sensitive information (ie. K8S token) </strong>

<strong> please don't share file on github </strong>

<p align="center">
  <img width="863" height="580" src="/Demo/example_yaml.PNG"/>
</p>

<h3>
<p align="center">
<strong> How to use Backend federation api </strong>
</p>
</h3>

&nbsp; in the /demo path

&nbsp;  1. extract yaml files (ie. thai.yaml, Malaysia.yaml and korea.yaml)

&nbsp;  2. install necessary libraries --> to install libraries
            
            $ npm install  

&nbsp;  3. run server (in our demo we ran it locally) --> to run server :
    
            $ node index.js 

&nbsp;  4. test it's working, or not ? 
        
        in internet browser just type url : http://localhost:3000/

        this should show you Hello world!

<p align="center">
  <img width="863" height="80" src="/Demo/hello_world.PNG"/>
</p>
&nbsp;
        5. to launch workload in each cluster 
        for example : we tried to launch k8s workload on Thailand cluster
    
        just use url : http://localhost:3000/thai/create in browser

        if we take a look at Thailand Cluster 
<p align="center">
  <img width="863" height="480" src="/Demo/success.PNG"/>
</p>

&nbsp;  we can see that workload was created 







 



