<!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Friends Page</title>

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
     <script src="https://code.jquery.com/jquery.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

   </head>
   <body>

     <div class="container">

       <div class="jumbotron">
         <h1 class="text-center"><span class="glyphicon glyphicon-fire"></span> Friend Finder</h1>
         <hr>
         <h2 class="text-center">Find your Friends</h2>
         <br>

         <div class="text-center">
           <a href="/tables"><button type="button" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-list-alt"></span> View Friends</button></a>
           <a href="/"><button type="button" class="btn btn-lg btn-default"><span class="glyphicon glyphicon-home"></span></button></a>
         </div>
       </div>

       <div class="row">
         <div class="col-lg-12">

           <!-- Friends Page -->
           <div class="panel panel-default">
             <div class="panel-heading">
               <h4 class="panel-title">Find friends</h4>
             </div>
             <div class="panel-body">

               <form role="form">

                 <div class="form-group">
                   <label for="friend-name">Name</label>
                   <input type="text" class="form-control" id="friend-name">
                 </div>

                 <div class="form-group">
                   <label for="friend-phone">Phone Number</label>
                   <input type="text" class="form-control" id="friend-phone">
                 </div>

                 <div class="form-group">
                   <label for="friend-email">Email</label>
                   <input type="text" class="form-control" id="friend-email">
                 </div>

                 <div class="form-group">
                   <label for="friend-unique-id">Unique ID</label>
                   <input type="text" class="form-control" id="friend-unique-id">
                 </div>

                 <button type="submit" class="btn btn-primary submit">Submit</button>
               </form>

             </div>
           </div>

         </div>
       </div>


       <footer class="footer">
         <div class="container">
           <p><a href="/api/friend">API Friend Link</a> | <a href="/api/friendslist">API Friends List</a> | <a href="https://github.com/abebe/friendFinder">GitHub Repo</a></p>
         </div>
       </footer>

     </div>

   </body>
   </html>

   <script type="text/javascript">

       $(".submit").on("click", function(event) {
         event.preventDefault();

         // Here we grab the form elements
         var newFriend = {
           friendName: $("#friend-name").val().trim(),
           phoneNumber: $("#friend-phone").val().trim(),
           friendEmail: $("#friend-email").val().trim(),
           friendID: $("#friend-unique-id").val().trim()
         };

         console.log(newFriend;


         $.post("/api/friends", newFriend,
           function(data) {


             if (data) {
               alert("Yay! You are matched!");
             }


             else {
               alert("Sorry you are not matched yet");
             }


             $("#friend-name").val("");

             $("#friend-phone").val("");
             $("#friend-email").val("");
             $("#friend-unique-id").val("");

           });

       });

   </script>




</body>
</html>


var friendsArray = [
   {
     friendName: "Abebe", "alem",
     friendEmail: "abebe@hotmail.com",

     friendID: "friend69",
     phoneNumber: "202-303-4004"
   }
 ];

 // Note how we export the array. This makes it accessible to other files using require.
 module.exports = tableArray;
