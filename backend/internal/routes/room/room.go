package roomRoutes

import (
	roomHandler "github.com/noieda/mondokki/internal/handlers/roomHandler"

	"github.com/gofiber/fiber/v2"
)

func SetupRoomRoutes(router fiber.Router) {
	room := router.Group("/room")

	// CRUD for Room
	room.Post("/", roomHandler.CreateRoom)

	room.Get("/", roomHandler.GetRooms)

	room.Get("/:roomNumber", roomHandler.GetRoom)

	room.Put("/:roomNumber", roomHandler.UpdateRoom)

	room.Delete("/:roomNumber", roomHandler.DeleteRoom)
}
