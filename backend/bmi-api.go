package main

import (
	"math"
	"net/http"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

type Data struct {
	Weight float64 `json:"weight" binding:"required,gte=1"`
	Height float64 `json:"height" binding:"required,gte=1"`
	Gender    string  `json:"gender" binding:"required,len=1"`
	Age    int     `json:"age" binding:"required,gte=20,lt=80"`
}

type BMIResponse struct {
	Condition string  `json:"condition"`
	BMI       float64 `json:"bmi"`
}

func calculateBMI(context *gin.Context) {
	var bmiData Data
	var bmiResponse BMIResponse
	if err := context.ShouldBindBodyWith(&bmiData, binding.JSON); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}
	if strings.ToLower(bmiData.Gender) == "m" {
		bmiResponse.BMI, bmiResponse.Condition = calculateBMIForMen(bmiData.Age, bmiData.Height, bmiData.Weight)
	} else {
		bmiResponse.BMI, bmiResponse.Condition = calculateBMIForWomen(bmiData.Age, bmiData.Height, bmiData.Weight)
	}

	context.IndentedJSON(http.StatusOK, bmiResponse)
}

func calculateBMIForMen(age int, height float64, weight float64) (float64, string) {
	var condition string
	bmi := (weight / (height * height)) * 10000
	bmi = roundFloat(bmi, 1)
	if age >= 20 && age <= 40 {
		condition = checkConditionForMen20to40(bmi)
		return bmi, condition
	} else if age > 40 && age <= 60 {
		condition = checkConditionForMen41to60(bmi)
		return bmi, condition
	} else {
		condition = checkConditionForMen61to79(bmi)
		return bmi, condition
	}
}

func checkConditionForMen20to40(bmi float64) string {

	if bmi < 8 {
		return UNDERFAT
	} else if bmi >= 8 && bmi < 19 {
		return HEALTHY
	} else if bmi >= 19 && bmi <= 25 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func checkConditionForMen41to60(bmi float64) string {
	if bmi < 11 {
		return UNDERFAT
	} else if bmi >= 11 && bmi < 22 {
		return HEALTHY
	} else if bmi >= 22 && bmi <= 27 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func checkConditionForMen61to79(bmi float64) string {
	if bmi < 13 {
		return UNDERFAT
	} else if bmi >= 13 && bmi < 25 {
		return HEALTHY
	} else if bmi >= 25 && bmi <= 30 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func calculateBMIForWomen(age int, height float64, weight float64) (float64, string) {
	var condition string
	bmi := (weight / (height * height)) * 10000
	bmi = roundFloat(bmi, 1)
	if age >= 20 && age <= 40 {
		condition = checkConditionForWomen20to40(bmi)
		return bmi, condition
	} else if age > 40 && age <= 60 {
		condition = checkConditionForWomen41to60(bmi)
		return bmi, condition
	} else {
		condition = checkConditionForWomen61to79(bmi)
		return bmi, condition
	}
}

func checkConditionForWomen20to40(bmi float64) string {

	if bmi < 21 {
		return UNDERFAT
	} else if bmi >= 21 && bmi < 33 {
		return HEALTHY
	} else if bmi >= 33 && bmi <= 39 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func checkConditionForWomen41to60(bmi float64) string {
	if bmi < 23 {
		return UNDERFAT
	} else if bmi >= 23 && bmi < 35 {
		return HEALTHY
	} else if bmi >= 35 && bmi <= 40 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func checkConditionForWomen61to79(bmi float64) string {
	if bmi < 24 {
		return UNDERFAT
	} else if bmi >= 24 && bmi < 36 {
		return HEALTHY
	} else if bmi >= 36 && bmi <= 42 {
		return OVERWEIGHT
	} else {
		return OBESE
	}
}

func roundFloat(val float64, precision uint) float64 {
	ratio := math.Pow(10, float64(precision))
	return math.Round(val*ratio) / ratio
}

func main() {
	router := gin.Default()
	router.Use(cors.Default()) //to remove cors issue. allows any origin to connect
	router.POST("/bmi", calculateBMI)
	router.Run()
}
