## Create a User and generate access key for it

```sh
aws iam create-user \
    --user-name sts-machine-user

aws iam create-access-key \
    --user-name sts-machine-user \
    --output table
```

## Copy the access key and secrets in the credentials
```sh
 aws configure
 ```

## Create the Role using Cloud-formation-template
```sh
chmod u+x deploy
./deploy
```

## Create a policy and attach to the user, use the New User Creds and Assume Role
```sh
aws iam put-user-policy \
--user-name sts-machine-user \
--policy-name Sts-User-policy \
--policy-document file://AdminPolicy.json
```

```sh
aws sts assume-role \
--role-arn arn:aws:iam::624448302051:role/S3-stack-StsRole-7lI6CDdbK7x2 \
--role-session-name s3-access-example \
--profile sts
```
