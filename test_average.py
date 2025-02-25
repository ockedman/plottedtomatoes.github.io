import requests
import matplotlib.pyplot as plt

def average_grading(movies):
    avg = 0
    l = len(movies)

    for m in movies:
        avg += m["vote_average"]

    avg /= l
    return avg


url = "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_original_language=fr"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers).json()["results"]
avg1 = average_grading(response)


url = "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_original_language=es"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers).json()["results"]
avg2 = average_grading(response)


url = "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_original_language=ko"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA2NTNkNWI0NDZlY2I1NTJlYzI3NTUzNjU0ODVjNyIsIm5iZiI6MTczODU4NTI0My40NzUwMDAxLCJzdWIiOiI2N2EwYjQ5Yjc3NmVkZjRiZTM5NTRjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MTDdS62ngDtk9JDJDJitRRX2Zvg3H3_e0KVHCB_h5Vs"
}

response = requests.get(url, headers=headers).json()["results"]
avg3 = average_grading(response)


countries = ["French", "Spanish", "Korean"]
avgs = [avg1, avg2, avg3]


plt.bar(countries, avgs)
plt.title('Average rating per language')
plt.xlabel('Languages')
plt.ylabel('Average rating')
plt.show()