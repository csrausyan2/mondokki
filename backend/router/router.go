package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"

	accomodationRoutes "github.com/noieda/mondokki/internal/routes/note"
)

func SetupRoutes(app *fiber.App) {

	api := app.Group("/api", logger.New())

	accomodationRoutes.SetupNoteRoutes(api)

}
