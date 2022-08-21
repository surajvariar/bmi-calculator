# BMI Calculator- Frontend

## Steps to start the frontend in local
Run the following commands to start the app in local
```sh
npm i
npm start
```


## Steps to run docker 
Frontend can be run on docker by following the below steps
``` sh
docker build -t <user_name>/bmi-frontend .
docker run -d -p 3000:3000 <user_name>/bmi-backend
```    