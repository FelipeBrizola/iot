

node {

    try {

        stage('checkout') {
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/FelipeBrizola/iot']]])
        }

        stage('build') {
            echo 'BUILDING APP'
            sh 'npm install'
            echo 'BUILDING DONE'
        }

        stage('test') {
            echo 'TESTING APP'
            sh 'npm test'
            echo 'TESTING APP - DONE'
        }

        stage('deploy') {
            echo 'DEPLOYING APP'
            build '/iot-deploy'
            echo 'DEPLOYING APP - DONE'
        }

        stage('notify') {
            echo 'SEND EMAILS'
            step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'felipe_brizola@hotmail.com', sendToIndividuals: false])
            echo 'SEND EMAILS - DONE'
        }

    }
    catch (e) {

        echo 'ERROR'
        echo e
        throw e
    }
}