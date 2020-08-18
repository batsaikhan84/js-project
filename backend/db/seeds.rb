# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.delete_all
# Expense.delete_all

require 'faker'
require 'securerandom'
category = ['home' ,'food', 'childCare', 'healthCare', 'transportation', 'personalCare', 'petCare', 'entertainment']
incomeType = ['salary', 'bonus', 'sideIncome']
paymentType = ['cash', 'creditCard']
date = [['2020-01-01', '2020-01-31'],
        ['2020-02-01', '2020-02-28'],
        ['2020-03-01', '2020-03-31'],
        ['2020-04-01', '2020-04-30'],
        ['2020-05-01', '2020-05-31'],
        ['2020-06-01', '2020-06-30'],
        ['2020-07-01', '2020-07-31'],
        ['2020-08-01', '2020-08-31'],
        ['2020-09-01', '2020-09-30'],
        ['2020-10-01', '2020-10-31'],
        ['2020-11-01', '2020-11-30'],
        ['2020-12-01', '2020-12-31']]
user_number = 2
expense_number = 8

user_number.times do 
    User.create do |user|
        user.email = Faker::Internet.email
        user.password = 'password'
        user.firstName = Faker::Name.first_name
        user.lastName = Faker::Name.last_name
        user.gender = Faker::Gender.binary_type
        user.age = Faker::Number.between(from: 20, to: 60)
    end
end
u = 1
while u < User.all.length + 1 do
    m = 0
    while m < date.length do
        expense_number.times do
            Expense.create do |expense|
                expense.name = Faker::Lorem.word
                expense.amount = Faker::Number.decimal(l_digits: 2)
                expense.category = category.sample 
                expense.date = Faker::Date.between(from: date[m][0], to: date[m][1])
                expense.note = Faker::Lorem.sentence
                expense.paymentType = paymentType.sample
                expense.user_id = u
            end
        end
        m += 1
    end
    u += 1
end
j = 1
while j < User.all.length + 1 do 
    i = 0  
    while i < date.length do
        incomeType.each do |e|
            Income.create do |income|
                income.name = e
                if income.name == 'salary'
                    income.amount = Faker::Number.between(from: 4000, to: 6000)
                elsif income.name == 'bonus'
                    income.isSupplement = true
                    income.amount = Faker::Number.between(from: 0, to: 500)
                elsif income.name == 'sideIncome'
                    income.isSupplement = true
                    income.amount = Faker::Number.between(from: 0, to: 300)
                end
                income.date = Faker::Date.between(from: date[i][0], to: date[i][1])
                income.user_id = j  
            end
        end
        i += 1
    end
    j += 1
end



# category = [{'home' => {mortage: 1500, water: 15, gas: 90, electric: 70},
#                 'food' => {lunch: 12, rice: 26, beef: 60, chicken: 50},
#                 'childCare' => {dayCare: 100, toy: 10, pianoLesson: 50, lunchProgram: 100},
#                 'healthCare' => {prescription: 40, dentist: 150, yearlyCheckout: 200, vitamin: 10},
#                 'transportation' => {carPayment: 500, gas: 30, newTire: 600, carInsurance: 100},
#                 'personalCare' => {gym: 30, hairCut: 20, soap: 10, toothpaste: 15},
#                 'petCare' => {veterinary: 100, dogFood: 50, dogTreat: 20, dogGrooming: 20},
#                 'entertainment' => {movie: 20, dineOut: 60, paintBall: 50, skiing: 100}
#                 },
#                 {'home' => {mortage: 1500, water: 20, gas: 120, electric: 90},
#                 'food' => {lunch: 15, flour: 30, pork: 50, chicken: 50},
#                 'childCare' => {dayCare: 100, toy: 10, pianoLesson: 50, lunchProgram: 100},
#                 'healthCare' => {prescription: 40, dentist: 50, eyeExam: 100, vitamin: 10},
#                 'transportation' => {carPayment: 500, gas: 35, oilChange: 40, carInsurance: 100},
#                 'personalCare' => {gym: 30, hairCut: 20, shampoo: 10, toothpaste: 15},
#                 'petCare' => {veterinary: 100, dogFood: 60, dogTreat: 25, dogGrooming: 20},
#                 'entertainment' => {movie: 20, clubbing: 100, airShow: 30, goCart: 200}
#                 }]
# paymentType = ['cash', 'creditCard']

# category[0].each do |key1, value1|
#     value1.each do |key2, value2|
#         puts "#{key1}: #{key2} - #{value2}"
#         Expense.create(name: key2, 
#                         amount: value2, 
#                         category: key1, 
#                         date: Faker::Date.between(from: '2020-06-01', to: '2020-06-30'),
#                         note: Faker::Lorem.sentence,
#                         paymentType: paymentType.sample,
#                         user_id: 1)
#     end
# end
# category[1].each do |key1, value1|
#     value1.each do |key2, value2|
#         puts "#{key1}: #{key2} - #{value2}"
#         Expense.create(name: key2, 
#                         amount: value2, 
#                         category: key1, 
#                         date: Faker::Date.between(from: '2020-07-01', to: '2020-07-31'),
#                         note: Faker::Lorem.sentence,
#                         paymentType: paymentType.sample,
#                         user_id: 1)
#     end
# end

# incomeType = [{salary: 5000, bonus: 500, sideGig: 500}, {salary: 5000, bonus: 100, sideGig: 400}]
# incomeType[0].each do |key, value|
#     Income.create(name: key,
#                     amount: value,
#                     date: Faker::Date.between(from: '2020-06-01', to: '2020-06-30'),
#                     isSupplement: Faker::Boolean.boolean,
#                     user_id: 1)
# end
# incomeType[1].each do |key, value|
#     Income.create(name: key,
#                     amount: value,
#                     date: Faker::Date.between(from: '2020-07-01', to: '2020-07-31'),
#                     isSupplement: Faker::Boolean.boolean,
#                     user_id: 1)
# end

