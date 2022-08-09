pipeline {
  agent{ 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.24.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh 'npm i -D @playwright/test' 
        sh 'npx playwright install' 
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh 'npx playwright test'
      }
    }
  }
}