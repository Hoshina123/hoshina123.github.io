from urllib.request import urlopen

html = urlopen("https://github.com/Administrator-user")
content = str(html.read().decode("utf-8"))
f = open("./html.txt","w+",encoding="UTF-8")
f.write(content)
f.close()
