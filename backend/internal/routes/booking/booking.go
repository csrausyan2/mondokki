package bookingRoutes

import (
	bookingHandler "github.com/noieda/mondokki/internal/handlers/bookingHandler"

	"github.com/gofiber/fiber/v2"
)

func SetupBookingRoutes(router fiber.Router) {
	booking := router.Group("/booking")

	// CRUD for Booking
	booking.Post("/", bookingHandler.CreateBooking)

	booking.Get("/", bookingHandler.GetBookings)

	booking.Get("/:bookId", bookingHandler.GetBooking)

	booking.Put("/:bookId", bookingHandler.UpdateBooking)

	booking.Delete("/:bookId", bookingHandler.DeleteBooking)

}
