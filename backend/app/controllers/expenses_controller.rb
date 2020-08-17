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
    def create
        @expense = Expense.new(name: params[:name],
                                amount: params[:amount],
                                category: params[:category],
                                date: params[:date],
                                note: params[:note],
                                paymentType: params[:paymentType],
                                user_id: params[:user_id])
        if @expense.save
            render json: ExpenseSerializer.new(@expense).to_serialized_json
        else
            render json: {message: 'expense not created'}
        end
    end
end
