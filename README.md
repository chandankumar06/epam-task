# EPAM-Task

* **Overview** 
  To develop Informational System for Org.com which allows users to Create/Delete/update/map the below objects. 


* **Programing language/Frameworks used**
    - Python
    - Flask
    - Angular7
    - PyMongo

* **Reasons to Select the above tools/technologies** 
    - Angular : Angular is an open-source front-end framework for creating dynamic web apps.Angular                       applications are built using TypeScript language, which ensures higher security.
                
    - Python : Python is a high level, interpreted and general purpose dynamic programming language that                  focuses on code readability.It has fewer steps when compared to Java . Extensive support                  libraries.Open source and community development.

    - PyMongo : Its a NoSQL Database and it supports JSON query language .Best fit for hierarchical data                    storage

* **UseCase**
    - Customers need to read/store/update/delete objects
    - Customers need to be able to create relationships e.g “map Product 1 to Metric 2”.
    - Customers need to be able to search for objects by object fields.
    - Customers need to be able to search related objects e.g “ objects thats are mapped to product 1”


* **Steps to run the code :**
    - Open two different cmd from two different folders( i.e "Client" and "Server")
    - Run the below command on CMD
   - In Server folder cmd
        -  pip install -r requirements.txt
        -  python run.py (To run on flask server) [http://localhost:3000]
    - In Client folder cmd
        - npm install
        - ng serve (To start UI) [http://localhost:4200] 
    - Open browser and paste above url and test




