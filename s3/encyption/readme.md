## Create bucket

aws s3 mb s3://encryption-fun-ps-1234

## Create file

echo "Hey Everyone" > hello.txt

## Initialise Ruby for Encryption
bundle init 
bundle insatll
bundle exec ruby encryption.rb

# Cleanup
aws s3 rm s3://encryption-fun-ps-1234/hello.txt
aws s3 rb s3://encryption-fun-ps-1234
