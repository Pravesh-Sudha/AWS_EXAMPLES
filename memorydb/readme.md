## Create Subnet group
```sh
aws memorydb create-subnet-group \
--subnet-group-name my-sg \
--description "my subnet group" \
--subnet-ids subnet-0892330102cc093bf subnet-0d06d26ac2a064aeb
```

## Create User
```sh
aws memorydb create-user \
--user-name MemUser \
--access-string "on ~* &* +@all" \
--authentication-mode \
Passwords="password12345678",Type=password
```

## Create ACL
```sh
aws memorydb create-acl \
--acl-name "my-acl" \
--user-names "MemUser"
```

## Create the MemoryDB Cluster

```sh
aws memorydb create-cluster \
--cluster-name my-new-cluster \
--node-type db.t4g.small \
--acl-name my-acl \
--subnet-group my-sg
```
