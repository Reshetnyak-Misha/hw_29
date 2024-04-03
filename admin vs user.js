function User(username, email) {
    this.username = username;
    this.email = email;
    this.loggedIn = false;
}


User.prototype.login = function(system) {
    if (system.users[this.username] && !this.loggedIn) {// Проверяем есть ли вообще что-то в username и false ли в логине
        system.addOnlineUser(this.username);
        this.loggedIn = true;
        console.log(`${this.username} вошел в систему.`);
        return true;
    }
    console.log(`${this.username} не может войти в систему.`);
    return false;
};

User.prototype.logout = function(system) {
    system.removeOnlineUser(this.username);
    this.loggedIn = false;
    console.log(`${this.username} вышел из системы.`);
};

Object.setPrototypeOf(User.prototype,System.prototype);

function System() {
    this.users = {};
    this.onlineUsers = {};
}



System.prototype.addUser = function(user) {
    if (!this.users[user.username]) {
        this.users[user.username] = user;
        return true;
    }
    return false;
};


System.prototype.removeUser = function(username) {
    if (this.users[username] && username !== 'Admin') {  // Не придумал ничего умнее чтоб понять что пользователь Админ
        delete this.users[username];
        delete this.onlineUsers[username];
        return true;
    }
    return false;
};

System.prototype.addOnlineUser = function(username) {
    this.onlineUsers[username] = true;
};

System.prototype.removeOnlineUser = function(username) {
    delete this.onlineUsers[username];
};


System.prototype.getOnlineUsers = function() {
    return Object.keys(this.onlineUsers);
};

System.prototype.getUser = function(username) {
    return this.users[username];  //
};

function Admin(username, email) {
    this.username = username;
    this.email = email;
}

Object.setPrototypeOf(Admin.prototype,new User());
Admin.prototype = new User();

Admin.prototype.removeUser = function(system, username) {
    if (this.loggedIn && username !== 'Admin') {
        if (system.removeUser(username)) {
            console.log(`Пользователь ${username} был удален.`);
            return true;
        }
        console.log(`Пользователь ${username} не найден.`);
        return false;
    }
    console.log('Нет прав для удаления пользователя.');
    return false;
};

const system = new System();

const user1 = new User('user1', 'sobaka1@gmail.com');
const user2 = new User('user2', 'sobaka2@gmail.com');
const admin = new Admin('Admin', 'god@gmail.com');


system.addUser(user1);
system.addUser(user2);
system.addUser(admin);


user1.login(system);
user2.login(system);
admin.login(system);

admin.removeUser(system, 'user1');
console.log('Онлайн пользователи:', system.getOnlineUsers());
console.log('Пользователь',system.getUser('Admin'))
user1.logout(system);
user2.logout(system);
admin.logout(system);
console.log('Пользователь',system.getUser('Admin'))