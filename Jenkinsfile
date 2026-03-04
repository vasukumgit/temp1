pipeline {
  agent any

  tools {
    maven 'maven'
    // jdk 'jdk17'   // enable if you configured JDK tool
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Show files') {
      steps { bat 'dir' }
    }

    stage('Build') {
      steps {
        bat 'mvn -B -e clean test package'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'target\\*.jar,target\\*.war', fingerprint: true, allowEmptyArchive: true
    }
  }
}
