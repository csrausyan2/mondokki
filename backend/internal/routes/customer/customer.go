package customerRoutes

import (
	customerHandler "github.com/noieda/mondokki/internal/handlers/customerHandler"

	"github.com/gofiber/fiber/v2"
)

func SetupCustomerRoutes(router fiber.Router) {
	customer := router.Group("/customer")

	// CRUD for Booking
	customer.Post("/", customerHandler.CreateCustomer)

	customer.Get("/", customerHandler.GetCustomers)

	customer.Get("/:customerId", customerHandler.GetCustomer)

	customer.Put("/:customerId", customerHandler.UpdateCustomer)

	customer.Delete("/:customerId", customerHandler.DeleteCustomer)

}
