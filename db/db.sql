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

INSERT INTO USERS ( password, name,email  ) VALUES ('hello', 'John', 'john@codex.com')

select * from posts


insert into Comments (content, users_id, posts_id ) values ('Third comment', 2, 1)

select * from Posts WHERE posts_id=1

INSERT INTO Posts (content, user_id) values ('$1', 1)