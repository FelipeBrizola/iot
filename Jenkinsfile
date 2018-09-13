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

                def customImage = docker.build("my-image:${env.BUILD_ID}")
                def dockername = "my-image:${env.BUILD_ID}"
                
                sshagent(['c5032b08-906b-4f95-8901-9c4f2119a2b3']) {

                    sh "docker save ${dockername} | gzip > ${dockername}-golden.tar.gz"

                    sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime"                    

                    sh "scp $WORKSPACE/${dockername}-golden.tar.gz felipe@gustavolaux.com.br:/home/felipe"

                    sh "gzcat ${dockername}-golden.tar.gz | docker load"

                    sh "docker run -i -t ${dockername}-golden /bin/bash"

                }

            }
        }
    }
}
