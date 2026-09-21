# for database
*/
docker run -d \
  --name medicare-mysql \
  --network medicare-network \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=medicare \
  -e MYSQL_USER=medicareuser \
  -e MYSQL_PASSWORD=medicare123 \
  -p 3306:3306 \
  mysql:8.0
  /*

  docker run -d \
  --name medicare-mysql \
  --network medicare-network \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=medicare \
  -e MYSQL_USER=medicareuser \
  -e MYSQL_PASSWORD=medicare123 \
  -p 3306:3306 \
  mysql:8.0

# for backend

docker run -d \
  --name medicare-backend \
  --network medicare-network \
  -e DB_URL="jdbc:mysql://medicare-mysql:3306/medicare" \
  -e DB_USERNAME="medicareuser" \
  -e DB_PASSWORD="medicare123" \
  -p 8082:8082 \
  medicare-backend:v1

# for frontend
docker run -d \
  --name medicare-frontend \
  --network medicare-network \
  -p 80:80 \
  medicare-frontend:v1

  # error find

Sabse pehle ERROR, FATAL, Exception, Caused by wali lines dekho.
