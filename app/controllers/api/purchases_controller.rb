class Api::PurchasesController < ApplicationController 
    def create
        @purchase = Purchase.new(purchase_params)
        if @purchase.save
            render json: {}
        else
            render json: @purchase.errors.full_messages, status: 400
        end

    end

    private

    def purchase_params
        params.require(:purchase).permit(:gameId, :buyerId)
    end
end