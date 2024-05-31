-- CREAZIONE TABELLA UTENTI
CREATE TABLE IF NOT EXISTS UTENTI (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    data_di_nascita DATE NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- DATI PER TABELLA: UTENTI
INSERT INTO UTENTI (username, nome, cognome, data_di_nascita, email, password) VALUES
('user1', 'Mario', 'Rossi', '1990-05-15', 'mario@email.com', 'password1'),
('user2', 'Luca', 'Bianchi', '1985-08-20', 'luca@email.com', 'password2'),
('user3', 'Giulia', 'Verdi', '1992-04-10', 'giulia@email.com', 'password3'),
('user4', 'Anna', 'Neri', '1988-11-25', 'anna@email.com', 'password4'),
('user5', 'Giovanni', 'Gialli', '1995-07-03', 'giovanni@email.com', 'password5'),
('user6', 'Sara', 'Blu', '1993-01-30', 'sara@email.com', 'password6'),
('user7', 'Marco', 'Marrone', '1986-09-18', 'marco@email.com', 'password7'),
('user8', 'Chiara', 'Rosa', '1991-03-05', 'chiara@email.com', 'password8'),
('user9', 'Alessandro', 'Viola', '1987-06-12', 'alessandro@email.com', 'password9'),
('user10', 'Martina', 'Arancione', '1994-02-22', 'martina@email.com', 'password10'),
('user11', 'Simone', 'Celeste', '1989-10-08', 'simone@email.com', 'password11'),
('user12', 'Elena', 'Magenta', '1996-06-17', 'elena@email.com', 'password12'),
('user13', 'Davide', 'Ciano', '1984-12-29', 'davide@email.com', 'password13'),
('user14', 'Valentina', 'Turchese', '1997-08-07', 'valentina@email.com', 'password14'),
('user15', 'Francesca', 'Indaco', '1990-04-13', 'francesca@email.com', 'password15'),
('user16', 'Paolo', 'Bianco', '1987-11-01', 'paolo@email.com', 'password16'),
('user17', 'Roberta', 'Rosso', '1993-07-28', 'roberta@email.com', 'password17'),
('user18', 'Filippo', 'Verde', '1986-03-09', 'filippo@email.com', 'password18'),
('user19', 'Cristina', 'Blu', '1995-01-25', 'cristina@email.com', 'password19'),
('user20', 'Lorenzo', 'Nero', '1988-09-05', 'lorenzo@email.com', 'password20');

