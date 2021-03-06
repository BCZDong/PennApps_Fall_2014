
###Parses
import sys
import re

#get filename from command line argument & open it (file to be opened must be in same directory)
filename = sys.argv[1]
course_file = open(filename,'r')
start = True

subject = False
subInfo = ""

for line in course_file:
	if start == True:
		#match <p>Subject code
		matching = re.match(r'<p>([A-Z]*)\s*-([0-9]*) (.*)',line)
		if matching:
			start = False
	else: 
		#match subject code
		matching = re.match(r'([A-Z]*)\s*-([0-9]*) (.*)',line)

	if matching:
		#if we have found the start of a subject

		#print matching.group()
		#remove whitespace for jesse
		subNamef = matching.group(1)
		subNumf = matching.group(2)
		stuff = matching.group(3)
		line = subNamef + '-' + subNumf + stuff +'\n'

		if subject == True:
			#if we were already printing out a subject
			#print to file
			newFileName = subName + subNum + ".txt"
			newFile = open(newFileName,"w")
			newFile.write(subInfo)
			subInfo = ""
			#print "new subject"
		else: 
			#start recording
			subject = True
			subInfo = ""

		subName = matching.group(1)
		subNum = matching.group(2)	


	if line=='</pre>':
		newFileName = subName + subNum + ".txt"
		newFile = open(newFileName,"w")
		newfile.write(subInfo)
		print "done"

		#print stuff out to file

	if subject == True:
		subInfo = subInfo + line 


