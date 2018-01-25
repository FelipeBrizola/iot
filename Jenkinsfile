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

        stage('Test Image') {

            app.inside {
                sh 'echo "Tests passed"'
            }
        }

        stage('Deploy') {
            sh './deploy.sh'
        }
    }

    catch (e) {

        echo 'ERROR'
        echo e
        throw e
    }

}