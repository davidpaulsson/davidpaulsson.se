#
# Open/Close the menu
#

$ ->
  $menu = $(".main-nav__items")

  #
  # Open the menu
  #

  $(".main-nav__trigger").click (e) ->
    e.preventDefault()

    if $menu.hasClass("main-nav__items--show")
      $menu
        .removeClass("main-nav__items--show")
        .addClass("main-nav__items--remove")

    else
      $menu
        .removeClass("main-nav__items--remove")
        .addClass("main-nav__items--show")

  #
  # Close if user click anywhere on the page
  #

  $(".wrapper").click ->
    if $menu.hasClass("main-nav__items--show")
      $menu
        .removeClass("main-nav__items--show")
        .addClass("main-nav__items--remove")
