# ExamScheduler


[![a srbcheema1 production](https://img.shields.io/badge/-a%20srbcheema1%20production-blue.svg)](https://github.com/srbcheema1)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.ocm/srbcheema1/ExamScheduler/issues)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/srbcheema1/ExamScheduler)
[![Build Status](https://travis-ci.org/srbcheema1/exam_scheduler.svg?branch=master)](https://travis-ci.org/srbcheema1/ExamScheduler)
[![HitCount](http://hits.dwyl.io/srbcheema1/ExamScheduler.svg)](http://hits.dwyl.io/srbcheema1/ExamScheduler)


**[ExamScheduler](https://srbcheema1.github.io/ExamScheduler/)** is a web-based tool to produce teacher-duty schedule in examination for a school/college.

### Build

Install requirements
```
npm install
```

Run the app in the development mode.
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Inputs Required


- [room_list](https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing) - includes `room-name` and `teachers-required` as compulsory attributes. Other optional attributes may follow.

- [teachers_list](https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing) - includes `teacher-name` and `rank` as compulsory attributes. Other optional attributes may follow.

- [schedule_list](https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing) - A 2D matrix includeing relation between a session and a room, value is 'Y' if room is required on particular session.

- [work_ratio](https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit#gid=0) - includes `rank` and `work_ratio` as compulsory attributes. Other optional attributes may follow


### Template Output

- [Output_file](https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing) - contains a 2D matrix of teachers and their duties in given session.

### Contact / Social Media

[![Github](https://raw.githubusercontent.com/srbcheema1/CheemaFy/master/myPlugins/extra_things/png_images/social/github.png)](https://github.com/srbcheema1/)
[![LinkedIn](https://raw.githubusercontent.com/srbcheema1/CheemaFy/master/myPlugins/extra_things/png_images/social/linkedin-48x48.png)](https://www.linkedin.com/in/srbcheema1/)
[![Facebook](https://raw.githubusercontent.com/srbcheema1/CheemaFy/master/myPlugins/extra_things/png_images/social/fb.png)](https://www.facebook.com/srbcheema/)


### Developed by

Developer / Author: [Srb Cheema](https://github.com/srbcheema1/)

Collaborator : [Rakesh Kumar](https://github.com/spider34/)

Collaborator : [Amit Chambial](https://github.com/devaman/)
