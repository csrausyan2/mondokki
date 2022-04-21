package roomHandler

import (
	"github.com/noieda/mondokki/database"
	"github.com/noieda/mondokki/internal/model"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func CreateRoom(c *fiber.Ctx) error {
	db := database.DB
	room := new(model.Room)

	err := c.BodyParser(room)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "review your input"})
	}

	// add uuid to the customer
	room.ID = uuid.New()
	err = db.Create(&room).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "could not create room"})
	}

	// add room column to database
	return c.JSON(fiber.Map{"status": "success", "message": "created room!", "data": room})

}

func GetRoom(c *fiber.Ctx) error {
	db := database.DB
	var room model.Room

	// fetch bookId parameter that will be used for finding specific booking
	roomnumber := c.Params("roomNumber")
	db.Find(&room, "room_number = ?", roomnumber)

	if room.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "room number not found", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "single room found!", "data": room})

}

func GetRooms(c *fiber.Ctx) error {
	db := database.DB
	var rooms []model.Room

	db.Find(&rooms)
	if len(rooms) == 0 {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "no rooms found"})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "all rooms found", "data": rooms})

}

func DeleteRoom(c *fiber.Ctx) error {
	db := database.DB
	var room model.Room

	roomnumber := c.Params("roomNumber")
	db.Find(&room, "room_number = ?", roomnumber)

	if room.ID == uuid.Nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "room number not found", "data": nil})
	}

	err := db.Delete(&room, "room_number = ?", roomnumber).Error

	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "cannot delete room", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "room has been deleted"})

}

func UpdateRoom(c *fiber.Ctx) error {

	type UpdateRoom struct {
		RoomNumber string
		Type       string
		Capacity   string
		Price      string
	}

	db := database.DB
	var room model.Room

	roomnumber := c.Params("roomNumber")
	db.Find(&room, "room_number = ?", roomnumber)

	var updateRoomData UpdateRoom
	err := c.BodyParser(&updateRoomData)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "cannot parse updateRoomData"})
	}

	if updateRoomData.Type != "" {
		room.Type = updateRoomData.Type
	}

	if updateRoomData.Capacity != "" {
		room.Capacity = updateRoomData.Capacity
	}

	if updateRoomData.Type != "" {
		room.Price = updateRoomData.Price
	}

	db.Save(&room)
	return c.JSON(fiber.Map{"status": "success", "message": "room data updated", "data": room})

}
