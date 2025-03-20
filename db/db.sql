-- Active: 1741048758608@@127.0.0.1@5432@neondb@public
drop table Comments;
drop table Posts;
drop table Users;


create table Users(
    email  VARCHAR(100) primary key,
    password  VARCHAR(100),
    name  VARCHAR(100) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)



create table Posts(
    posts_id SERIAL PRIMARY KEY,
    content text NOT NULL,
    email varchar(100) REFERENCES Users(email) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


create table Comments(
    comments_id SERIAL PRIMARY KEY,
    content text NOT NULL,
    email varchar(100) REFERENCES Users(email) ON DELETE CASCADE,
    posts_id INT REFERENCES Posts(posts_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO Co ( content, email  ) VALUES ('hello', 'frlopez@gmail.com')

select * from users


insert into Comments (content, email, posts_id ) values ('Third comment', 'frlopez@gmail.com', 2)

select * from Posts WHERE posts_id=1

INSERT INTO Posts (content, user_id) values ('$1', 1)