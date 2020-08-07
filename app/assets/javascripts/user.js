$(function(){

  function addUser(user){
    let html = `
              <div class="ChatMember clearfix">
                <p class="ChatMember__name">${user.name}</p>
                <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>
              `;
    $("#UserSearchResult").append(html);
  }

  function  addNoUser(){
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
                `;
    $("#UserSearchResult").append(html);
  }

  function addMember(addUserId,addUserName){
    let html = `
                <div class="ChatMember">
                  <p class="ChatMember__name">${addUserName}</p>
                  <input name="group[user_ids][]" type="hidden" value="${addUserId}" />
                  <div class="ChatMember__remove ChatMember__button">削除</div>
                  </div>
                  `;
    $(".ChatMembers").append(html)
  }

  $("#UserSearch__field").on("keyup", function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      dataType: 'json',
      data: { keyword: input },
    })
    .done(function(users){
      $("#UserSearchResult").empty();
      if (users.length !== 0 ){
        users.forEach(function(user){
          addUser(user);
      });
    } else if (input.length == 0) {
      return false;
    } else {
        addNoUser();
    }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    });
  });

  $("#UserSearchResult").on("click",".ChatMember__add",function(){
    const addUserId = $(this).attr("data-user-id") ;
    const addUserName = $(this).attr("data-user-name");
    $(this).parent().remove();
    addMember(addUserId, addUserName);
  });
  
  $(".ChatMembers").on("click", ".ChatMember__remove", function(){
    $(this).parent().remove();
  })

  });