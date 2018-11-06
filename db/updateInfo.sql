update helousers
set auth_id = $1,
    firstname = $2, 
    lastname = $3,
    gender = $4,
    hair_color = $5,
    eye_color = $6,
    hobby = $7,
    birthday = $8,
    birth_month = $9,
    birth_year = $10,
    image = $11
where user_id = $12
returning *