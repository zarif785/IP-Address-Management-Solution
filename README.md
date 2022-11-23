# IP-Address-Management-Solution

A web based IP address management solution which allows users to view and record an IP Address and comment on its assignment. Laravel was used for the backend and ReactJS for the frontend. MySQL was used as the database.


## About Project

This web based application allows users to add an IP address and assign a label to it. The user can register, login and only then they can add an IP Address. The user can also check their entries and edit the label. An audit log is also implemented for the user to check their activities.

##UI
<img width="981" alt="Screen Shot 2022-11-23 at 10 17 42 PM" src="https://user-images.githubusercontent.com/63856140/203597331-737543dc-74a4-4c8a-8ba3-f9ae06381d47.png">
<img width="969" alt="Screen Shot 2022-11-23 at 10 22 49 PM" src="https://user-images.githubusercontent.com/63856140/203597407-5ee2a1bb-9d3e-4f9d-8599-f3522f99a303.png">
<img width="927" alt="Screen Shot 2022-11-23 at 10 21 41 PM" src="https://user-images.githubusercontent.com/63856140/203597536-9affd166-bac4-45f1-bc35-e929f1c12450.png">
<img width="943" alt="Screen Shot 2022-11-23 at 10 22 10 PM" src="https://user-images.githubusercontent.com/63856140/203597585-abf835c4-1f38-4145-a706-2fd257dbbc43.png">
<img width="926" alt="Screen Shot 2022-11-23 at 10 22 30 PM" src="https://user-images.githubusercontent.com/63856140/203597598-61db47a4-f5d2-4ea8-bc2b-ddf386d7dc0c.png">


## Functionalities
GET: http://localhost:8000/api/addresses - Fetches all the IP addresses and label posted by all users

GET: http://localhost:8000/api/myaddress- Fetches IP address and label for a particular user using authentication token

GET: http://localhost:8000/api/log/${id} - Fetches the users activities log 

POST:http://localhost:8000/api/addresses - Creates IP address along with its label

PUT :http://localhost:8000/api/addresses/${ip_id} - Updates the label of an IP address

Authentication:

POST: http://localhost:8000/api/register - Registers Users

POST: http://localhost:8000/api/login - Logs in user

POST: http://localhost:8000/api/logout - Logs out user.



## Tech Stack

1. ReactJS
2. Laravel
3. Postman
4. Visual Studio Code
5. MySQL
