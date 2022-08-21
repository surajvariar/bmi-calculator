# BMI Calculator- Backend

## Steps to start the backend in local
- run the command ```go mod download``` to dowload the dependencies 
- after the dependencies are downloaded, run the command ```go run .``` to start the server

## Steps to run docker 
Backend can be run on docker by following the below steps
``` sh
docker build -t <user_name>/bmi-backend .
docker run -d -p 8080:8080 <user_name>/bmi-backend
```