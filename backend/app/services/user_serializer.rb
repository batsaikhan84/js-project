class UserSerializer
    def initialize(user_object)
        @user = user_object
    end
    def to_serialized_json
        @user.to_json(:include => {:incomes => {:except => [:created_at, :updated_at, :user_id]}, 
                                :expenses => {:except => [:created_at, :updated_at, :user_id]}
                                }, :except => [:created_at, :updated_at])
    end
end
