node {
    def app

    try {

        stage('Build image') {
            checkout scm

            sh 'npm install'

            app = docker.build("felipebrizola/alias")

            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }

        }

        stage('Test Image') {

            app.inside {
                sh 'echo "Tests passed"'
            }
        }

        stage('Deploy') {
            docker.withServer('tcp://104.41.29.178:22', 'station-credentials') {
                docker.image('felipebrizola/alias:latest').withRun('-p 3000:3000') {
                    sh 'echo "RUN"'
                }
            }
        }
    }

    catch (e) {

        echo 'ERROR'
        echo e
        throw e
    }

}