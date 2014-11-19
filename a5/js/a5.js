$(document).ready(function() {

  var postnumber = 0;

  console.log('running a5.js');

  // Submit post
  $('#submitpost').click(function() {
    console.log('clicked submitpost');

    var posttext = $('#newpost').val();

    postnumber++;

    var post = new Post(posttext, postnumber);

    $('#newpost').val('');
  });

  // Toggle stars
  $(document).on('click', '.star-icon', function() {
    console.log('clicked: ' + this.id);
    var id = "#" + this.id;
    if ($(id).hasClass('fa-star-o')) {
      console.log('add fa-star');
      $(id).addClass('fa-star');
      $(id).removeClass('fa-star-o');
    } else {
      console.log('remove fa-star');
      $(id).addClass('fa-star-o');
      $(id).removeClass('fa-star');
    }
  });

  //Toggle follow
  $('#follow').on('click', function() {
    console.log('clicked: ' + this.id);
    var id = "#" + this.id;
    if ($(id).hasClass('btn-default')) {
      console.log('add btn-success');
      $(id).addClass('btn-success');
      $(id).removeClass('btn-default');
    } else {
      console.log('remove btn-success');
      $(id).addClass('btn-default');
      $(id).removeClass('btn-success');
    }
  });

  // $('#follow').on('click', function() {
  //   $(this).button('toggle');
  // });

  // Post constructor
  function Post(text, id) {
    this.text = text;
    this.id = id;
    console.log(this.text);
    console.log(this.id);
    this.postid = "post" + this.id;
    this.starid = "star" + this.id;

    // Mustache template
    this.data = {
      id: this.id,
      text: this.text,
      postid: this.postid,
      starid: this.starid
    }

    this.template = "<li href='#' class='list-group-item'><span class='whois'><img src='images/chris.jpg' alt='profile-image'> <a href='a5.html'>@chris: </a></span><span class='star'><i id='{{starid}}' class='star-icon fa fa-2x fa-star-o'></i></span> {{text}}</li>";

    this.html = Mustache.to_html(this.template, this.data);

    console.log(this.html);

    $('#postlist').prepend(this.html);
    //$('#postlist').prepend("<a href=\"#\" id=" + this.postid + " class=\"list-group-item\"><span><i onclick=\"toggle(\'"+ this.starid +"\')\" id=" + this.starid + " class=\"fa fa-star-o\"></i></span> " + this.text + "</a>");
  }

});
