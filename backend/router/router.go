package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"

	bookingRoutes "github.com/noieda/mondokki/internal/routes/booking"
	customerRoutes "github.com/noieda/mondokki/internal/routes/customer"
	roomRoutes "github.com/noieda/mondokki/internal/routes/room"
)

func SetupRoutes(app *fiber.App) {

	api := app.Group("/api", logger.New())

	bookingRoutes.SetupBookingRoutes(api)
	customerRoutes.SetupCustomerRoutes(api)
	roomRoutes.SetupRoomRoutes(api)
}
