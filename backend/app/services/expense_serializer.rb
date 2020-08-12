class ExpenseSerializer
    def initialize(expense_object)
        @expense = expense_object
    end
    def to_serialized_json
        @expense.to_json(:except => [:created_at, :updated_at])
    end
end