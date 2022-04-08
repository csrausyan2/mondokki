package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

// Config is used for getting variable from environment file
func Config(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Print("Error when loading .env file!")
	}

	// return the value from environment file
	return os.Getenv(key)
}
