# Playwright-Javascript-Ecommerce By Snigdhadeb Samanta
A playwright framework to automate an e-commerece site

 ## **** HOW TO RUN DOCKER IN A DOCKER **** ##

 ### In our case: Run Jenkins from docker and then pull Playwright image from jenkins pipeline ###

<ul>
  <li>Create a dockerfile in the project parent dir with the following command</li>
  
  ```
  FROM jenkins/jenkins
  USER root
  RUN curl -sSL https://get.docker.com/ | sh
  USER jenkins
  ```
  <li>Go to the dockerfile path and open CMD and build the image with below code:</li>
</ul>


```
docker build --tag jenkins-in-docker .
```

<ul>
  <li>Once the image is built, Run the below command:</li>
</ul>

```
docker run -u root --name jenkins-j -d -p 9091:8080 -p 50001:50000 --group-add 0 -v ssamanta_jenkins_home_vol:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkins-in-docker
```
<ul>
  <li>Now Open the given port (for me it is: localhost:9091), Login to Jenkins and config your Pipeline Job</li>
  <li>Use the Jenkins file from this repo</li>
  <li>Click on 'Build Now' to trigger your jenkins job</li>
</ul>

#### REMEMBER: Even if you set "headless:false" in the config file, You won't see any browser window displayed when running in the docker, unless you set up some kind of "remote desktop" in the docker.

## Where to find Mounted docker volumes in Windows?
Run the below command in file explorer.
```
\\wsl$\docker-desktop-data\data\docker\volumes
```

## How to generate/show Playwright Report in Jenkins? 
<ul>
  <li>Add ArchieveArtifacts in your pipeline and archieve 'Playwright-report'</li>
  <li>Go to Script Console and type the below command:</li>
 
 ```
 System.setProperty("hudson.model.DirectoryBrowserSupport.CSP"," ")
 ```
 
  <li>Now build your job and once done, click on the index.html report, it will show the report</li>
</ul>
