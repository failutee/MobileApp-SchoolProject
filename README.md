# About
A mobile application with an API that downloads the data of various people and their cars. The API was written in Java (Spring) and the Mobile Application in React-Native.

*None of the people contained in example_data.sql are associated with this project names and surnames were randomly generated.*

# Requirements
Java 17+, Node.JS

# Run Project
Running API:
  - Go to API root directory
  - Open terminal
  - type -> **./gradlew bootRun**

Running Mobile (Expo Server)
  - Go to Mobile root directory
  - Open terminal
  - type -> **npm install --dev**
  - type -> **expo start**

# API
Returns all persons (PersonID, PersonName, BirthDate, Car) => 
``api/v1/person/getAllPersons``

# Video
Presentation of the application using Expo

https://user-images.githubusercontent.com/50597234/224440040-0d987a44-a34c-4c13-9be0-78f5bea5dca7.mov

