SELECT * FROM helofriends
join helousers
on helofriends.friend_id = helousers.user_id
where helofriends.user_id = $1