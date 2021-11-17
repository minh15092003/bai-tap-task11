var hotel = {
    name : 'MInh',
    rooms : 120 ,
    booked : 77,
};
hotel.qym =true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elPool.className = hotel.gym;