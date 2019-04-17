class HomeController < ApplicationController
    def index
        @doors = ["1", "2", "3"]
        @result = [true, false, false].shuffle
    end
end