## Create Secret Pass for the DB

```sh
aws secretsmanager create-secret \
--name MyRdsPassword \
--description "My rds password" \
--secret-string "{\"password\":\"mypassword\"}"
```

Role-arn = arn:aws:secretsmanager:us-east-1:624448302051:secret:MyRdsPassword-EqFAjE

## Connect to the Database

postgresql://praveshsudha:mypassword@rds-basic-rdsinstance-rbroezvnzfi9.clcgac0g0t2b.us-east-1.rds.amazonaws.com:5432/mydatabase