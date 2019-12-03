//load main app logic
function loadApp() {
  "use strict";

  console.log("Debug 1");

  function buildSubjects(response) {
      console.log("Debug 2");
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
      console.log("Debug 3");
    $.getJSON("Subjects.json", function (response) {
      console.log("Debug 4");
      console.log(response);
      buildSubjects(response);
    });
    }

  console.log("Debug 5");
  getSubjects();
  console.log("Debug 6");

///////////////////////////////////////////////////////

  function buildRapeTools(response) {
      $(".rapetools-definition").empty();
      $(".rapetools-mentalhealthservices").empty();
      $(".rapetools-physicalhealthservices").empty();
      $(".rapetools-reportingoptions").empty();
      $(".rapetools-helpfullinks").empty();
      var $rapetools = response;
      $rapetools.forEach(function(item) {
        if (item !== null) {
          var definition = item.Definition;
          var mentalhealthservices = item.Mental_Health_Services;
          var physicalhealthservices = item.Physical_Health_Services;
          var reportingoptions = item.Reporting_Options;
          var helpfullinks = item.Helpful_Links;
          mentalhealthservices = mentalhealthservices.replace(/,/g, "<br>")
          physicalhealthservices = physicalhealthservices.replace(/,/g, "<br>")
          reportingoptions = reportingoptions.replace(/,/g, "<br>")
          helpfullinks = helpfullinks.replace(/,/g, "<br>")
          var p = $("<p>");
          var q = $("<p>");
          var r = $("<p>");
          var s = $("<p>");
          var t = $("<p>");
          p.html(definition);
          q.html(mentalhealthservices);
          r.html(physicalhealthservices);
          s.html(reportingoptions);
          t.html(helpfullinks);
          $(".rapetools-definition").append(p);
          $(".rapetools-mentalhealthservices").append(q);
          $(".rapetools-physicalhealthservices").append(r);
          $(".rapetools-reportingoptions").append(s);
          $(".rapetools-helpfullinks").append(t);
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


  //////////////////////////////////////////////////////

    function buildSexualAbuseTools(response) {
      $(".sexualabusetools-definition").empty();
      $(".sexualabusetools-mentalhealthservices").empty();
      $(".sexualabusetools-physicalhealthservices").empty();
      $(".sexualabusetools-reportingoptions").empty();
      $(".sexualabusetools-helpfullinks").empty();
      var $sexualabusetools = response;
      $sexualabusetools.forEach(function(item) {
        if (item !== null) {
          var definition = item.Definition;
          var mentalhealthservices = item.Mental_Health_Services;
          var physicalhealthservices = item.Physical_Health_Services;
          var reportingoptions = item.Reporting_Options;
          var helpfullinks = item.Helpful_Links;
          mentalhealthservices = mentalhealthservices.replace(/,/g, "<br>")
          physicalhealthservices = physicalhealthservices.replace(/,/g, "<br>")
          reportingoptions = reportingoptions.replace(/,/g, "<br>")
          helpfullinks = helpfullinks.replace(/,/g, "<br>")
          var p = $("<p>");
          var q = $("<p>");
          var r = $("<p>");
          var s = $("<p>");
          var t = $("<p>");
          p.html(definition);
          q.html(mentalhealthservices);
          r.html(physicalhealthservices);
          s.html(reportingoptions);
          t.html(helpfullinks);
          $(".sexualabusetools-definition").append(p);
          $(".sexualabusetools-mentalhealthservices").append(q);
          $(".sexualabusetools-physicalhealthservices").append(r);
          $(".sexualabusetools-reportingoptions").append(s);
          $(".sexualabusetools-helpfullinks").append(t);
        }
      });
    }

    function getSexualAbuseTools() {
    $.getJSON("SexualAbuseTools.json", function (response) {
      console.log(response);
      buildSexualAbuseTools(response);
    });
    }

  getSexualAbuseTools();

};
$(document).ready(loadApp);
