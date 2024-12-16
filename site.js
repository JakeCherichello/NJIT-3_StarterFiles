/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie */
/*    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
@@ -20,26 +21,28 @@
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created() {
        fetch("movies.json")
          .then((response) => response.json())
          .then((json) => {
            this.movies = json;
          });
      },
      data() {
        return {     
           movies: [],
              /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
          title: "IMDB + YourName's Top 8 Movies",
          owner: "Ben",
          github: "https://github.com/Gkilgore/NJIT-3_StarterFiles",
        };
      },
      methods: {
        /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      },
    });
    
    vue_app.mount("#vue_app");

