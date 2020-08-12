class IncomeSerializer
    def initialize(income_object)
        @income = income_object
    end
    def to_serialized_json
        @income.to_json(:except => [:created_at, :updated_at])
    end
end