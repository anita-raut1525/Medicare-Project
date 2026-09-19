pipeline {

    agent any  

    environment {

      // ======================================
      //   Image Configuration 
     // =======================================

            IMAGE_TAG = "${BUILD_NUMBER}"

            BACKEND_IMAGE = "medicare-backend"

            FRONTEND_IMAGE = "medicare-frontend"

            NETWORK = "medicare-network"

// ========================================== 
// Jenkins Credentials 
// ==========================================

        GITHUB_CREDENTIALS_ID = "github-cred"

       DOCKER_CREDENTIALS = credentials('dockerhub-cred')

           
    }

// ==============================
//  1. CHECKOUT 
// ==============================
  stages {
         
stage ('Checkout') {

    steps {

        echo  "Checking out medicare source code"

        git (
         
         branch: 'main',
         credentialsId: "$GITHUB_CREDENTIALS_ID",
         url: 'https://github.com/anita-raut1525/Medicare-Project.git'

        )
    }
}

// ========================================== 
// 2. BACKEND BUILD 
// ==========================================

stage ('Backend Build') {

steps {

    dir ('backend') {

        sh 'mvn clean package -DskipTests'

    }
}

}

// ========================================== 
// 3. FRONTEND BUILD 
// ==========================================


stage ('Frontend Build') {

    steps {

        dir ('frontend') {

            sh 'npm install'
            sh 'npm run build'
        }
    }
}




 // ========================================== 
// 5. DOCKER LOGIN
// ==========================================

stage('Docker Login') {

            steps {

                echo 'Logging in to Docker Hub...'
                

                sh 'echo "$DOCKER_CREDENTIALS_PSW" | docker login -u "$DOCKER_CREDENTIALS_USR" --password-stdin'
        
            }
        }


 // ========================================== 
// 4. DOCKER BUILD
// ==========================================

stage ('Docker Build') {

    steps {
        sh 'docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} ./backend'

        sh 'docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} ./frontend'


    }
}


 // ========================================== 
// 6. DOCKER TAG
// ==========================================

stage ('Docker Tag') {

    steps {

        sh 'docker tag ${BACKEND_IMAGE}:${IMAGE_TAG} ${DOCKER_CREDENTIALS_USR}/${BACKEND_IMAGE}:${IMAGE_TAG}'

         sh 'docker tag ${FRONTEND_IMAGE}:${IMAGE_TAG} ${DOCKER_CREDENTIALS_USR}/${FRONTEND_IMAGE}:${IMAGE_TAG}'
    }
}


 // ========================================== 
// 7. DOCKER TAG
// ==========================================

stage('Docker Push') {

    steps {

        sh 'docker push ${DOCKER_CREDENTIALS_USR}/${BACKEND_IMAGE}:${IMAGE_TAG}'

         sh 'docker push ${DOCKER_CREDENTIALS_USR}/${FRONTEND_IMAGE}:${IMAGE_TAG}'
            
           }

        }

 // ========================================== 
// 8. VERIFY IMAGES
// ==========================================

stage ('Verify Images') {

    steps {

    echo "Verifying docker images"

    sh 'docker  images | grep medicare'
}
        
}

    }
}    


