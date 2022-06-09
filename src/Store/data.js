var data = {
    auth:{
        loginMessage:"",
        registerMessage:"",
        userID: "",
        userName: "",
        isSuper: false,
        isLoggedIn: false,
    },
    user :
        {
            userCount:2,
            array: [{
            username:"Beyda",
                name:"Beyda",
                surname:"Soyseven",
                email:"beydasoyseven@outlook.com",
            password:"1234",
            userId:1,
            isSuper: false,},
                {
            username:"admin",
            password:"1234",
                    name:"Admin",
                    surname:"Admin",
            userId:0,
            isSuper: true,
                }]
        },
    fields:{
        count:4,
        array:[
        {
            fieldID: 0,
            ownerID: 0,
            name: "Dinç Halı Sahası",
            city: "İstanbul",
            county: "Küçükçekmece",
            neighbourhood: "",
            street: "",
            mainStreet: "",
            isFavorite:true,
            minGameTime: 10,
            price: 15,
            parts: [
                {
                    minGameTime: 10,
                    price: 15,
                }
            ],
            openTime: 480,
            closeTime: 1200
        },
        {
            fieldID: 1,
            ownerID: 0,
            name: "Araz Halı Sahası",
            city: "İstanbul",
            county: "Küçükçekmece",
            neighbourhood: "",
            street: "",
            mainStreet: "",
            isFavorite:false,
            minGameTime: 15,
            price: 10,
            parts: [
                {
                    minGameTime: 15,
                    price: 10,
                }
            ],
            openTime: 480,
            closeTime: 1200
        },
        {
            fieldID: 2,
            ownerID: 0,
            name: "Kada Halı Sahası",
            city: "İstanbul",
            county: "Küçükçekmece",
            neighbourhood: "",
            street: "",
            mainStreet: "",
            isFavorite:false,
            minGameTime: 25,
            price: 30,
            parts: [
                {
                    minGameTime: 25,
                    price: 30,
                }
            ],
            openTime: 480,
            closeTime: 1200
        },
        {
            fieldID: 3,
            ownerID: 0,
            name: "Demir Halı Sahası",
            city: "Edirne",
            county: "Havsa",
            neighbourhood: "",
            street: "",
            mainStreet: "",
            isFavorite:true,
            minGameTime: 25,
            price: 30,
            parts: [
                {
                    minGameTime: 25,
                    price: 30,
                }
            ],
            openTime: 480,
            closeTime: 1200
        },
       
    ]},
    filter:{
        city:"",
        county:"",
        neighbourhood:"",
        street:"",
        mainStreet:"",
        minGameTime:0,
        maxPrice:0,
    },
    booking:{
        count:1,
        array:[
        {
            bookID: 0,
            fieldID: 0,
            userID: 1,
            times:[480,495],
            price:30
        }
    ]
    }
}

export const initialFieldData = {
    fieldID:0,
    ownerID: 0,
    name: "",
    city: "",
    county: "",
    neighbourhood: "",
    street: "",
    mainStreet: "",
    isFavorite:false,
    parts: [
        {
            minGameTime: 15,
            price: 10,
        }
    ]
}

export const initialFilterData = {
    city: "",
    county: "",
    neighbourhood: "",
    street: "",
    mainStreet: "",
    minGameTime: 0,
    maxPrice: 0,
}

export const initialUserData = {
        username:"",
        email:"",
        name:"",
        surname:"",
        userId:"",
        isSuper: false,
}

export const initialBookingData = {
    bookID: 0,
    fieldID: 0,
    userID: 0,
    times:[],
    price:0
}

export default data;
