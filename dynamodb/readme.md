# Change the File Permissions
```sh
chmod u+x bin/deploy
```

## Execute the Changes
```sh
./bin/deploy
```

## Put Some Items in the Table
```sh
aws dynamodb put-item \
--table-name dbb-basic-DynamoDBTable-KNPSZF08AV9C \
--item file://item.json \
```