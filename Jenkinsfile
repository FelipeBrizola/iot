    
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
               

                    sshagent(['c5032b08-906b-4f95-8901-9c4f2119a2b3']) {

                        sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime" 

                        sh "ssh -o StrictHostKeyChecking=no -t felipe@gustavolaux.com.br docker load < alpine:abc-golden.tar.gz"

                        sh "ssh -o StrictHostKeyChecking=no -t felipe@gustavolaux.com.br docker run -it alpine:latest /bin/sh"

                    }
                }
        }
    }
}

