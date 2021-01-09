class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :leather_textile
  belongs_to :category
end
