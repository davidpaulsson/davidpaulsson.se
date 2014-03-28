#
# lazyLoadXT settings
#

$.lazyLoadXT.onload = ->
  $(this).removeClass("lazy-hidden").addClass "fade--in"
