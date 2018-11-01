    
create table helousers(
    id serial primary key,
    auth_id text,
    user_id INTEGER,
    firstname text,
    lastname text,
    gender text,
    hair_color text,
    eye_color text,
    hobby text,
    birthday INTEGER,
    birth_month INTEGER,
    birth_year INTEGER,
    image text,
    unique (auth_id, user_id)
)


create table helouser(
    user_id serial primary key,
    auth_id TEXT,
    UNIQUE (auth_id)
)


insert into helouserst(
    user_id INTEGER REFERENCES helofriendlist(user_id),
    firstname,
    lastname,
    gender,
    hair_color,
    eye_color,
    hobby,
    birthday,
    birth_month,
    birth_year,
    image
) values ('auth1', 'ustis', 'bartholomue', 'robot', 'black','blue', 'falling down', 2, 1, 1946, 'https://robohash.org/YYYYY.png?bgset=bg1'),
    ('auth2', 'otis', 'clementine', 'male', 'none','black', 'Being a Robot', 1, 4, 2001, 'https://robohash.org/YYYY.png?bgset=bg1'),
    ('auth3', 'johnny', 'utah', 'robot', 'none','blue', 'complaining', 3, 1, 1946, 'https://robohash.org/YY.png?bgset=bg2'),
    ('auth4', 'steal', 'clarence', 'female', 'black','green', 'complaining', 1, 1, 2001, 'https://robohash.org/Y.png?bgset=bg1'),
    ('auth5', 'steve', 'rodgers', 'male', 'Steel','blue', 'falling down', 3, 4, 2001, 'https://robohash.org/YO.png?bgset=bg1'),
    ('auth6', 'nic', 'fury', 'robot', 'black','green', 'falling down', 2, 7, 1946, 'https://robohash.org/YOU.png?bgset=bg1'),
    ('auth7', 'bruce', 'banner', 'female', 'blonde','blue', 'complaining', 1, 7, 2001, 'https://robohash.org/YOUR.png?bgset=bg1'),
    ('auth8', 'thanos', 'thanoston', 'robot', 'none','black', 'falling down', 3, 1, 2001, 'https://robohash.org/YOUR-.png?bgset=bg2'),
    ('auth9', 'tony', 'stark', 'robot', 'black','black', 'falling down', 3, 7, 2001, 'https://robohash.org/YOUR-T.png?bgset=bg2'),
    ('auth10', 'loki', 'brotherofThor', 'male', 'black','black', 'being a robot', 3, 4, 1946, 'https://robohash.org/YOUR-TE.png?bgset=bg1'),
	('auth11','prince', 'chacha', 'male', 'black', 'black',	'being a robot', 3,	4,	1946,	'https://robohash.org/UR-TE.png?bgset=bg1'),
    ('auth12','peter', 'parker', 'robot', 'black', 'black',	'being a robot', 3,	4,	1946,	'https://robohash.org/OUR-TE.png?bgset=bg1'),
    ('auth13','bob', 'ross', 'robot', 'blue', 'black', 'falling down',	3,	4,	1946,	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpA6B1egFfr4AqaHqMTtDmlyNwP0S7TiEF-eIyvDq8EyEl_OK')

insert into helofriends(
    friend_id,
    user_id
)values(1,2),
      (3,1),
      (1,3),
      (1,7),
      (1,10),
      (7,3),
      (9,12),
      (3,6),
      (2,3),
      (2,5),
      (2,8),
      (2,10),
      (2,11),
      (5,11),
      (7,12),
      (10,12),
      (9,10)

