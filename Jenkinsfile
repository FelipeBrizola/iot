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
            sh './deploy.sh'
        }
    }

    catch (e) {

        echo 'ERROR'
        echo e
        throw e
    }

}