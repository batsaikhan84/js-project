class ExpensesController < ApplicationController
    def index
        expenses = Expense.all
        render json: ExpenseSerializer.new(expenses).to_serialized_json 
    end

    def show
        expense = Expense.find_by(id: params[:id])
        if expense
            render json: ExpenseSerializer.new(expense).to_serialized_json
        else
            render json: { message: 'Expense not found'}
        end
    end
end
