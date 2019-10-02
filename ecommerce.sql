DROP DATABASE IF EXISTS products_db;
-- creates database used in this project 
CREATE DATABASE products_db;
USE products_db;

-- products table
CREATE TABLE products(
	product_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    product_img VARCHAR(255) NOT NULL,
    price_id INT,
    FOREIGN KEY (prices_id) REFERENCES prices(prices_id) ON DELETE CASCADE
);
-- products seed data
INSERT INTO products(product_name, product_description, category, product_img)
	VALUES 	("Pages of Petals Daisy Notebook", "Take notes in style with this cute little daisy shaped notebook!", "organization", "daisy-notebook.jpg"),
	("Creative Die Cut Washi Tapes", "Let your imagination run free with these gorgeous washi tapes","type", "floral-washi.png"),
	("Skydue Floral File Accordion", "Floral file accordian useful for organizing documents","organization","folder.jpg"),
    ("Stabilo Boss Pastel Highlighter 6-pack", "Pastel Highlighters that are great for taking notes with soft tones", "highlighters", "stabilo.jpg"),
    ("LE PEN 10-PACK - RAINBOW", "These extra fine tip rainbow pens are perfect for doodling or taking notes in your planner","pens","lepen.jpg"),
    ("Zebra Mildliner 15ct Dual-tip Markers","These cult classic pastel highlighters are perfect for taking notes without hurting your eyes","highlighters","mildliners.jpg"),
    ( "Large 17-Month Academic Planner", "Organize your entire life with this 17 month planner","organization","planner.jpg"),
    ("Chinatown Market X Smiley UO Exclusive Smiley Notebook","Write happy thoughts in this smiley-patterned notebook, part of UO’s exclusive collaboration with Chinatown Market and Smiley","organization","smileyface.jpeg"),
    ("My Neighbor Totoro Gel Ink Pen","Ink Pens with the iconic Ghibli character on top","pens","totoro.jpg"),
    ("10 Psc Candy Color Decorative Adhesive Tapes","Colorful washi tapes useful for decoration or marking pages!","tape", "rainbow-washi.jpg");
    
-- prices table
CREATE TABLE prices(
	price_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    price DECIMAL(10, 2),
    product_id INT,
	FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- prices seed data
INSERT INTO prices(price, product_id)
	VALUE(13.99, 1), (2.99, 2), (7.99, 3), (27.99, 4), (17.99, 5), (16.99, 6), (31.99, 7), (15.99, 8), (2.99, 9), (12.99, 10);

-- contacts table
CREATE TABLE contacts(
	contact_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    email VARCHAR(255) NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- contact seed data
INSERT INTO contacts (first_name, last_name, email, product_id) 
VALUES 	('Maure', 'Edes', 'medes0@huffingtonpost.com', 5),
		('Livvie', 'Ciobutaro', 'lciobutaro1@netscape.com', 5),
        ('Norma', 'Heffernon', 'nheffernon2@outlook.com', 1),
        ('Rivalee', 'Lyokhin', 'rlyokhin3@ucla.edu', 2),
        ('Marijo', 'Chatres', 'mchatres4@flickr.com', 5),
        ('Yevette', 'Cloney', 'ycloney5@bing.com', 4),
        ('Melody', 'Cowl', 'mcowl6@angelfire.com', 10),
        ('Gordon', 'Lubeck', 'glubeck7@gmail.com', 9),
        ('Monroe', 'Gobeau', 'mgobeau8@engadget.com', 8),
        ('Marcile', 'Farman', 'mfarman9@outlook.com', 5);