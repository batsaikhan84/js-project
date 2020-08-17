class IncomesController < ApplicationController
    def index
        incomes = Income.all
        render json: IncomeSerializer.new(incomes).to_serialized_json
    end
    def show
        income = Income.find_by(id: params[:id])
        if income
            render json: IncomeSerializer.new(income).to_serialized_json
        else
            render json: { message: 'Income not found'}
        end
    end
    def create
        @income = Income.new(name: params[:name],
                                amount: params[:amount],
                                date: params[:date],
                                isSupplement: params[:isSupplement],
                                user_id: params[:user_id])
        if @income.save
            render json: IncomeSerializer.new(@income).to_serialized_json
        else
            render json: { message: 'income not created' }
        end
    end
end
