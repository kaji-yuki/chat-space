class MessagesController < ApplicationController
  def index
  end

  def create
    @message = Message.create
    # createアクション要確認
  end
end
