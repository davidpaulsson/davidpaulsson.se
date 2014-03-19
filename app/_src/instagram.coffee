#
# Instagram
# Load the images
#

userFeed = new Instafeed(
  get: "user"
  userId: 13217349
  accessToken: "13217349.ab103e5.6de31478a5b74ef0902f464816836942"
  target: "instagram"
  limit: 18
  template: "<li class=\"instagram__item\"><div class=\"instagram__likes\">{{likes}} people like this</div><img class=\"lazy-hidden\" data-src=\"{{image}}\" /></li>"
)
userFeed.run()
