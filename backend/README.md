docker run -d \
  --name medicare-backend \
  --network medicare-network \
  -p 8082:8082 \
  -e DB_URL="jdbc:mysql://medicare-mysql:3306/Medicare" \
  -e DB_USERNAME="medicareuser" \
  -e DB_PASSWORD="medicare123" \
  medicare-backend:v1.0