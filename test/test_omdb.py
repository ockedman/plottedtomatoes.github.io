import requests

# Get list of countries
url = "http://www.omdbapi.com/?apikey=7066845&t=Shrek"


response = requests.get(url)
print(response.json())