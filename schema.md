## Table films

- id PK AUTO_INCREMENT INT 
- name VARCHAR(50) NN 
- director VARCHAR(50) NN
- cover_image VARCHAR(255) NULL
- synopsis TEXT NULL
- release_date DATE NULL
- duration INT NULL                    
- language VARCHAR(50) NULL
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

## Table reviews

- id INT PK AUTO_INCREMENT 
- film_id FK
- username VARCHAR(50) NN
- review TEXT NN
- average_rating DECIMAL(3,2) DEFAULT 0.00
- rating_count INT DEFAULT 0
- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  