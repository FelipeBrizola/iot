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
            when {
                branch 'master' 
            }
            steps {
                def dest_dir = './'
                sshagent(['903d2e8e-6358-4415-b2d6-2cc614822a92']) {
                    sh "scp $WORKSPACE/iot felipe@gustavolaux:${dest_dir}"
                }

            }
        }
    }
}
