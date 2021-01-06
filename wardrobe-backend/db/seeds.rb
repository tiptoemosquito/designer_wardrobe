# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
boots = Category.create(name: "Boots")
heels = Category.create(name: "Heels")
sneakers = Category.create(name: "Sneakers")

Designer.create(name: "Gucci xxmm Frances Matelasse Chelsea Boot", price: 890, quantity: 18)
Designer.create(name: "Salvatore Ferragamo Violet Sandal", price: 695, quantity: 14)
Designer.create(name: "Elyse Star Platform Derby STELLA MCCARTNEY", price: 1035, quantity: 12)
