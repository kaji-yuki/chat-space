# README


# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true, unique: true|
|email|string|null: false|
|password|string|null: false, unique: true|

### association
* has_many:users_groups
* has_many:groups,through:users_groups
* has_many:messages


## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true, unique: true|

### association
* has_many:users_groups
* has_many:users,through:users_groups
* has_many:messages


## messages table

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
* belongs_to: user
* belongs_to: group


## users_groups table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
* belongs_to: group
* belongs_to: user



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

