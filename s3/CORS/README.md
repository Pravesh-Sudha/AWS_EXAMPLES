## Create a bucket
```sh
aws s3 mb s3://static-website-ps-1234
```

## Change block public access
```sh
aws s3api put-public-access-block \
--bucket static-website-ps-1234 \
--public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## Create a bucket policy
```sh
aws s3api put-bucket-policy --bucket static-website-ps-1234 --policy file://bucket-policy.json
```

## Turn on static website hosting
```sh
aws s3api put-bucket-website --bucket static-website-ps-1234 --website-configuration file://website.json
```

## Upload our index.html file and include a resource that would be cross-origin
```sh
aws s3 cp index.html s3://static-website-ps-1234
```