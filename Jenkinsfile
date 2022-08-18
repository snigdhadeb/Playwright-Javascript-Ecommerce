pipeline {
  agent{ 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.25.0-focal'
      args '--privileged'
    } 
  }
  environment{
    JAVA_HOME="${tool 'openjdk_11_0_16'}"
    PATH="${JAVA_HOME}/bin:${PATH}"
  }
  stages {
    stage('install playwright') {
      steps {
        sh 'npm i -D @playwright/test' 
        sh 'npx playwright install'
      }
    }
    stage('install Allure Report') {
      steps {
        sh 'npm install -g allure-commandline --save-dev'
      }
    }
    stage('test') {
      steps {
        sh 'npx playwright test --reporter=line,allure-playwright'
        sh 'npx allure generate allure-results -o allure-report --clean && allure open allure-report'
      }
      post {
        always {
            archiveArtifacts artifacts: 'allure-results/*'
            archiveArtifacts artifacts: 'allure-report/*'
        }
      }
    }
  }
}