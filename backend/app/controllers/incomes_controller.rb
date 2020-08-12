class IncomesController < ApplicationController
    def index
       incomes = Income.all
       render json: IncomeSerializer.new(incomes).to_serialized_json
    end
    def show
        income - Income.find_by(id: params[:id])
        if income
            render json: IncomeSerializer.new(income).to_serialized_json
        else
            render json: { message: 'Income not found'}
        end
    end
end
