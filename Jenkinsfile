pipeline {
  agent any//{ 
    //docker { 
      //image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    //} 
  //}
  stages {
    stage('install playwright') {
      steps {
        bat '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}