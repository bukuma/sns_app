class PostsController < ApplicationController
  def index
    render :index
  end

  def new
    render :new
  end
end