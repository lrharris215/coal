class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password
    
    before_validation :ensure_session_token

   has_many :purchases,
   foreign_key: :buyerId,
   class_name: :Purchase

   has_many :games,
   through: :purchases,
   source: :game

    def self.find_by_credentials(username, password)
        @user = User.find_by_username(username)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(@password)
    end

    def is_password?(password) 
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

end
