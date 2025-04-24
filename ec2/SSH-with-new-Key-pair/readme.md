## Creating an SSH Key

ssh-keygen -t rsa -f "ec2-key"

## Changing the Permissions

chmod 400 ec2-key

## Attaching the key to the instance

aws ec2-instance-connect send-ssh-public-key \
    --instance-id i-03927f7b95969a896 \
    --instance-os-user ubuntu \
    --availability-zone us-east-1b \
    --ssh-public-key file://ec2-key.pub

## Connect using SSH

ssh -i "ec2-key" ubuntu@3.95.132.205