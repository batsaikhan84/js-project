class UserSerializer
    def initialize(user_object)
        @user = user_object
    end
    def to_serialized_json
        @user.to_json(:include => {:income => {:except => [:created_at, :updated_at]}, 
                                :expense => {:except => [:created_at, :updated_at]}
                                }, :except => [:created_at, :updated_at])
    end
end
