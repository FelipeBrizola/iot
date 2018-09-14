    
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

                        def save = "docker save alpine:${env.BUILD_ID}"
                        def zip = "gzip > alpine:${env.BUILD_ID}-golden.tar.gz" 

                        sh ' "${save}" | ${zip}'

                        sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime" 

                        sh "scp $WORKSPACE/alpine:$env.BUILD_ID-golden.tar.gz felipe@gustavolaux.com.br:/home/felipe"  

                        sh 'ssh -o StrictHostKeyChecking=no -t felipe@gustavolaux.com.br "docker load < alpine:\$env.BUILD_ID.tar.gz" '

                        sh 'ssh -o StrictHostKeyChecking=no -t felipe@gustavolaux.com.br "docker run -itd alpine:\$env.BUILD_ID" '

                    }
                }
        }
    }
}

