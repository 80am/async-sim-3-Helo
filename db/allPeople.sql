SELECT * from helousers
WHERE user_id != $1
AND user_id NOT IN (SELECT friend_id AS user_id FROM helofriends JOIN helousers
ON helofriends.user_id = helousers.user_id
WHERE helousers.user_id = $2 and helofriends.friend_id != $3)
