package model

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

// model for booking table.
type Booking struct {
	gorm.Model              // metadata fields to table
	ID            uuid.UUID `gorm:"type:uuid"`
	BookingId     string
	CustomerName  string
	CustomerID    string
	CustomerEmail string
	CustomerPhone string
	Room          Room
	DateStart     string
	DateFinish    string
	Duration      string
	Status        string
}

type Payment struct {
	BookingId     Booking
	PaymentAmount string
	PaymentStatus string
}

// model for accomodated room
type Room struct {
	gorm.model // metadata fields to table
	RoomID     int
	RoomNumber string
	Type       string
	Capacity   string
	Price      string
}
