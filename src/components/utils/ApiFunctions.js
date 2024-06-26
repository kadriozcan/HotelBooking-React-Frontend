import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8081"
})

// Adds a new room
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}

// Gets all rooms
export async function getAllRooms() {
    try {
        const response = await api.get("/rooms")
        return response.data
    } catch (e) {
        throw new Error("Error fetching all rooms!")
    }
}

// Gets all room types
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room-types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types!")
    }
}

// Deletes a room by id
export async function deleteRoom(roomId) {
    try {
        const response = await api.delete(`/rooms/${roomId}`)
        return response.data
    } catch (error) {
        throw new Error(`Error Deleting Room: ${error}`)
    }
}

// Updates the selected room by id
export async function updateRoom(roomId, roomData) {
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)
    const response = await api.put(`/rooms/${roomId}`, formData)
    return response
}

// Get room by its id
export async function getRoomById(roomId) {
    try {
        const response = await api.get(`/rooms/${roomId}`)
        return response.data
    } catch (e) {
        throw new Error(`Error Fetching Room: ${error.message}`)
    }
}

export async function bookRoom(booking) {
    try {
        const response = await api.post(`/bookings`, booking)
        return response.data
    } catch (e) {
        if (e.response && e.response.data) {
            throw new Error(e.response.data)
        } else {
            throw new Error(`Error booking room: ${e.message}`)
        }
    }
}

export async function getAllBookings() {
    try {
        const result = await api.get(`/bookings`)
        return result.data
    } catch (e) {
        throw new Error(`Error fetching bookings: ${e.message}`)
    }
}

export async function getBookingByConfirmationCode(code) {
    try {
        const result = await api.get(`/confirmation/${code}`)
        return result.data
    } catch (e) {
        if (e.response && e.response.data) {
            throw new Error(e.response.data)
        } else {
            throw new Error(`Error fetching booking: ${e.message}`)
        }
    }
}

export async function cancelBooking(bookingId) {
    try {
        const result = await api.delete(`/bookings/${bookingId}`)
        return result.data
    } catch (e) {
        throw new Error(`Error cancelling booking: ${e.message}`)
    }

}
