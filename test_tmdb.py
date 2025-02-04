import requests


# Get list of countries
url = "https://api.themoviedb.org/3/configuration/countries?language=en-US"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)
# print(response.json())
# print([res["english_name"] for res in response.json()])



# Get list of movies, ranked by popular or some shit
url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)

# print(response.json()["results"][0])


# Get movie by IMDB_ID, easy to find a movie in multiple platforms
"""
url = "https://api.themoviedb.org/3/find/5?external_id?external_source=imdb_id"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers)

print(response.text)
"""

# Movie ratings by a user. We can look at their country perhaps?
"""
url = "https://api.themoviedb.org/3/guest_session/11/rated/movies?language=en-US&page=1&sort_by=created_at.asc"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers)

print(response.json())
"""

# Get top-rated movies
url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)

# print(response.json())


# Get a movie by its ID
url = "https://api.themoviedb.org/3/movie/939243?language=en-US"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)

# print(response.json())



# Get other platforms IDs
url = "https://api.themoviedb.org/3/movie/939243/external_ids"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers)

print(response.json()["imdb_id"])


# Get movies recommended to a specific one with its ID
url = "https://api.themoviedb.org/3/movie/939243/recommendations?language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)

# print(response.json()["results"])


# Get the list of most popular actors
url = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

# response = requests.get(url, headers=headers)

# print(response.json()["results"])


# Get an actor's credits
url = "https://api.themoviedb.org/3/person/1245/movie_credits?language=en-US"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers)

print(response.json["cast"])