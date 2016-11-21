//= require_tree .

$(document).ready(function() {
  loadMediumPosts()
  $(".tabview__nav a").on("click", showSection)
})

function loadMediumPosts() {
  $.ajax({
    url: "https://frozen-harbor-32065.herokuapp.com?url=https://medium.com/@damirkotoric/latest?format=json",
    complete: function(data) {
      var json = JSON.parse(data.responseText.replace('])}while(1);</x>', ''))
      showPosts(json)
    }
  });
}

function showPosts(obj) {
  var source = $("#handlebars-posts").html()
  var template = Handlebars.compile(source)
  var jsonPosts = $(obj["payload"]["references"]["Post"])[0]
  var posts = []
  $.each(jsonPosts, function(key, value) {
    $jsonPost = $(value)[0]
    if ($jsonPost["inResponseToPostId"] == "") {
      post = {
        title: $jsonPost["title"],
        url: "https://medium.com/@damirkotoric/" + $jsonPost["uniqueSlug"],
        image_url: "https://cdn-images-1.medium.com/" + $jsonPost["virtuals"]["previewImage"]["imageId"]
      }
      posts.push(post)
    }
  })
  var context = { 'posts': posts }
  var html = template(context)
  $("#latest-posts").append(html)
  $("#spinner").one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend', function(e) {
    $(this).addClass("-hidden")
  });
}

function showSection(e) {
  e.preventDefault()
  // Hide everything
  $(".tabview__nav a").removeClass("-is-active")
  $(".tabview__view").removeClass("-is-active")
  // Show the right thing
  $(e.currentTarget).addClass("-is-active")
  var indexToShow = ($(e.currentTarget).index()+1)
  $(".tabview__view:nth-child(" + indexToShow + ")").addClass("-is-active")
}
