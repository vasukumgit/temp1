pipeline {
    agent any

    tools {
        maven 'maven'   // Jenkins: Manage Jenkins > Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                bat 'mvn -B clean test package'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'target\\*.jar,target\\*.war', fingerprint: true
        }
    }
}