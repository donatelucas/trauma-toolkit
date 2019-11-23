//load main app logic
function loadApp() {
  "use strict";

  function buildSubjects(response) {
      //clear Subjects output
      $(".topic-output").empty();
      //get Subjects
      var $topic = response;
      //process Subjects array
      $topic.forEach(function(item) {
        if (item !== null) {
          var topic = item.Topic;
          //create each Subjects' <p>
          var p = $("<p>");
          //add note text
          p.html(topic);
          //append to DOM
          $(".topic-output").append(p);
        }
      });
    }

    function getSubjects() {
    $.getJSON("Subjects.json", function (response) {
      console.log(response);
      buildSubjects(response);
    });
    }

  getSubjects();

};
$(document).ready(loadApp);
