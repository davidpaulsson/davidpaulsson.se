# https://api.instagram.com/v1/users/13217349/media/recent/?access_token=13217349.ab103e5.6de31478a5b74ef0902f464816836942
# $ ->
#   $.getJSON "https://api.instagram.com/v1/users/13217349/media/recent/?access_token=13217349.ab103e5.6de31478a5b74ef0902f464816836942", (data) ->
#     $.each data.items, (i, item) ->
#       image = $("<img/>").attr("src", item.media.m)
#       link = $("<a>").attr("href", item.media.url)
#       link.append image
#       $(".instagram").append link
#       return
#   return
