class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.float :amount
      t.string :category
      t.date :date
      t.text :note
      t.string :paymentType
      t.integer :user_id

      t.timestamps
    end
  end
end
