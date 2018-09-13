pipeline {
    
    agent {
        dockerfile true
    }
    
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deliver for production') {
            
            steps {
                sshagent(['903d2e8e-6358-4415-b2d6-2cc614822a92']) {
                    sh 'ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime'
                    sh "scp $WORKSPACE/iot felipe@gustavolaux.com.br:/home/felipe"
                }

            }
        }
    }
}
