pipeline {
    agent any

    environment {
        DOCKER_CRED = credentials('dockerhub-medicare')
        BACKEND_IMAGE  = 'medicare-backend'
        FRONTEND_IMAGE = 'medicare-frontend'
        IMAGE_TAG      = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-medicare',
                    url: 'https://github.com/anita-raut1525/Medicare-project.git'
            }
        }

        stage('Maven Build') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE:$IMAGE_TAG ./backend'
                sh 'docker build -t $FRONTEND_IMAGE:$IMAGE_TAG ./frontend'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'echo "$DOCKER_CRED_PSW" | docker login -u "$DOCKER_CRED_USR" --password-stdin'
            }
        }

        stage('Docker Tag') {
            steps {
                sh 'docker tag $BACKEND_IMAGE:$IMAGE_TAG $DOCKER_CRED_USR/$BACKEND_IMAGE:$IMAGE_TAG'
                sh 'docker tag $FRONTEND_IMAGE:$IMAGE_TAG $DOCKER_CRED_USR/$FRONTEND_IMAGE:$IMAGE_TAG'
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $DOCKER_CRED_USR/$BACKEND_IMAGE:$IMAGE_TAG'
                sh 'docker push $DOCKER_CRED_USR/$FRONTEND_IMAGE:$IMAGE_TAG'
            }
        }
    }
}