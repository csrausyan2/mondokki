package accomodationRoutes

import (
	"github.com/gofiber/fiber/v2"
)

func SetupAccomodationRoutes(router fiber.Router) {
	accomodation := router.Group("/booking")

}
