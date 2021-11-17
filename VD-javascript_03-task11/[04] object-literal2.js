var hotel = {
    name : 'Minh',
    rooms : 120,
    booked: 77,
    checkAvailability : function (){
        return this.rooms-this.booked;
    }
};
var  elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoooms = document.getElementById('rooms');
elRoooms.textContent = hotel.checkAvailability();