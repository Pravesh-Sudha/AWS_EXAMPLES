## Since we created a new VPC named 'my-VPC', it comes with a configured NACLs

## Get Ec2 instance image id

aws ec2 describe-images \
--owners amazon \
--filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" "Name=state,Values=available" \
--query "Images[?starts_with(Name, 'amzn2')]|sort_by(@, &CreationDate)[-1].ImageId" \
--region us-east-1 \
 --output text

ami-0a38b8c18f189761a

## Create the instance using Cloud-formation
aws cloudformation deploy --template-file template.yml --stack-name My-Stack   --capabilities CAPABILITY_IAM     


# Blcok your Id to access the data
aws ec2 create-network-acl-entry \
--network-acl-id acl-0f3e3a62e2476b97b \
--ingress \
--rule-number 90 \
--protocol -1 \
--port-range From=0,To=65535 \
--cidr-block 106.219.71.128/32 \
--rule-action deny