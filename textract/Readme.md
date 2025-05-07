## Create a Bucket

```sh
aws s3 mb s3://textract-testing-1234
```
## Upload the Doc to the bucket

```sh
aws s3 cp tax-doc.png s3://textract-testing-1234
```

## Run the Ruby script

```sh
bundle exec ruby textract.rb
```