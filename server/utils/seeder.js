const faker = require('faker');
const { User, Role, Product, Payment, Comment, Notification, WebChatBot, Help, Location } = require('../models/schema');

const roles = [
    {
        name: "admin"
    },
    {
        name: "seller"
    },
    {
        name: "buyer"
    }
]

roles.forEach( async(role) => {
    await Role.create(role)
});

var users = []
for (let i = 0; i < 300; i++) {
    var user = {
        "name": faker.name.findName(),
        "phone": "9"+faker.phone.phoneNumber("!#######"),
        "password": "password",
        "email" : faker.internet.email(),
        "address" : faker.address.streetName(),
        "login_status" : faker.datatype.boolean()
    }
    users.push(user)
}

users.forEach(async(emp) => {
    let users = await User.create(emp)

    let role1 = await Role.findOne({
        where: {
            name: "seller"
        }
    })
    
    let role2 = await Role.findOne({
        where: {
            name: "buyer"
        }
    })

    users.addRole(faker.helpers.randomize([role1,role2]), { through: { selfGranted: false } });
    
});

var products = []

for (let i = 0; i < 500; i++) {
    var product = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        quantity: faker.datatype.number(75),
        price: faker.datatype.float({min: 100, max: 50000 })
    }

    products.push(product)
    
}
products.forEach(async(product) => {
    await Product.create(product)
});

var botchats = []

for (let i = 0; i < 500; i++) {
    var botchat = {
        topic: faker.random.words(4),
    }

    botchats.push(botchat)
    
}
botchats.forEach(async(botchat) => {
    await WebChatBot.create(botchat)
});

var comments = []

for (let i = 0; i < 80; i++) {
    var comment = {
        body: faker.commerce.productDescription()
    }

    comments.push(comment)
    
}
comments.forEach(async(comment) => {
    await Comment.create(comment)
});

var locations = []

for (let i = 0; i < 80; i++) {
    var location = {
        longtude: faker.datatype.float({ min: 10, max: 99, precision: 0.000001}),
        latitude: faker.datatype.float({ min: 10, max: 99, precision: 0.000001})
    }

    locations.push(location)
    
}
locations.forEach(async(location) => {
    await Location.create(location)
});

var payments = []

for (let i = 0; i < 80; i++) {
    var payment = {
        ammount: faker.finance.amount(100, 10000, 5),
    }

    payments.push(payment)
    
}
payments.forEach(async(payment) => {
    await Payment.create(payment)
});

var nots = []

for (let i = 0; i < 80; i++) {
    var not = {
        type: faker.finance.transactionType(),
        title: faker.lorem.text(),
        body: faker.lorem.sentences()
    }

    nots.push(not)
    
}
nots.forEach(async(not) => {
    await Notification.create(not)
});
