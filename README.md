# Can of Books - Back End

**Author**: Tracy Oakley & Jason Christopher
**Version**: 3.0.2

## Overview

App allows user to pull books from a database and display their title, description, and status. Also allows user to add, modify, favorite, or delete books from the database.

## Getting Started

From the Home page, the user can select the Add Book button to add a book. Then, in the carousel, the user may select the Modify Book or Remove Book button to update or remove the desired book from the database. The user may also select the heart icon to make the book a favorite.

## Architecture

When the client navigates to the Home page, the app contacts the server, which in turn contacts Mongo to pull all the books and their data to be displayed to the client. When as book is added, a POST request is sent to Mongo via the database. Likewise, when as book is deleted or updated, a DELETE or PUT request is sent to Mongo via the database.

## Change Log

* 11-21-2022 6:57pm - Application now pulls all books from the Mongo DB via the backend server.
* 11-22-2022 6:16pm - Application allows user to add/delete book from database.
* 11-23-2022 5:00pm - Application allows user to modify and favorite a book.

## Time Estimations

* Name of feature: Set up your repositories
* Estimate of time needed to complete: 1 hr
* Start time: 3:15pm
* Finish time: 4pm
* Actual time needed to complete: 45 minutes

* Name of feature: Storage
* Estimate of time needed to complete: 1.5 hrs
* Start time: 4pm
* Finish time: 5pm
* Actual time needed to complete:

* Name of feature: Book Component
* Estimate of time needed to complete: 1.5 hrs
* Start time: 5pm
* Finish time: 7pm
* Actual time needed to complete: 2 hours

* Name of feature: Create Book
* Estimate of time needed to complete: 2 hrs
* Start time: 3:30pm
* Finish time: 4:30pm
* Actual time needed to complete: 1 hour

* Name of feature: Delete Book
* Estimate of time needed to complete: 2 hrs
* Start time: 4:30pm
* Finish time: 6pm
* Actual time needed to complete: 1.5 hours

* Name of feature: Update a Resource
* Estimate of time needed to complete: 2 hrs
* Start time: 3pm
* Finish time: 4pm
* Actual time needed to complete: 1 hour

## Contracts

### Logistical

* What hours will you be available to communicate? 11am-7pm CT
* What platform will you use to communicate? Slack
* How often will you take breaks? Hourly or when we need it
* What is your plan if you start to fall behind? Get help from TAs

### Cooperative

* Make a list of each parson’s strengths. Both fairly proficient in React, Node.Js, and Express
* How can you best utilize these strengths in the development of your application? Reworking past code to make it work for new applications.
* In what areas do you each want to develop greater strength? Using DB functions of Mongo
* Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development? Follow Trello directions, use screen sharing and pair programming

### Conflict Resolution

* What will your team do if one person is pulling all the weight while the other person is not contributing? Ask the other to explain the process and ask for help 
* What will your team do if one person is taking over the project and not letting the other member contribute? Speak up and ask for help 
* How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level? With patience and understanding

## Credit and Collaborations

Tracy Oakley coded the back-end and Jason Christopher coded the front-end.
