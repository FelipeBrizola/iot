node {
    def app

    try {

        stage('Build image') {
            checkout scm
            app = docker.build("felipebrizola/alias")

            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }

            sh 'npm test'
        }

        stage('Deploy') {

            app.inside {
                sh 'echo "Tests passed"'
            }
        }

        stage('Deploy') {
            sh 'docker run -it -p 3000:3000 felipebrizola/alias'
        }
    }

    catch (e) {

        echo 'ERROR'
        echo e
        throw e
    }

}