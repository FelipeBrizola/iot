    
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

                        sh "sudo docker save my-image:$env.BUILD_ID | sudo ssh -o StrictHostKeyChecking=no -C felipe@gustavolaux.com.br docker load"

                        // sh "docker save my-image:$env.BUILD_ID | gzip > my-image:$env.BUILD_ID-golden.tar.gz"

                        // sh "pwd"

                        // sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br uptime"                    

                        // sh "scp $WORKSPACE/my-image:$env.BUILD_ID-golden.tar.gz felipe@gustavolaux.com.br:/home/felipe"

                        // sh "pwd"

                        // sh "ssh -o StrictHostKeyChecking=no felipe@gustavolaux.com.br tar -xzvf my-image:$env.BUILD_ID-golden.tar.gz"

                        // sh "pwd"

                        // sh "sudo docker load my-image:$env.BUILD_ID-golden"

                        // sh "sudo docker run -i -t my-image:$env.BUILD_ID-golden /bin/bash"

                    }
                }

            
        }
    }
}
