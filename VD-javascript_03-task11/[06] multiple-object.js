function Hotel(name, roooms, booked){
    this.name = name;
    this.roooms = roooms;
    this.bookes = boooked;
    this.checkavailability = function (){
        return this.roooms-this.bookes;
    };
};
var quayHotel = new Hotel('Quay',40,25);
var parkHotel = new Hotel('Park',120,77);

var details1 = quayHotel.name + ' rooms';
details1 += quayHotel.checkavailability();
var elHotel1 = document.getElementById('hotel');

var details2 = quayHotel.name + ' rooms';
details2 += quayHotel.checkavailability();
var elHotel2 = document.getElementById('hotel');
elHotel2.textContent = details2;


