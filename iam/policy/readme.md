## Create a Policy
```sh
 aws iam create-policy --policy-name my-ec2-policy --policy-document file://ec2-policy.json 
```

ARN = arn:aws:iam::624448302051:policy/my-ec2-policy

 ## Attach
 ```sh
aws iam attach-user-policy --user-name testing --policy-arn arn:aws:iam::624448302051:policy/my-ec2-policy 
 ```