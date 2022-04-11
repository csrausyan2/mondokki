package main

import (
	"github.com/noieda/mondokki/database"
	"github.com/noieda/mondokki/router"

	"github.com/gofiber/fiber/v2"
)

func main() {

	// start new fiber app

	app := fiber.New()

	// app.Get("/", func(c *fiber.Ctx) error {
	// 	err := c.SendString("And the API IS UP :>")
	// 	return err
	// })

	database.ConnectDB()
	router.SetupRoutes(app)

	app.Listen(":3000")

}
