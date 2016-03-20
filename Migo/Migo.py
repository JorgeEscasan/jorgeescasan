"""Hi! My name is Jorge and I'm a 16-year-old high school student from California. The idea for this project was inspired
by Cameron Howe's interactive UI for the Cardiff Giant on 'Halt and Catch Fire.' If you have any questions, comments
or tips please contact me at jorgeaescasanr@gmail.com"""

import subprocess

name=input ("What is your name?")

print ("Hello " + str(name) + "! :-) My name is Migo.")

print ("I am a command prompt for dummies!")

print ("Dummies are people like you, people who don't know the command line.")

print ("I don't do much right now, because the guy who created me is a high school student who is still learning Python.")



ans=input ("Say, " + str(name) +". Would you like to know how I work?")

while True:
    if ans == "Yes":

        print ("Essentially, I am a simplified version of a command line (Terminal on OSX, Command Prompt on Windows/Linux).")

        print ("The command line is the screen you see on hackers' computers in movies, you know, that classic green text on a black screen.")

        print ("Essentially, the command line is the most direct way to tell a computer what to do.")

        print ("Using a command line takes a certain amount of knowledge and skill.")

        print ("But I'm totally different! I respond to much simpler commands.")

        print ("Simply tell me what you want to do, and I will do it!")

        print ("Well, " + str(name) + ", it was a pleasure meeting you! I'll see you soon!")
        break

    if ans == "No":

        print ("Okay, goodbye, " + str(name) + ", it was nice meeting you.")
        break

    else:

        print ("Okay, goodbye, " + str(name) + ", it was nice meeting you.")
        break


act=input ("What would you like to do, " + str(name) + "?")

while True:
    if act =="I want to listen to music":
        print ("Opening iTunes...")
        subprocess.call(
    ["/usr/bin/open", "-W", "-n", "-a", "/Applications/iTunes.app"]
    )
        break
    if act == "I want to surf the web":
        print ("Opening Google Chrome...")
        subprocess.call(
    ["/usr/bin/open", "-W", "-n", "-a", "/Applications/Google Chrome.app"]
    )
        break
