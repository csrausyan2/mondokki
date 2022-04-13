package bookingHandler

import (
	"fmt"
	"time"

	"github.com/noieda/mondokki/database"
	"github.com/noieda/mondokki/internal/model"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"gorm.io/datatypes"
)

func CreateBooking(c *fiber.Ctx) error {
	db := database.DB
	book := new(model.Booking)

	err := c.BodyParser(book)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "review your input"})
	}

	// add uuid to the booking
	book.ID = uuid.New()
	err = db.Create(&book).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "could not create booking"})
	}

	// add payment table to database
	return c.JSON(fiber.Map{"status": "success", "message": "created note!", "data": book})

}

func GetBooking(c *fiber.Ctx) error {
	db := database.DB
	var book model.Booking

	// fetch bookId parameter that will be used for finding specific booking
	id := c.Params("bookId")
	db.Find(&book, "booking_code = ?", id)

	if book.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "bookId not found", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "single message found!", "data": book})

}

func GetBookings(c *fiber.Ctx) error {
	db := database.DB
	var books []model.Booking

	db.Find(&books)
	if len(books) == 0 {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "no books found"})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "all books found", "data": books})

}

func DeleteBooking(c *fiber.Ctx) error {
	db := database.DB
	var book model.Booking

	id := c.Params("bookId")
	db.Find(&book, "booking_code = ?", id)

	if book.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "bookId not found", "data": nil})
	}

	err := db.Delete(&book, "booking_code = ?", id).Error

	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "cannot delete booking", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "booking has been deleted"})

}

func UpdateBooking(c *fiber.Ctx) error {

	type UpdateBook struct {
		BookingCode   string
		DateStart     string
		DateFinish    string
		PaymentAmount string
		Status        string
	}

	db := database.DB
	var book model.Booking

	// read params bookId and search the database
	id := c.Params("bookId")
	db.Find(&book, "booking_code = ?", id)
	if book.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "bookId not found", "data": nil})
	}

	// store the body with updated data and return error if encountered error
	var updateBookData UpdateBook
	err := c.BodyParser(&updateBookData)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "cannot parse updateBookData"})
	}

	// update new Booking data
	if updateBookData.BookingCode != "" {
		book.BookingCode = updateBookData.BookingCode
	}

	var layoutFormat = "2006-01-02T15:04:05Z"
	if updateBookData.DateStart != "" {

		t, err := time.Parse(layoutFormat, updateBookData.DateStart)

		if err != nil {
			return c.Status(500).JSON(fiber.Map{"status": "error", "message": "cannot parse updateBookData.DateStart"})
		}

		var ab2 = datatypes.Date(t)

		book.DateStart = ab2
		fmt.Printf("success update book.DateStart \n ")

	}

	if updateBookData.DateFinish != "" {

		t, err := time.Parse(layoutFormat, updateBookData.DateFinish)

		if err != nil {
			return c.Status(500).JSON(fiber.Map{"status": "error", "message": "cannot parse updateBookData.DateFinish"})
		}

		var ab2 = datatypes.Date(t)

		book.DateFinish = ab2
		fmt.Printf("success update book.DateFinish \n ")

	}

	if updateBookData.PaymentAmount != "" {
		book.PaymentAmount = updateBookData.PaymentAmount
	}
	if updateBookData.Status != "" {
		book.Status = updateBookData.Status
	}

	db.Save(&book)
	return c.JSON(fiber.Map{"status": "success", "message": "booking data updated", "data": book})

}
