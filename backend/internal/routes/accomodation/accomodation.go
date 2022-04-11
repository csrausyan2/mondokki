package accomodationRoutes

import (
	accomodationHandler "github.com/noieda/mondokki/internal/handlers/accomodationHandler"

	"github.com/gofiber/fiber/v2"
)

func SetupAccomodationRoutes(router fiber.Router) {
	accomodation := router.Group("/booking")

	// CRUD for Booking
	accomodation.Post("/", accomodationHandler.CreateBooking)

	accomodation.Get("/", accomodationHandler.GetBookings)

	accomodation.Get("/:bookId", accomodationHandler.GetBooking)

	accomodation.Put("/:bookId", accomodationHandler.UpdateBooking)

	accomodation.Delete("/:bookId", accomodationHandler.DeleteBooking)

}
