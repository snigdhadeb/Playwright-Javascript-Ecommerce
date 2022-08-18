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
            //below artifacts will only be stored, if trace, video and screenshots are 'on' and build is successful at least for one time, so for first time, its recommended to comment out the next line and build it.
            archiveArtifacts artifacts: 'playwright-report/data/*'
            archiveArtifacts artifacts: 'test-results/*/*.zip'
        }
      }
    }
  }
}