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
        sh 'apt-get install xvfb'
        sh 'xvfb-run -a --server-args="-screen 0 1280x800x24 -ac -nolisten tcp -dpi 96 +extension RANDR" npx playwright test'
      }
      post {
        always {
            archiveArtifacts artifacts: 'playwright-report/*'
            //below artifacts will only be stored, if trace, video and screenshots are 'on' and build is
            //successful at least for one time, so for the first time, its recommended to 
            //turn on video/trace/screenshots in the config file and then comment out the next two lines and build it.
            //for the next run uncomment the two lines
            archiveArtifacts artifacts: 'playwright-report/data/*'
            archiveArtifacts artifacts: 'test-results/*/*.zip'
        }
      }
    }
  }
}