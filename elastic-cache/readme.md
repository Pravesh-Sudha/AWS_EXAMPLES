## Create ElasticCache
```sh
aws elasticache create-serverless-cache
--serverless-cache-name my-cache-ab-5252
--engine redis
```

## Deploy the EC2 instance
```sh
chmod u+x deploy
./deploy          ## (Make sure to change the value of subnet, VPC, Sgs, AMI Id of image and open port 6379 in the sg)
```

## Test the endpoints
```sh
sudo su - ubuntu 
redis-cli -h <Your-Elastic-Cache-Endpoints> --tls
```