# =========================
# Stage 1: Build
# =========================
 
# Java/JDK ka distribution = java development kit 

FROM maven:3.9.12-eclipse-temurin-21 AS builder

WORKDIR /app

#  COPY pom.xml /app/pom.xml = same as below command, . = current directory inside container

COPY pom.xml . 

RUN mvn dependency:go-offline 

# COPY src /app/src =same as below command

COPY src ./src

# mvn clean =  Remove old build files, mvn package = Application compile and make JAR package  ,dont run  Tests, directly build/package .

# mvn clean package = also Maven tests execute

RUN mvn clean package -DskipTests


# =========================
# Stage 2: Runtime
# =========================

FROM  eclipse-temurin:21-jre

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082

CMD ["java", "-jar", "app.jar"]


# Backend run
# mvn spring-boot:run