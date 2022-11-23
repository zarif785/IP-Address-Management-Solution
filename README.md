# IP-Address-Management-Solution

A web based IP address management solution which allows users to view and record an IP Address and comment on its assignment. Laravel was used for the backend and ReactJS for the frontend. MySQL was used as the database.


## About Project

This web based application allows users to add an IP address and assign a label to it. The user can register, login and only then they can add an IP Address. The user can also check their entries and edit the label. An audit log is also implemented for the user to check their activities.

## UI

<img width="961" alt="Screen Shot 2022-11-23 at 10 37 45 PM" src="https://user-images.githubusercontent.com/63856140/203600804-7edd093d-383d-47ca-a6d9-9c21988575e8.png">
<img width="950" alt="Screen Shot 2022-11-23 at 10 37 52 PM" src="https://user-images.githubusercontent.com/63856140/203600863-cb3ac228-8ead-49f3-8455-29c604e769d8.png">
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
