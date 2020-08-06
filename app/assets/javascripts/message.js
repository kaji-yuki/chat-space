$(function(){

  function buildHTML(message){
    if (message.image) {
      let html =
        `<div class="Message">
          <div class="Message__info">
            <div class="Message__name">
              ${message.user_name}
            </div>
            <div class="Message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message__text">
            <p class="Message__body">
              ${message.body}
            </p>
            <img class='Message__image' src="${message.image}">
          </div>
        </div>`
        return html;
    } else {
      let html =
        `<div class="Message">
          <div class="Message__info">
            <div class="Message__name">
              ${message.user_name}
            </div>
            <div class="Message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message__text">
            <p class="Message__body">
              ${message.body}
            </p>
          </div>
        </div>`
        return html
    };
  }

  $(".FormBox").on("submit", function(e){ 
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".ChatTable").append(html);
      $(".FormBox")[0].reset();
      $(".ChatTable").animate({ scrollTop: $(".ChatTable")[0].scrollHeight});
      $(".Send-btn").prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  });
});