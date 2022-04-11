package database

import (
	"fmt"
	"log"
	"strconv"

	"github.com/noieda/mondokki/config"
	"github.com/noieda/mondokki/internal/model"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// declare variable for database
var DB *gorm.DB

// ConnectDB is used for connect to database
func ConnectDB() {

	var err error
	p := config.Config("DB_PORT")
	port, err := strconv.ParseUint(p, 10, 32)

	if err != nil {
		log.Println("error happened during parsing database port")
	}

	// connection to postgreSQL database
	dsn := fmt.Sprint(fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable", config.Config("DB_HOST"), port, config.Config("DB_USER"), config.Config("DB_PASSWORD"), config.Config("DB_NAME")))

	// connect to the db and initialize db variable
	DB, err = gorm.Open(postgres.Open(dsn))

	if err != nil {
		panic("failed connect to database")
	}

	fmt.Println("Connection opened to database")

	// migrate the database
	DB.AutoMigrate(&model.Booking{})
	DB.AutoMigrate(&model.Customer{})
	DB.AutoMigrate(&model.Room{})
	DB.AutoMigrate(&model.RoomUsed{})

	fmt.Println("Database Migrated")
}
