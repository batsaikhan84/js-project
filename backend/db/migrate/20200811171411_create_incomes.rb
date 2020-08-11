class CreateIncomes < ActiveRecord::Migration[6.0]
  def change
    create_table :incomes do |t|
      t.string :name
      t.float :amount
      t.date :date
      t.boolean :isSupplement

      t.timestamps
    end
  end
end