package model

import (
	"github.com/google/uuid"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

// model for booking table.
type Booking struct {
	gorm.Model              // metadata fields to table
	ID            uuid.UUID `gorm:"type:uuid"`
	BookingCode   string
	DateStart     datatypes.Date
	DateFinish    datatypes.Date
	Duration      string
	PaymentAmount string
	Status        string
}

// model for customer
type Customer struct {
	gorm.Model
	BookingId     uuid.UUID `gorm:"type:uuid"`
	Booking       Booking   `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	CustomerName  string
	CustomerID    string
	CustomerEmail string
	CustomerPhone string
}

// model for accomodated room
type Room struct {
	gorm.Model
	RoomNumber string
	Type       string
	Capacity   string
	Price      string
}

type RoomUsed struct {
	RoomId    int
	Room      Room `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	BookingId int
	Booking   Booking `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Status    string
}
