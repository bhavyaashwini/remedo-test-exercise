1)SELECT b.user_id, a.address, b.total_invoice_amount, b.invoice_amount_paid, b.remedo_commission FROM users a LEFT JOIN transactions b ON a.user_id AND b.user_id WHERE b.user_id= 1

2)SELECT SUM(remedo_commission)AS totalcommission From transactions;

3)SELECT user_id, address FROM users WHERE user_id NOT IN (SELECT user_id FROM user_extra_info);

4)SELECT user_id, name, address FROM users WHERE user_id IN (SELECT user_id FROM user_extra_info);

5)SELECT a.user_id,a.name, a.address FROM users a INNER JOIN transactions b ON a.user_id AND b.user_id where a.user_id NOT IN (SELECT user_id FROM user_extra_info)
