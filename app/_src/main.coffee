#
# lazyLoadXT settings
#

$.lazyLoadXT.onload = ->
  $(this).removeClass("lazy-hidden").addClass "animated fade-in"
