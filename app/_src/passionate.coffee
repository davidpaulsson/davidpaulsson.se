#
# What I'm passionate about
#

passions = [
  "coffee",
  "design",
  "usability",
  "WordPress",
  "illustration",
  "interior&nbsp;design",
  "travel",
  "performance",
  "sneakers",
  "fashion",
  "user&nbsp;experience",
  "hiphop",
  "reggae",
  "dancehall",
  "technology",
  "travel",
  "food",
  "agile",
  "my&nbsp;friends",
  "my&nbsp;wife",
  "semantics",
  "OOCSS",
  "Sass",
  "front end&nbsp;tooling",
  "BEM methodology",
  "code&nbsp;structure",
  "social&nbsp;media",
  "user&nbsp;experience"
]

$ ->
  $(".shuffle-passions").click (e) ->
    e.preventDefault()

    # Shuffle Array
    passions.sort ->
      0.5 - Math.random()

    # Spit out three random passions
    $("#passion1").empty().append passions[0]
    $("#passion2").empty().append passions[1]
    $("#passion3").empty().append passions[2]
