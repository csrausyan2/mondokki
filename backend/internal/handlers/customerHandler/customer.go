package customerHandler

import (
	"github.com/noieda/mondokki/database"
	"github.com/noieda/mondokki/internal/model"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func CreateCustomer(c *fiber.Ctx) error {
	db := database.DB
	customer := new(model.Customer)

	err := c.BodyParser(customer)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "review your input"})
	}

	// add uuid to the customer
	customer.ID = uuid.New()
	err = db.Create(&customer).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "could not create customer"})
	}

	// add customer column to database
	return c.JSON(fiber.Map{"status": "success", "message": "created customer!", "data": customer})

}

func GetCustomer(c *fiber.Ctx) error {
	db := database.DB
	var customer model.Customer

	// fetch bookId parameter that will be used for finding specific booking
	id := c.Params("customerId")
	db.Find(&customer, "customer_id = ?", id)

	if customer.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "id for specific customer not found", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "single customer found!", "data": customer})

}

func GetCustomers(c *fiber.Ctx) error {
	db := database.DB
	var customers []model.Customer

	db.Find(&customers)
	if len(customers) == 0 {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "no customers found"})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "all books found", "data": customers})

}

func DeleteCustomer(c *fiber.Ctx) error {
	db := database.DB
	var customer model.Customer

	id := c.Params("customerId")
	db.Find(&customer, "id = ?", id)

	if customer.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "customer id not found", "data": nil})
	}

	err := db.Delete(&customer, "id = ?", id).Error

	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "cannot delete customer", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "customer has been deleted"})

}

func UpdateCustomer(c *fiber.Ctx) error {

	type UpdateCustomer struct {
		BookingId     uuid.UUID
		CustomerName  string
		CustomerID    string
		CustomerEmail string
		CustomerPhone string
	}

	db := database.DB
	var customer model.Customer

	// read params bookId and search the database
	id := c.Params("customerId")

	db.Find(&customer, "id = ?", id)
	if customer.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "customer id not found", "data": nil})
	}

	// store the body with updated data and return error if encountered error
	var updateCustomerData UpdateCustomer
	err := c.BodyParser(&updateCustomerData)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "cannot parse updateBookData"})
	}

	// update new Booking data
	if updateCustomerData.BookingId != uuid.Nil {
		customer.BookingId = updateCustomerData.BookingId
	}

	// update new Booking data
	if updateCustomerData.CustomerName != "" {
		customer.CustomerName = updateCustomerData.CustomerName
	}
	// update new Booking data
	if updateCustomerData.CustomerID != "" {
		customer.CustomerID = updateCustomerData.CustomerID
	}
	// update new Booking data
	if updateCustomerData.CustomerEmail != "" {
		customer.CustomerEmail = updateCustomerData.CustomerEmail
	}
	// update new Booking data
	if updateCustomerData.CustomerPhone != "" {
		customer.CustomerPhone = updateCustomerData.CustomerPhone
	}

	db.Save(&customer)
	return c.JSON(fiber.Map{"status": "success", "message": "customer data updated", "data": customer})

}
