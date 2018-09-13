    
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

            sh "docker save my-image:$env.BUILD_ID -o myimage"

                    sh "tar czv my-image:$env.BUILD_ID-golden.tar.gz myimage"

                    sh "scp $WORKSPACE/my-image:$env.BUILD_ID-golden.tar.gz felipe@gustavolaux.com.br:/home/felipe"

                    sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime"

            steps {   
               
                    

                    sshagent(['c5032b08-906b-4f95-8901-9c4f2119a2b3']) {

                        sh "tar -xzvf my-image:$env.BUILD_ID-golden.tar.gz"

                        sh "sudo docker load my-image:$env.BUILD_ID-golden"

                        sh "sudo docker run -i -t my-image:$env.BUILD_ID-golden /bin/bash"

                    }
                }

            
        }
    }
}
