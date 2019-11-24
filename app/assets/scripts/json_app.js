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

///////////////////////////////////////////////////////

  function buildRapeTools(response) {
      $(".rapetools-output").empty();
      var $rapetools = response;
      $rapetools.forEach(function(item) {
        if (item !== null) {
          var rapetools = item.Reporting_Options;
          console.log(typeof rapetools);
          rapetools = rapetools.replace(/,/g, "<br>")
          var p = $("<p>");
          p.html(rapetools);
          $(".rapetools-output").append(p);
        }
      });
    }

    function getRapeTools() {
    $.getJSON("RapeTools.json", function (response) {
      console.log(response);
      buildRapeTools(response);
    });
    }

  getRapeTools();

};
$(document).ready(loadApp);
