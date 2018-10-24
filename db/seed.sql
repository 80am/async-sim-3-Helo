    
create table helofriendlist(
    id serial primary key,
    auth_id text REFERENCES helouser(auth_id),
    firstname text,
    lastname text,
    gender text,
    hair_color text,
    eye_color text,
    hobby text,
    birthday INTEGER,
    birth_month INTEGER,
    birth_year INTEGER,
    image text
)


create table helouser(
    user_id serial primary key,
    auth_id TEXT,
    UNIQUE (auth_id)
)


insert into helofriendlist(
    auth_id TEXT REFERENCES helouser(auth_id),
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
) values ('auth1', 'Ustis', 'Bartholomue', 'Robot', 'black','blue', 'falling down', 2, 1, 1946, 'https://robohash.org/YYYYY.png?bgset=bg1'),
    ('auth1', 'Otis', 'Clementine', 'Male', 'none','black', 'Being a Robot', 1, 4, 2001, 'https://robohash.org/YYYY.png?bgset=bg1'),
    ('auth1', 'Johnny', 'Utah', 'Robot', 'none','blue', 'complaining', 3, 1, 1946, 'https://robohash.org/YY.png?bgset=bg2'),
    ('auth1', 'Steal', 'Clarence', 'Female', 'black','green', 'complaining', 1, 1, 2001, 'https://robohash.org/Y.png?bgset=bg1'),
    ('auth1', 'Steve', 'Rodgers', 'Male', 'Steel','blue', 'falling down', 3, 4, 2001, 'https://robohash.org/YO.png?bgset=bg1'),
    ('auth1', 'Nic', 'Fury', 'Robot', 'black','green', 'falling down', 2, 7, 1946, 'https://robohash.org/YOU.png?bgset=bg1'),
    ('auth1', 'Bruce', 'Banner', 'Female', 'blonde','blue', 'complaining', 1, 7, 2001, 'https://robohash.org/YOUR.png?bgset=bg1'),
    ('auth1', 'Thanos', 'Thanoston', 'Robot', 'none','black', 'falling down', 3, 1, 2001, 'https://robohash.org/YOUR-.png?bgset=bg2'),
    ('auth1', 'Tony', 'Stark', 'Robot', 'black','black', 'falling down', 3, 7, 2001, 'https://robohash.org/YOUR-T.png?bgset=bg2'),
    ('auth1', 'Loki', 'BrotherofThor', 'Male', 'black','black', 'being a robot', 3, 4, 1946, 'https://robohash.org/YOUR-TE.png?bgset=bg1')


insert into helouser(auth_id) 
values ('auth1'),
       ('auth2'),
       ('auth3'),
       ('auth4'),
       ('auth5'),
       ('auth6'),
       ('auth7'),
       ('auth8'),
       ('auth9'),
       ('auth11')


