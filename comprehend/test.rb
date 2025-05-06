require 'aws-sdk-comprehend'

client = Aws::Comprehend::Client::new
text = "Hey there and I am using Amazon Comprehend and I didn't like it!!"

resp = client.detect_sentiment({
    text: text,
    language_code: "en"
})

puts resp.sentiment

