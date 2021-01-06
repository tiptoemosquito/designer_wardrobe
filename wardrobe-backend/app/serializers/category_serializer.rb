class CategorySerializer < ActiveModel::Serializer
  attributes :id, :type, :price, :image, :textile
  belongs_to :designer
end
