# syntax=docker/dockerfile:1
FROM golang:latest
WORKDIR /app
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY *.go ./
RUN go build -o /bmi-backend
EXPOSE 8080
CMD ["/bmi-backend"]
