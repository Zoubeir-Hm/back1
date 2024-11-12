pipeline {
    agent any

    stages {
        stage("Build Artefact") {
            steps {
                script {
                    // Clean and build the Maven project
                    sh "mvn clean install"
                }
            }
        }

        stage("Build Docker Images") {
            steps {
                script {
                    // Build Docker images using Docker Compose
                    sh "docker compose build"
                }
            }
        }

        stage("Test Vulnerabilities With SonarQube") {
            steps {
                script {
                    // Run SonarQube analysis
                    sh """
                        mvn clean verify sonar:sonar \
                        -Dsonar.projectKey=Spring1Test \
                        -Dsonar.projectName='Spring1Test' \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.token=squ_03720bec86e889a86de054b32a602e106b2129ba
                    """
                }
            }
        }



        

        

        stage("Deploy") {
            steps {
                script {
                    // Deploy services in detached mode
                    sh "docker compose up "
                }
            }
        }
    }

    post {
        always {
            // Ensure Docker containers are stopped after the pipeline execution
            echo "Cleaning up Docker containers..."
            sh "docker compose down || true"
        }
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}
