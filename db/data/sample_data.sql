-- Inserting user_accounts
INSERT INTO user_account (username, password, is_admin) VALUES ('admin', 'admin', TRUE);
INSERT INTO user_account (username, password, is_admin) VALUES ('george', 'georgepassword', FALSE);
INSERT INTO user_account (username, password, is_admin) VALUES ('hannah', 'hannahpassword', FALSE);
INSERT INTO user_account (username, password, is_admin) VALUES ('ivan', 'ivanpassword', FALSE);
INSERT INTO user_account (username, password, is_admin) VALUES ('julia', 'juliapassword', FALSE);
INSERT INTO user_account (username, password, is_admin) VALUES ('kate', 'katepassword', FALSE);


-- Inserting cat records
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Max', 3, 'george', 'Tabby', '@max_thetabby');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Sasha', 1, 'hannah', 'Scottish Fold', '@sasha_curledup');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Tiger', 2, NULL, 'Bengal', '@tiger_adventures');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Bella', 2, 'ivan', 'Persian', '@bella_elegance');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Oscar', 1, NULL, 'Russian Blue', '@oscar_serenity');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Loki', 2, NULL, 'Sphynx', '@loki_barebeauty');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Coco', 3, NULL, 'Ragamuffin', '@coco_cuddles');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Simba', 1, NULL, 'Abyssinian', '@simba_explorer');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Milo', 5, 'julia', 'Himalayan', '@milo_majestic');
INSERT INTO cat (name, age, owner, breed, instagram) VALUES ('Nala', 2, 'kate', 'Munchkin', '@nala_shortstuff');