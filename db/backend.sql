create table Users(
    users_id SERIAL PRIMARY KEY,
    password  VARCHAR(100),
    name  VARCHAR(100) ,
    email  VARCHAR(100) UNIQUE ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

create table Posts(
    posts_id SERIAL PRIMARY KEY,
    content text NOT NULL,
    users_id INT REFERENCES Users(users_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

create table Comments(
    comments_id SERIAL PRIMARY KEY,
    content text NOT NULL,
    users_id INT REFERENCES Users(users_id) ON DELETE CASCADE,
    posts_id INT REFERENCES Posts(posts_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO USERS ( password, name,email  ) VALUES ('testuser', 'Test Name', 'test@test.com')

select * from users
