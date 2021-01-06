class CategorySerializer < ActiveModel::Serializer
  attributes :id, :type, :price, :image, :textile
  has_many :designers
end
