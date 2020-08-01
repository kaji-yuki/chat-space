require 'rails_helper'
 
describe Message do
  describe "#create" do
    context 'can save' do
      
      it "is valid only with a message" do
        expect(build(:message, image: nil)).to be_valid
      end

      it "is valid only with an image" do
        expect(build(:message, body: nil)).to be_valid
      end

      it "is valid with message and image" do
      expect(build(:message)).to be_valid
      end
    end

    context 'can not save' do
      it "in invalid without message and image" do
        post = build(:message, body: nil, image: nil)
        post.valid?
        expect(post.errors[:body]).to include("を入力してください")
      end

      it "is invalid without group_id" do
        post = build(:message, group_id: nil)
        post.valid?
        expect(post.errors[:group]).to include("を入力してください")
      end

      it "is invalid without user_id" do
        post = build(:message, user_id: nil)
        post.valid?
        expect(post.errors[:user]).to include("を入力してください")
      end
    end
  end
end