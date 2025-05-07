require 'aws-sdk-translate'


client = Aws::Translate::Client.new

text = "Hello, This is Pravesh Sudha, Utilizing Amazon Translate."
resp = client.translate_text({
  text: text,
  source_language_code: "en", # required
  target_language_code: "es" # required
})
puts resp.translated_text