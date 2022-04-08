package accomodationHandler

import (

	"github.com/noieda/mondokki/database"
	"github.com/noieda/mondokki/internal/model"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func GetBooking(c *fiber.Ctx) error {
	db := database.DB
	var book model.Booking

	id := c.Params("bookId")
	db.Find(&book, "BookingId = ?", id)

	if book.ID = uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "no not found", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "single message found!", "data": book})

}