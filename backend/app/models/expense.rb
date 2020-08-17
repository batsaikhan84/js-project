class Expense < ApplicationRecord
    belongs_to :user
    validates :name, :amount, :category, :date, :note, :paymentType, :user_id, presence: true
end
