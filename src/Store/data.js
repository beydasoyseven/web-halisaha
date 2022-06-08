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
            username:"beyda",
                name:"Beyda",
                surname:"Soyseven",
            password:"beyda",
            userId:1,
            isSuper: false,},
                {
            username:"admin",
            password:"admin",
                    name:"Admin",
                    surname:"Admin",
            userId:0,
            isSuper: true,
                }]
        },
    fields:{
        count:1,
        array:[
        {
            fieldID: 0,
            ownerID: 0,
            name: "Test Field",
            city: "İstanbul",
            county: "Küçükçekmece",
            neighbourhood: "",
            street: "",
            mainStreet: "",
            isFavorite:true,
            parts: [
                {
                    minGameTime: 15,
                    price: 10,
                }
            ]
        }
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
    booking:[

    ]
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

export default data;
