class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :category
end
