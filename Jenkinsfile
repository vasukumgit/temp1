pipeline {
    agent any

    tools {
        maven 'maven'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build (Maven)') {
            steps {
                dir('artigo-boas-praticas-medium-master') {
                    bat 'mvn -B -e clean test package'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'artigo-boas-praticas-medium-master\\target\\*.jar,artigo-boas-praticas-medium-master\\target\\*.war',
                             fingerprint: true,
                             allowEmptyArchive: true
        }
    }
}
