pipeline {
    agent any

    stages {
        stage("Build artefact") {
            steps {
                script {
                    sh "mvn clean install"
                }
            }
        }
        stage("Build Docker images") {
            steps {
                script {
                    // Build Docker image
                    sh "docker compose build"
                }
            }
        }



        stage("Test") {
            steps {
                script {
                    echo "This is the test stag"
                }
            }
        }
        stage("Deploy") {
            steps {
                script {
                    sh "docker compose up"
                }
            }
        }
    }
}
