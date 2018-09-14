    
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

                        sh "docker save my-image:$env.BUILD_ID | gzip > my-image:$env.BUILD_ID-golden.tar.gz"                      

                        sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime"                    

                        sh "scp $WORKSPACE/my-image:$env.BUILD_ID-golden.tar.gz felipe@gustavolaux.com.br:/home/felipe"  

                        sh "sudo docker load < my-image:$env.BUILD_ID-golden.tar.gz | ssh felipe@gustavolaux.com.br uptime"

                        sh "sudo docker run -it alpine:latest /bin/sh | ssh felipe@gustavolaux.com.br uptime"

                    }
                }
        }
    }
}

