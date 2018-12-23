You will find in the project 3 directories

1.client
2.server.
3.build (executable jar)

-----------------
Client directory
-----------------
you will find the source of the client side of the project.
If you like to run only the client side you will need to do the next:
1. Download all source files
2. Go to source files location
3. Run  'npm install' this will download and install all relevant dependencies.
4. Once done run 'ng serve'

-----------------
server directory
-----------------
you will find the source of the server side of the project.
this is single microservice that exposing CRUD operarions via RESTful services.
the microservice saving the data at mongoDB atlas (need to make sure the local machine have access to it).
mvn clean install or mvn clean package will generate the needed artifacts to run the server side.

-----------------
build (executable jar)
-----------------
More info under the directory

