var person = {
    firstName : "John",
    lastName  : "Wick",
    age       : 55,
    birthPlace: "Madras",
    dob		  : 19081960,
    contact : {
    	city: "Madras",
    	state:"Tamil Nadu",
    	pincode: 600001
    },
};

console.log(person["firstName"] + " " + person["lastName"] + " "+ person["age"] +" " + person["birthPlace"] + " " + person["dob"] + " " + person.contact["city"] + " " + person.contact["state"] + " " + person.contact["pincode"]);