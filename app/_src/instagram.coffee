#
# Instagram stream.
#

userFeed = new Instafeed(
  get: "user"
  userId: 13217349
  accessToken: "13217349.ab103e5.6de31478a5b74ef0902f464816836942"
  target: "instagram"
  limit: 18
  template: "<li class=\"instagram__item\"><a href=\"{{link}}\"><img src=\"{{image}}\" /></a></li>"
)
userFeed.run()
