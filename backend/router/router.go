package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"

	bookingRoutes "github.com/noieda/mondokki/internal/routes/booking"
)

func SetupRoutes(app *fiber.App) {

	api := app.Group("/api", logger.New())

	bookingRoutes.SetupBookingRoutes(api)

}
