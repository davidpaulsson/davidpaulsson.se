#
# Load FitVids if needed
#

$ ->
  if $("#vimeo").length
    yepnope
      load: "/_bower_components/FitVids/jquery.fitvids.js"
      complete: ->
        $(".wrapper").fitVids()
