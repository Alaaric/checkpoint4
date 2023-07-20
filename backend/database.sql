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
    FOREIGN KEY (ad_id) REFERENCES ads(id) ON DELETE CASCADE
);

CREATE TABLE messages(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    creation_date DATE DEFAULT (CURRENT_DATE),
    content TEXT,
    sender_id INT,
    receiver_id INT,
    FOREIGN KEY (sender_id ) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

INSERT INTO users (firstname, lastname, email, password, isAdmin) VALUES
("place", "holder", "place@holder.com", "$argon2id$v=19$m=65536,t=3,p=4$G86ilaHqcIdB1K7i9aW7qw$MY6SjY1R4irmD8qIJCIAZ+R65DslW1Pdb6l7X/FYAxM", 1),
("jean", "michel", "jean@michel.com", "$argon2id$v=19$m=65536,t=3,p=4$G86ilaHqcIdB1K7i9aW7qw$MY6SjY1R4irmD8qIJCIAZ+R65DslW1Pdb6l7X/FYAxM", 0),
("lore", "m", "lore@m.com", "$argon2id$v=19$m=65536,t=3,p=4$G86ilaHqcIdB1K7i9aW7qw$MY6SjY1R4irmD8qIJCIAZ+R65DslW1Pdb6l7X/FYAxM", 0),
("toto", "toto", "toto@toto.com", "$argon2id$v=19$m=65536,t=3,p=4$G86ilaHqcIdB1K7i9aW7qw$MY6SjY1R4irmD8qIJCIAZ+R65DslW1Pdb6l7X/FYAxM", 0),
("test", "test", "test@test.com", "$argon2id$v=19$m=65536,t=3,p=4$G86ilaHqcIdB1K7i9aW7qw$MY6SjY1R4irmD8qIJCIAZ+R65DslW1Pdb6l7X/FYAxM", 0);

INSERT INTO ads (description, name, age, photo) VALUES 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.","chat 1", 5, "chat1.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 2", 4, "chat2.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 3", 2, "chat3.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 4", 1.5, "chat4.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 5", 2, "chat5.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 6", 1, "chat6.jpg"),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Senectus et netus et malesuada fames. Vitae justo eget magna fermentum iaculis eu non diam.", "chat 7", 3, "chat7.jpg");

INSERT INTO users_ads (user_id, ad_id) VALUES
(1,1),
(2,2),
(2,3),
(3,4),
(4,5),
(5,6),
(5,7);

INSERT INTO messages (content, sender_id, receiver_id) VALUES
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 1, 2),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 1, 4),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 2, 1),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 2, 3),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 3, 1),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 3, 4),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 3, 5),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 4, 2),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 4, 3),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 5, 3),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 5, 4),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Nulla aliquet enim tortor at auctor urna nunc.", 5, 1);
