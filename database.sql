
INSERT INTO films (id, name, director, synopsis, release_date, duration, language, cover_image, created_at, updated_at) VALUES
(1, 'Inception', 'Christopher Nolan', 'Un ladro che ruba segreti attraverso i sogni riceve il compito di impiantare un''idea in una mente.', '2010-07-16', 148, 'English', '/static/images/inception.jpg', NOW(), NOW()),
(2, 'Interstellar', 'Christopher Nolan', 'Un gruppo di esploratori viaggia attraverso un wormhole alla ricerca di un nuovo pianeta abitabile per l''umanità.', '2014-11-07', 169, 'English', '/static/images/interstellar.jpg', NOW(), NOW()),
(3, 'The Godfather', 'Francis Ford Coppola', 'La saga della famiglia mafiosa dei Corleone e della lotta per il potere negli USA del dopoguerra.', '1972-03-24', 175, 'English', '/static/images/the_godfather.jpg', NOW(), NOW()),
(4, 'Titanic', 'James Cameron', 'Un amore impossibile a bordo del transatlantico Titanic durante il suo tragico viaggio inaugurale.', '1997-12-19', 195, 'English', '/static/images/titanic.jpg', NOW(), NOW()),
(5, 'The Matrix', 'Lana e Lilly Wachowski', 'Un programmatore scopre che la realtà è una simulazione e si unisce alla resistenza contro le macchine.', '1999-03-31', 136, 'English', '/static/images/the_matrix.jpg', NOW(), NOW());


INSERT INTO reviews (id, film_id, username, review, average_rating, rating_count, created_at, updated_at) VALUES
(1, 1, 'marco92', 'Inception è un puzzle incredibile: regia, montaggio e colonna sonora al top.', 4.50, 1, NOW(), NOW()),
(2, 1, 'lucia.rossi', 'Idea geniale e ottima esecuzione, però va visto più volte per cogliere tutti i dettagli.', 4.00, 1, NOW(), NOW()),
(3, 1, 'gianni', 'Mi ha tenuto incollato. Nolan al suo meglio.', 5.00, 1, NOW(), NOW()),
(4, 2, 'alessandra', 'Emozionante e visivamente stupendo. Tematiche profonde sull''umanità.', 5.00, 1, NOW(), NOW()),
(5, 2, 'stefano', 'Lento in alcuni punti ma la parte scientifica è affascinante.', 4.00, 1, NOW(), NOW()),
(6, 2, 'maria', 'Musiche memorabili e momenti molto toccanti.', 4.50, 1, NOW(), NOW()),
(7, 3, 'paolo', 'Capolavoro assoluto. Recitazione e sceneggiatura magistrali.', 5.00, 1, NOW(), NOW()),
(8, 3, 'anna', 'La migliore rappresentazione del mondo mafioso che abbia visto.', 4.50, 1, NOW(), NOW()),
(9, 3, 'roberto', 'Storia e atmosfera impeccabili. Imperdibile.', 5.00, 1, NOW(), NOW()),
(10, 4, 'francesca', 'Titanic è struggente e visivamente potente, la colonna sonora resta con te.', 4.50, 1, NOW(), NOW()),
(11, 4, 'davide', 'Storia d''amore classica, alcune scene troppo melodrammatiche ma efficaci.', 4.00, 1, NOW(), NOW()),
(12, 4, 'elisa', 'Ogni volta che lo vedo piango sempre.', 5.00, 1, NOW(), NOW()),
(13, 5, 'andrea', 'La premessa è originale e le scene d''azione sono ancora fantastiche.', 4.50, 1, NOW(), NOW()),
(14, 5, 'veronica', 'Film che ha cambiato il genere sci-fi negli anni ''90.', 5.00, 1, NOW(), NOW()),
(15, 5, 'matteo', 'Effetti e ritmo eccellenti, filosofia interessante senza essere pesante.', 4.50, 1, NOW(), NOW());