pipeline {
  agent{ 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.25.0-focal'
      args '--privileged'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh 'npm i -D @playwright/test' 
        sh 'npx playwright install'
      }
    }
    stage('test') {
      steps {
        sh 'npx playwright test'
      }
      post {
        always {
            archiveArtifacts artifacts: 'playwright-report/*'
            //archiveArtifacts artifacts: 'test-results/*'
        }
      }
    }
  }
}