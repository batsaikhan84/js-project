class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :firstName
      t.string :lastName
      t.string :gender
      t.string :age

      t.timestamps
    end
  end
end
