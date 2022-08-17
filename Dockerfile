FROM jenkins/jenkins
USER root
RUN curl -sSL https://get.docker.com/ | sh
USER jenkins