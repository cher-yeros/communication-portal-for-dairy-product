const { DataTypes } = require('sequelize');

const connection = require('../utils/DBConnection')

const User = connection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    address : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    login_status : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
});
const Product = connection.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price : {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

const Role = connection.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const WebChatBot = connection.define('WebChatBot', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    topic : {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

const Comment = connection.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body : {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

const Payment = connection.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ammount : {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
});

const Notification = connection.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type : {
        type: DataTypes.STRING,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    body : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Location = connection.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    latitude : {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longtude : {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

const Help = connection.define('Help', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    body : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.belongsToMany(Role, { through: 'UserRole' });
Role.belongsToMany(User, { through: 'UserRole' });

User.hasMany(Payment)

Location.hasOne(Product)

Comment.belongsTo(User)

module.exports.User = User;
module.exports.Role = Role;
module.exports.Product = Product;
module.exports.WebChatBot = WebChatBot;
module.exports.Comment = Comment;
module.exports.Payment = Payment;
module.exports.Notification = Notification;
module.exports.Location = Location;
module.exports.Help = Help;

//connection.sync({ force: true });

//module.exports = {
//    User,
//    Role,
//    WebChatBot,
//    Comment,
//    Payment,
//    Location,
//    Notification,    
//    Product,
//    Help 
//}