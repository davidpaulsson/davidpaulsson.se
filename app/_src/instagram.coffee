#
# Instagram
#

$ ->
  if $("#instagram").length
    yepnope
      load: "/_bower_components/instafeed.js/instafeed.js"
      complete: ->
        userFeed = new Instafeed(
          get: "user"
          userId: 13217349
          accessToken: "13217349.ab103e5.6de31478a5b74ef0902f464816836942"
          target: "instagram"
          resolution: "standard_resolution"
          limit: 12
          template: "<li class=\"instagram__item\"><div class=\"instagram__likes\"><i class=\"fa fa-heart\"></i>{{likes}}</div><img class=\"lazy-hidden\" data-src=\"{{image}}\" /></li>"
        )
        userFeed.run()
