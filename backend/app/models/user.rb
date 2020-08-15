class User < ApplicationRecord
    has_many :incomes
    has_many :expenses
    validates :email, :password, :firstName, :lastName, :gender, :age, presence: true
    validates :email, uniqueness: true
end
