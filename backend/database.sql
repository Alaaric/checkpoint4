-- Active: 1682342351805@@127.0.0.1@3306@fsp

CREATE TABLE users(
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   creation_date DATE DEFAULT (CURRENT_DATE),
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   email VARCHAR(100) NOT NULL UNIQUE,
   password VARCHAR(254) NOT NULL,
   isAdmin TINYINT DEFAULT 0
);

CREATE TABLE ads(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    creation_date DATE DEFAULT (CURRENT_DATE),
    description TEXT,
    name VARCHAR(100),
    age INT,
    photo VARCHAR(254)
);

CREATE TABLE users_ads(
    user_id INT,
    ad_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ad_id) REFERENCES ads(id)
);

CREATE TABLE messages(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    creation_date DATE DEFAULT (CURRENT_DATE),
    content TEXT,
    sender_id INT,
    reveiver_id INT,
    FOREIGN KEY (sender_id ) REFERENCES users(id),
    FOREIGN KEY (reveiver_id) REFERENCES users(id)
);

INSERT INTO users (firstname, lastname, email, password, isAdmin) VALUES
("place", "holder", "place@holder.com", "test", 1),
("jean", "michel", "jean@michel.com", "test", 0),
("lore", "m", "lore@m.com", "test", 0),
("toto", "toto", "toto@toto.com", "test", 0),
("test", "test", "test@test.com", "test", 0);

INSERT INTO ads (description, name, age, photo) VALUES 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.","chat 1", 5, "chat1.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 2", 4, "chat2.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 3", 2, "chat3.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 4", 1.5, "chat4.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 5", 2, "chat5.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 6", 1, "chat6.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 7", 3, "chat7.jpg");