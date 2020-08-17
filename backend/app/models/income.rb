class Income < ApplicationRecord
    belongs_to :user
    validates :name, :amount, :date, :isSupplement, :user_id, presence: true
end
